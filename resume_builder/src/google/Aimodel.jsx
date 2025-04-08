// npm install @google/generative-ai mime-types
//instal before using the below code 

import { GoogleGenerativeAI } from "@google/generative-ai";


const GEMINI_API_KEY = "AIzaSyAPyUcIzGlVju6P6djIJLqCdGifFdEfYDo";
const apiKey = GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
});

const generationConfig = {
    temperature: 0,
    topP: 0.05,
    topK: 40,
    maxOutputTokens: 120,
    responseModalities: [
    ],
    responseMimeType: "text/plain",
};

export const chatSession = model.startChat({
    generationConfig,
    history: [],
});

// in this project we are handling the api requesting to google gemini in frontend but we should do this in backend by setting a route and store the key in env file