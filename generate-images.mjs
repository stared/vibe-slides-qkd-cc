import { GoogleGenAI } from "@google/genai";
import fs from "fs";
import path from "path";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const prompts = [
  {
    name: "title",
    prompt: "Anime style illustration of two characters, Alice and Bob, exchanging a glowing quantum key through a futuristic Hong Kong skyline at night. Cyberpunk aesthetic with neon pink and blue colors. Studio Ghibli meets Ghost in the Shell. The key appears as a shimmering stream of photons between them. 16:9 aspect ratio, high quality."
  },
  {
    name: "quantum-lock",
    prompt: "Anime style digital padlock floating in cyberspace, surrounded by flowing data streams and binary code. Soft glowing blue and purple colors. Clean, minimalist Japanese illustration style. 16:9 aspect ratio."
  },
  {
    name: "quantum-threat",
    prompt: "Anime illustration split in two panels: Left side shows a confident character with a traditional padlock, right side shows an ominous quantum computer as a giant robot monster breaking through. Dramatic lighting, manga panel style composition. 16:9 aspect ratio."
  },
  {
    name: "qkd-intro",
    prompt: "Cute anime scientist character excitedly presenting a glowing quantum particle. The particle emits soft pink and blue light. Background shows elegant quantum wave functions. Kawaii style but scientifically themed. 16:9 aspect ratio."
  },
  {
    name: "bb84-protocol",
    prompt: "Anime style Alice and Bob characters on opposite sides, connected by a stream of glowing photons. Alice has blue theme, Bob has pink theme. Show polarization symbols floating near photons. Clean infographic style with anime character design. 16:9 aspect ratio."
  },
  {
    name: "device-problem",
    prompt: "Dramatic anime scene of a suspicious-looking quantum device box with a tiny cute cartoon devil peeking inside it. The device appears normal on outside but has hidden malicious components visible. Dark thriller anime style with comedic undertone. 16:9 aspect ratio."
  },
  {
    name: "diqkd-hero",
    prompt: "Triumphant anime hero character standing confidently with arms crossed, surrounded by floating quantum devices that appear as cute but suspicious robot characters. The hero is protected by a glowing energy shield. Inspirational anime poster style, dynamic pose. 16:9 aspect ratio."
  },
  {
    name: "bell-inequality",
    prompt: "Educational anime infographic showing quantum entanglement. Two entangled particles as cute connected twin characters holding hands across space. Show a magical barrier labeled '2' being broken. Bright, educational style like a science anime. 16:9 aspect ratio."
  },
  {
    name: "diqkd-protocol",
    prompt: "Comic panel layout anime style showing DIQKD protocol. Cute chibi versions of Alice and Bob with their quantum devices. Show entangled photons as connected glowing hearts. A checkpoint gate in the middle. 4 panel manga layout. 16:9 aspect ratio."
  },
  {
    name: "challenges-progress",
    prompt: "Split anime panel: Left side shows determined scientists facing cute monster characters representing obstacles. Right side shows triumphant celebration with a satellite in starry background. Shonen manga style, inspiring. 16:9 aspect ratio."
  },
  {
    name: "quantum-future",
    prompt: "Utopian anime cityscape of future Hong Kong with quantum networks visualized as beautiful aurora-like light streams connecting skyscrapers. Victoria Harbour visible. Hopeful sunset colors. Studio Ghibli style optimistic future. 16:9 aspect ratio."
  },
  {
    name: "thank-you",
    prompt: "Anime style thank you illustration featuring cute Alice and Bob characters waving, surrounded by floating quantum particles forming a heart shape. Hong Kong skyline silhouette in background at golden hour. Warm, friendly, kawaii aesthetic. 16:9 aspect ratio."
  }
];

const outputDir = "./public/images";

async function generateImage(name, prompt) {
  console.log(`Generating: ${name}...`);

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-pro-image-preview",
      contents: prompt,
      config: {
        responseModalities: ["Text", "Image"],
      },
    });

    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        const imageData = part.inlineData.data;
        const buffer = Buffer.from(imageData, "base64");
        const filePath = path.join(outputDir, `${name}.png`);
        fs.writeFileSync(filePath, buffer);
        console.log(`  Saved: ${filePath}`);
        return true;
      }
    }
    console.log(`  No image generated for ${name}`);
    return false;
  } catch (error) {
    console.error(`  Error generating ${name}:`, error.message);
    return false;
  }
}

async function main() {
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  console.log("Generating anime images with Nano Banana Pro...\n");

  for (const { name, prompt } of prompts) {
    await generateImage(name, prompt);
    // Small delay to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 1000));
  }

  console.log("\nDone!");
}

main();
