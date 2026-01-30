
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
// Use Gemini 2.5 Flash as requested, or fallback if not available yet (it is experimental)
// If 2.5 fails, user should check model availability, but we use the requested string.
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

async function updateStocks() {
    console.log("Fetching stock data using Gemini...");

    const prompt = `
    You are a financial data API. Return a JSON object with the current price and 24h percentage change for the following assets. 
    Use real-time data if available to you, otherwise use the most recent closing data you have access to.
    
    Assets:
    1. S&P 500 Index
    2. NASDAQ Composite
    3. Dow Jones Industrial Average
    4. Gold (Spot Price per Ounce)
    5. Silver (Spot Price per Ounce)
    6. Crude Oil (WTI)
    7. Bitcoin (BTC/USD)
    8. EUR/USD
    9. GBP/USD
    10. USD/JPY

    The output MUST be strictly valid JSON with this exact structure (no markdown code blocks):
    {
      "stocks": [
        { "symbol": "S&P 500", "value": "6,940.01", "change": "+0.06%", "positive": true, "type": "index" },
        ...
      ]
    }
    
    Rules:
    - "value": formatted string with commas (e.g. "6,940.01"). Add "$" for commodities/metals/crypto. No symbol for indices/forex.
    - "change": formatted string with sign and % (e.g. "+0.50%").
    - "positive": boolean true if change >= 0.
    - "type": "index", "metal", "commodity", "crypto", "forex".
    - "forexKey": for forex, add the base currency key e.g. "EUR", "GBP", "JPY".
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
