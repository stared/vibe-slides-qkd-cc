# Nano Banana Pro Image Prompts

Use these prompts with Google's `gemini-3-pro-image-preview` (Nano Banana Pro) to generate anime-style graphics for the DIQKD presentation.

## Slide 1: Title Slide
**Filename:** `title.png`

> Anime style illustration of two characters, Alice and Bob, exchanging a glowing quantum key through a futuristic city skyline at night. Cyberpunk aesthetic with neon pink and blue colors. Studio Ghibli meets Ghost in the Shell. The key appears as a shimmering stream of photons between them.

---

## Slide 2: Why Encryption?
**Filename:** `quantum-lock.png`

> Anime style digital padlock floating in cyberspace, surrounded by flowing data streams and binary code. Soft glowing blue and purple colors. Clean, minimalist Japanese illustration style.

---

## Slide 3: Classical vs Quantum Threat
**Filename:** `quantum-threat.png`

> Anime illustration split in two: Left side shows a confident character with a traditional padlock, right side shows an ominous quantum computer monster breaking through. Dramatic lighting, manga panel style composition.

---

## Slide 4: Enter QKD
**Filename:** `qkd-intro.png`

> Cute anime scientist character excitedly presenting a glowing quantum particle. The particle emits soft pink and blue light. Background shows elegant quantum wave functions. Kawaii style but scientifically themed.

---

## Slide 5: BB84 Protocol
**Filename:** `bb84-protocol.png`

> Anime style Alice and Bob characters on opposite sides, connected by a stream of glowing photons. Alice has blue theme, Bob has pink theme. Show polarization symbols floating near photons. Clean infographic style with anime character design.

---

## Slide 6: Device Trust Problem
**Filename:** `device-problem.png`

> Dramatic anime scene of a suspicious-looking quantum device with a tiny cartoon devil inside it. The device appears normal on outside but x-ray view shows hidden malicious components. Dark thriller anime style.

---

## Slide 7: Device Independent QKD Intro
**Filename:** `diqkd-hero.png`

> Triumphant anime hero character standing confidently with arms crossed, surrounded by floating quantum devices that appear as cute but untrustworthy robot characters. The hero is protected by a glowing shield labeled 'Bell'. Inspirational anime poster style.

---

## Slide 8: Bell's Inequality
**Filename:** `bell-inequality.png`

> Educational anime infographic showing the Bell inequality. Two entangled particles as cute connected characters. Mathematical formula displayed elegantly. Show classical limit as a barrier being broken by quantum correlations. Bright, educational style like a science anime.

---

## Slide 9: DIQKD Protocol Flow
**Filename:** `diqkd-protocol.png`

> Flowchart in anime style showing DIQKD protocol. Cute chibi versions of Alice and Bob with their devices. Show entangled photons as connected hearts. Bell test as a checkpoint gate. Happy ending for successful key, dramatic failure scene for abort. Comic panel layout.

---

## Slide 10: Challenges & Progress
**Filename:** `challenges-progress.png`

> Split anime panel: Left side shows determined scientists facing obstacles represented as cute monster characters (detection monster, distance monster, speed monster). Right side shows triumphant breakthroughs with scientists celebrating, satellite in background. Shonen manga style.

---

## Slide 11: Future Vision
**Filename:** `quantum-future.png`

> Utopian anime cityscape of the future with quantum networks visualized as beautiful light streams connecting buildings. Mix of Hong Kong skyline elements with futuristic additions. Hopeful, bright color palette. Studio Ghibli style optimistic future.

---

## Slide 12: Thank You
**Filename:** `thank-you.png`

> Anime style 'thank you' card featuring cute Alice and Bob characters waving goodbye, surrounded by floating quantum particles forming a heart shape. Hong Kong skyline in background at sunset. Warm, friendly, kawaii aesthetic.

---

## Usage Instructions

1. Go to [Google AI Studio](https://aistudio.google.com/) or use the Gemini API
2. Select the `gemini-3-pro-image-preview` model
3. Copy each prompt above and generate
4. Save images to `public/images/` with the suggested filenames
5. Update `slides.md` to reference the generated images

## Tips for Better Results

- Add "16:9 aspect ratio" for slide-friendly dimensions
- Add "high quality, detailed" for better output
- Regenerate if the first result doesn't match the anime style well
- For technical diagrams (quantum circuits), consider using TikZ or other tools instead
