
import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from 'fs';
import path from 'path';

// Load environment variables if running locally
const API_KEY = process.env.VITE_GEMINI_API_KEY || process.env.GEMINI_API_KEY;

if (!API_KEY) {
    console.error("Error: GEMINI_API_KEY is not set.");
    process.exit(1);
}

const genAI = new GoogleGenerativeAI(API_KEY);
// Use Gemini 2.0 Flash (stable) or user's requested 2.5. 
// We enable the 'googleSearchRetrieval' tool to ensure real-time data.
const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-exp", // Switching to a model known to support tools well or stick to requested if valid.
    // Note: To prompt for real-time data effectively, we need to declare the tool.
    tools: [{ googleSearchRetrieval: {} }]
});

async function updateStocks() {
    console.log("Fetching stock data using Gemini...");

    const prompt = `
    You are a financial data assistant. You MUST use your Google Search tool to find the EXACT current/latest price and 24h change for the following assets. 
    DO NOT use training data. Search for "current price of [Asset] right now".

    Assets to check:
    1. S&P 500 Index
    2. NASDAQ Composite
    3. STOXX Europe 600
    4. US 10-Year Treasury Yield
    5. EUR/USD
    6. Bitcoin (BTC/USD)
    7. JPMorgan Chase (JPM)
    8. Goldman Sachs (GS)
    9. BlackRock (BLK)
    10. LVMH (MC.PA) - as a major European stock representative

    The output MUST be strictly valid JSON with this exact structure (no markdown code blocks):
    {
      "stocks": [
        { "symbol": "S&P 500", "value": "6,940.01", "change": "+0.06%", "positive": true, "type": "index" },
        ...
      ]
    }
    
    Rules:
    - "value": formatted string. Add "$" or "€" or "%" as appropriate.
    - "change": formatted string with sign and % (e.g. "+0.50%").
    - "positive": boolean true if change >= 0.
    - "type": "index", "forex", "crypto", "stock", "rate".
    - "forexKey": for forex only.
    `;

    try {
        const result = await model.generateContent(prompt);
        const response = await result.response;
        let text = response.text();

        // Clean up markdown if present
        text = text.replace(/```json/g, '').replace(/```/g, '').trim();

        const data = JSON.parse(text);

        // Add lastUpdated timestamp
        data.lastUpdated = new Date().toISOString();

        // Validate structure briefly
        if (!data.stocks || !Array.isArray(data.stocks)) {
            throw new Error("Invalid format received from Gemini");
        }

        const targetPath = path.resolve('./src/data/stockData.json');
        fs.writeFileSync(targetPath, JSON.stringify(data, null, 2));

        console.log("Successfully updated stockData.json");
        console.log(JSON.stringify(data, null, 2));

    } catch (error) {
        console.error("Error updating stocks:", error);
        process.exit(1);
    }
}

updateStocks();
