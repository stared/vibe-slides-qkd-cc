import { GoogleGenAI } from "@google/genai";
import fs from "fs";
import path from "path";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const STYLE = `Anime illustration, soft cel-shaded, cyberpunk palette (deep blues, purples, pinks, neon accents). Semi-realistic anime like "Your Name" or "Cyberpunk Edgerunners". Alice: short blue hair, white lab coat. Bob: brown messy hair, casual jacket. Hong Kong setting. Clean composition, no excessive glow or lens flares.`;

// Images with their required aspect ratios
const images = [
  // 16:9 - Full background slides
  {
    name: "title",
    ratio: "16:9",
    prompt: `${STYLE} Wide cinematic shot: Alice and Bob on Hong Kong rooftop at night, exchanging glowing quantum particles between their hands. Neon signs, rain, Victoria Harbour in background. Dramatic cyberpunk atmosphere.`
  },
  {
    name: "thank-you",
    ratio: "16:9",
    prompt: `${STYLE} Wide shot: Alice and Bob waving at viewer, standing at Hong Kong waterfront promenade. Victoria Harbour and skyline behind them at golden hour sunset. Warm, friendly farewell scene.`
  },

  // 1:1 - image-right layout slides
  {
    name: "quantum-lock",
    ratio: "1:1",
    prompt: `${STYLE} Square composition: Alice in tech lab, gesturing at a holographic padlock icon. Hong Kong city visible through window. Professional, educational mood.`
  },
  {
    name: "quantum-threat",
    ratio: "1:1",
    prompt: `${STYLE} Square composition: Alice looking concerned, holding a cracking padlock. Ominous quantum computer glow approaching from behind. Dramatic tension.`
  },
  {
    name: "qkd-intro",
    ratio: "1:1",
    prompt: `${STYLE} Square composition: Bob excitedly presenting, holding a glowing photon particle. Holographic display with quantum equations behind him. Hopeful, solution-found mood.`
  },
  {
    name: "bb84-protocol",
    ratio: "1:1",
    prompt: `${STYLE} Square composition: Alice on left sending photons, stream of colorful polarized light particles flowing to the right. Hong Kong rooftop setting at night.`
  },
  // SKIP device-problem - keeping the wonderful original
  {
    name: "diqkd-hero",
    ratio: "1:1",
    prompt: `${STYLE} Square composition: Alice standing confidently, arms crossed. Several black quantum device boxes float around her. She doesn't trust devices but physics protects her. Heroic pose, Hong Kong neon background.`
  },
  {
    name: "bell-inequality",
    ratio: "1:1",
    prompt: `${STYLE} Square composition: Bob holding two connected glowing orbs (entangled particles) linked by quantum thread. A holographic "S > 2" sign nearby. Hong Kong rooftop night scene.`
  },
  {
    name: "diqkd-protocol",
    ratio: "1:1",
    prompt: `${STYLE} Square 2x2 manga panel layout: Top-left: Alice and Bob receive entangled particles. Top-right: Random measurements on screens. Bottom-left: Bell test checkpoint glowing green. Bottom-right: Both celebrating with secure key icon. Clean panels.`
  },
  {
    name: "challenges-progress",
    ratio: "1:1",
    prompt: `${STYLE} Square split composition: Top half shows Alice and Bob facing challenges (efficiency meter, distance icon, slow clock). Bottom half shows breakthroughs with quantum satellite in sky and celebration.`
  },
  {
    name: "quantum-future",
    ratio: "1:1",
    prompt: `${STYLE} Square composition: Alice and Bob on balcony looking at futuristic Hong Kong skyline. Beautiful aurora-like quantum network streams connecting buildings. Sunrise, hopeful mood.`
  }
];

const outputDir = "./public/images";

async function generateImage({ name, ratio, prompt }) {
  console.log(`Generating ${name} (${ratio})...`);

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-pro-image-preview",
      contents: prompt,
      config: {
        responseModalities: ["TEXT", "IMAGE"],
        imageConfig: {
          aspectRatio: ratio
        }
      }
    });

    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        const buffer = Buffer.from(part.inlineData.data, "base64");
        fs.writeFileSync(path.join(outputDir, `${name}.png`), buffer);
        console.log(`  ✅ Saved ${name}.png`);
        return true;
      }
    }
    console.log(`  ⚠️ No image in response`);
    return false;
  } catch (error) {
    console.error(`  ❌ Error:`, error.message);
    return false;
  }
}

async function main() {
  console.log("=" .repeat(50));
  console.log("Regenerating with CORRECT aspect ratios");
  console.log("16:9 for full bg, 1:1 for image-right");
  console.log("Skipping device-problem.png (keeping original)");
  console.log("=".repeat(50) + "\n");

  for (const img of images) {
    await generateImage(img);
    await new Promise(r => setTimeout(r, 2000));
  }

  console.log("\n" + "=".repeat(50));
  console.log("Done! Check http://localhost:3030");
  console.log("=".repeat(50));
}

main();
