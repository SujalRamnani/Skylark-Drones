require("dotenv").config();

const express = require("express");
const cors = require("cors");
const axios = require("axios");
const { GoogleGenAI } = require("@google/genai");

const app = express();

app.use(cors());
app.use(express.json());

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const MONDAY_API = "https://api.monday.com/v2";

async function getBoardData(boardId) {
  const query = `
  query {
    boards(ids:${boardId}) {
      id
      name
      items_page(limit:500) {
        items {
          id
          name
          column_values {
            text
            column {
              title
            }
          }
        }
      }
    }
  }`;

  const response = await axios.post(
    MONDAY_API,
    { query },
    {
      headers: {
        Authorization: process.env.MONDAY_API_KEY,
        "Content-Type": "application/json",
      },
    }
  );

  if (response.data.errors) {
    throw new Error(JSON.stringify(response.data.errors));
  }

  return response.data.data.boards[0];
}

app.get("/", (req, res) => {
  res.send("Backend Running 🚀");
});
app.get("/models", async (req, res) => {
  try {
    const models = await ai.models.list();

    const modelNames = [];

    for await (const model of models) {
      modelNames.push(model.name);
    }

    res.json(modelNames);

  } catch (err) {
    console.log(err);

    res.status(500).json({
      error: err.message,
    });
  }
});

app.post("/chat", async (req, res) => {
  try {
    const { question } = req.body;

    if (!question) {
      return res.status(400).json({
        error: "Question is required",
      });
    }

    const deals = await getBoardData(process.env.DEALS_BOARD_ID);
    const workOrders = await getBoardData(process.env.WORK_BOARD_ID);

  const prompt = `
You are an AI Business Intelligence Assistant for founders and executives.

Your role is to analyze business data from Monday.com and provide accurate, data-driven insights.

Instructions:
- Answer only using the provided Monday.com data.
- Use BOTH the Deals Board and Work Orders Board whenever relevant.
- If the user's question is ambiguous or lacks sufficient detail, ask ONE clarifying question before answering.
- If some records contain missing, null, or incomplete values, mention that as a Data Quality Note before providing insights.
- Never invent or assume information that is not present in the data.
- If the requested information is unavailable, clearly state that instead of guessing.
- Whenever appropriate, provide actionable business recommendations in addition to numbers.
- Keep responses professional, concise, and suitable for founders or executives.

Deals Board:
${JSON.stringify(deals)}

Work Orders Board:
${JSON.stringify(workOrders)}

User Question:
${question}
`;

const result = await ai.models.generateContent({
  model: "models/gemini-flash-latest",
  contents: prompt,
});

res.json({
  success: true,
  answer: result.text,
});

  } catch (err) {
    console.log("========== ERROR ==========");
    console.log(err);
    console.log("===========================");

    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
});

app.listen(5000, () => {
  console.log("🚀 Server running on port 5000");
});