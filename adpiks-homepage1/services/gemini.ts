
import { GoogleGenAI } from "@google/genai";

// Always initialize GoogleGenAI with a named parameter for apiKey using process.env.API_KEY directly.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getMarketingInsight = async (industry: string, goals: string) => {
  try {
    // Using ai.models.generateContent with the recommended gemini-3-flash-preview model for marketing text tasks.
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are a world-class brand strategist for ADPiks, a digital marketing agency. 
                 A client in the "${industry}" industry with the goal of "${goals}" is asking for a quick creative strategy.
                 Provide a structured, trendy, and visionary marketing advice in Korean. 
                 Focus on Digital Strategy, Content Creativity, and Performance.
                 Keep it professional and concise.`,
      config: {
        temperature: 0.8,
        topP: 0.95,
      }
    });
    // Extracting generated text using the .text property directly from the response object.
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "죄송합니다. 현재 AI 컨설턴트가 잠시 휴식 중입니다. 나중에 다시 시도해 주세요.";
  }
};