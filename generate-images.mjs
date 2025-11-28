import { GoogleGenAI } from "@google/genai";
import fs from "fs";
import path from "path";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// Consistent style prefix for all images - based on the wonderful device-problem aesthetic
const STYLE_PREFIX = `Anime illustration in consistent style: soft cel-shaded look, muted cyberpunk color palette (deep blues, purples, pinks, with neon accents), atmospheric lighting with subtle glow effects. Characters should have a semi-realistic anime proportion (not chibi), similar to modern anime films like "Your Name" or "Cyberpunk Edgerunners". Consistent character designs: Alice is a young woman with short blue hair and a white lab coat, Bob is a young man with brown messy hair and a casual jacket. Hong Kong cyberpunk aesthetic throughout. 16:9 aspect ratio, high quality.`;

const prompts = [
  {
    name: "title",
    prompt: `${STYLE_PREFIX} Title card scene: Alice and Bob standing on a Hong Kong rooftop at night, exchanging a glowing quantum key between them. Neon signs reflect off wet surfaces, Victoria Harbour visible in background. The quantum key appears as a shimmering stream of entangled photons connecting their hands. Cinematic composition, dramatic lighting.`
  },
  {
    name: "quantum-lock",
    prompt: `${STYLE_PREFIX} Alice explaining encryption concept, gesturing toward a large holographic padlock floating in the air. The padlock is surrounded by flowing data streams and encryption symbols. Modern Hong Kong tech lab setting with glass walls and city views. Educational but dramatic mood.`
  },
  {
    name: "quantum-threat",
    prompt: `${STYLE_PREFIX} Split composition: On the left, Alice confidently holds a glowing classical padlock. On the right, a massive quantum computer (visualized as an ominous machine with glowing qubits) looms threateningly, cracks forming in the padlock's light. Dramatic tension, the quantum threat approaching.`
  },
  {
    name: "qkd-intro",
    prompt: `${STYLE_PREFIX} Bob excitedly presenting at a holographic display showing quantum key distribution concept. He holds a glowing photon in his hand. The display shows physics equations and wave functions. Alice watches with interest in the background. Bright, hopeful mood - the solution has arrived.`
  },
  // SKIP device-problem - it's already wonderful!
  {
    name: "bb84-protocol",
    prompt: `${STYLE_PREFIX} Alice and Bob on opposite sides of the frame, connected by a beautiful stream of polarized photons traveling between them. Alice sends photons with different polarization states (shown as small rotating symbols). Bob measures them with a detector device. Technical but artistic visualization of the BB84 protocol.`
  },
  {
    name: "diqkd-hero",
    prompt: `${STYLE_PREFIX} Heroic shot of Alice standing confidently, arms crossed, with a glowing shield of quantum entanglement protecting her. Around her float several quantum devices depicted as sleek but suspicious-looking black boxes with glowing indicators. She doesn't need to trust them - physics protects her. Empowering, triumphant mood.`
  },
  {
    name: "bell-inequality",
    prompt: `${STYLE_PREFIX} Educational visualization: Alice and Bob each hold one of a pair of entangled particles (shown as connected glowing orbs linked by a quantum thread). Between them, a translucent barrier labeled "S=2" is being shattered by their quantum correlation. Mathematical beauty meets dramatic action.`
  },
  {
    name: "diqkd-protocol",
    prompt: `${STYLE_PREFIX} Four-panel manga-style layout showing the DIQKD protocol: Panel 1: Alice and Bob receive entangled photon pairs. Panel 2: They make random measurements. Panel 3: Bell test checkpoint with S>2 glowing green. Panel 4: Secure key successfully extracted, both characters celebrating. Clean sequential art.`
  },
  {
    name: "challenges-progress",
    prompt: `${STYLE_PREFIX} Split scene with consistent colors (NOT black and white): Left side shows Alice and Bob facing challenges visualized as obstacles (detection efficiency meter, distance barrier, slow clock). Right side shows breakthroughs - improved detectors, a quantum satellite in orbit, celebration. Progress and hope.`
  },
  {
    name: "quantum-future",
    prompt: `${STYLE_PREFIX} Breathtaking view of future Hong Kong with quantum networks visualized as beautiful aurora-like light streams connecting all the skyscrapers. Victoria Harbour glows with quantum connections. Alice and Bob look out at this hopeful future from a high vantage point. Sunrise colors, optimistic and inspiring.`
  },
  {
    name: "thank-you",
    prompt: `${STYLE_PREFIX} Warm closing scene: Alice and Bob wave goodbye to the viewer, standing together with Hong Kong's skyline behind them at golden hour. Quantum particles float around them forming a subtle heart shape. Friendly, warm, memorable ending. Thank you mood.`
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
        console.log(`  ✅ Saved: ${filePath}`);
        return true;
      }
    }
    console.log(`  ⚠️ No image generated for ${name}`);
    return false;
  } catch (error) {
    console.error(`  ❌ Error generating ${name}:`, error.message);
    return false;
  }
}

async function main() {
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  console.log("=".repeat(60));
  console.log("Generating anime images with Nano Banana Pro");
  console.log("Using consistent style prefix for visual coherence");
  console.log("Skipping device-problem.png (already wonderful!)");
  console.log("=".repeat(60));
  console.log();

  for (const { name, prompt } of prompts) {
    await generateImage(name, prompt);
    // Small delay to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 1500));
  }

  console.log("\n" + "=".repeat(60));
  console.log("Done! Review the slides at http://localhost:3030");
  console.log("=".repeat(60));
}

main();
