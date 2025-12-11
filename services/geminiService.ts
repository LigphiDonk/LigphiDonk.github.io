import { GoogleGenAI } from "@google/genai";

const apiKey =
  process.env.API_KEY ||
  process.env.GEMINI_API_KEY ||
  (typeof import.meta !== 'undefined' ? import.meta.env?.VITE_GEMINI_API_KEY : undefined);

const getClient = (): GoogleGenAI | null => {
  if (!apiKey) {
    console.warn("Gemini API key missing; AI assistant disabled.");
    return null;
  }

  try {
    return new GoogleGenAI({ apiKey });
  } catch (error) {
    console.error("Failed to initialize Gemini API client:", error);
    return null;
  }
};

const ai = getClient();

export const isGeminiEnabled = Boolean(ai);

export const generateBlogInsight = async (
  context: string,
  prompt: string
): Promise<string> => {
  if (!ai) {
    return "AI assistant is disabled because GEMINI_API_KEY is not configured.";
  }

  try {
    const modelId = 'gemini-2.5-flash';
    
    const fullPrompt = `
    You are a helpful technical assistant embedded in a technical blog.
    
    CONTEXT (The current article content):
    "${context}"
    
    USER PROMPT:
    ${prompt}
    
    Instructions:
    - Answer based on the context provided.
    - Keep the tone professional, concise, and helpful (OpenAI/Technical style).
    - IMPORTANT: Always answer in CHINESE (Simplified) to match the blog's language.
    - If the answer isn't in the context, use your general knowledge but mention that it's outside the article's scope.
    - Format response in Markdown.
    `;

    const response = await ai.models.generateContent({
      model: modelId,
      contents: fullPrompt,
    });

    return response.text || "暂时无法生成回复。";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "抱歉，处理您的请求时遇到错误。请检查 API Key 配置。";
  }
};
