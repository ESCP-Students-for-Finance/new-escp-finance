import { GoogleGenerativeAI } from '@google/generative-ai';

const MODEL_NAME = 'gemini-2.5-flash';
const MAX_QUERY_LENGTH = 500;

// --- Origin allowlist -------------------------------------------------------
// Browser requests are only accepted from our own site. Configure extra origins
// via the ALLOWED_ORIGINS env var (comma-separated) if the domain changes.
const allowedOrigins = () => {
  const fromEnv = (process.env.ALLOWED_ORIGINS || '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);
  const site = process.env.VITE_SITE_URL;
  const vercel = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null;
  return [...fromEnv, site, vercel].filter(Boolean);
};

const isAllowedOrigin = (origin) =>
  Boolean(origin) && allowedOrigins().some((o) => origin === o);

// --- Rate limit -------------------------------------------------------------
// Best-effort, in-memory, per warm serverless instance (resets on cold start).
// This slows abuse but is NOT a hard guarantee. The real backstop is a quota /
// budget cap on the Gemini key in Google AI Studio; for a durable shared limit,
// move this to Upstash / Vercel KV.
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 10;
const hits = new Map();

const rateLimited = (ip) => {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear(); // opportunistic cleanup
  return recent.length > MAX_PER_WINDOW;
};

const clientIp = (req) =>
  (req.headers['x-forwarded-for'] || '').split(',')[0].trim() ||
  req.socket?.remoteAddress ||
  'unknown';

const parseBody = (req) => {
  if (!req?.body) return {};
  if (typeof req.body === 'string') {
    try {
      return JSON.parse(req.body);
    } catch {
      return {};
    }
  }
  return req.body;
};

const buildPrompt = (query) =>
  `You are an expert financial analyst. Provide a concise, insightful answer to: "${query}". Keep it under 100 words, sophisticated yet accessible.`;

export default async function handler(req, res) {
  const origin = req.headers.origin;

  // CORS: reflect only our own origin back to the browser.
  if (isAllowedOrigin(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Vary', 'Origin');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  }

  if (req.method === 'OPTIONS') {
    res.status(isAllowedOrigin(origin) ? 204 : 403).end();
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  // Block cross-origin browser callers. A non-browser client can spoof Origin
  // (or omit it), so the rate limit + the key's quota cap are the backstops
  // there. We only reject when an Origin is present AND not on the allowlist,
  // so same-origin requests (which may omit Origin) keep working.
  if (origin && !isAllowedOrigin(origin)) {
    res.status(403).json({ error: 'Forbidden' });
    return;
  }

  if (rateLimited(clientIp(req))) {
    res.status(429).json({ error: 'Too many requests' });
    return;
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: 'Missing GEMINI_API_KEY' });
    return;
  }

  const { query } = parseBody(req);
  if (!query || typeof query !== 'string' || query.length > MAX_QUERY_LENGTH) {
    res.status(400).json({ error: 'Invalid query' });
    return;
  }

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });
    const result = await model.generateContent(buildPrompt(query));
    const response = await result.response;
    const text = response.text();
    res.status(200).json({ text });
  } catch (error) {
    console.error('Gemini API error:', error);
    res.status(500).json({ error: 'Gemini request failed' });
  }
}
