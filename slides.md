---
theme: default
title: Device Independent Quantum Key Distribution
info: |
  ## Device Independent QKD
  A popular lecture on the future of secure communication

  Hong Kong 2024
class: text-center
drawings:
  persist: false
transition: slide-left
mdc: true
---

# Device Independent Quantum Key Distribution

## Securing Communication Without Trusting Your Devices

<div class="pt-12">
  <span class="px-2 py-1 rounded bg-gradient-to-r from-pink-500 to-purple-500 text-white">
    Hong Kong 2024
  </span>
</div>

<!--
NANO BANANA PRO PROMPT:
"Anime style illustration of two characters, Alice and Bob, exchanging a glowing quantum key through a futuristic city skyline at night. Cyberpunk aesthetic with neon pink and blue colors. Studio Ghibli meets Ghost in the Shell. The key appears as a shimmering stream of photons between them."
-->

---
layout: image-right
image: /images/quantum-lock.png
---

# Why Do We Need Encryption?

<v-clicks>

- 🔒 Protect private messages
- 🏦 Secure financial transactions
- 🏥 Keep medical records safe
- 🗳️ Enable secure voting

</v-clicks>

<!--
NANO BANANA PRO PROMPT:
"Anime style digital padlock floating in cyberspace, surrounded by flowing data streams and binary code. Soft glowing blue and purple colors. Clean, minimalist Japanese illustration style."
-->

---

# The Problem with Classical Cryptography

<div class="grid grid-cols-2 gap-4">
<div>

## Today's Security

- Based on **mathematical difficulty**
- RSA: Hard to factor large numbers
- Works... for now

</div>
<div>

## The Quantum Threat

- Quantum computers can break RSA
- Shor's algorithm: Exponential speedup
- "Harvest now, decrypt later"

</div>
</div>

<!--
NANO BANANA PRO PROMPT:
"Anime illustration split in two: Left side shows a confident character with a traditional padlock, right side shows an ominous quantum computer monster breaking through. Dramatic lighting, manga panel style composition."
-->

---
layout: center
---

# Enter: Quantum Key Distribution (QKD)

<div class="text-6xl my-8">🔐 + ⚛️ = 💪</div>

Security based on **physics**, not math!

<!--
NANO BANANA PRO PROMPT:
"Cute anime scientist character excitedly presenting a glowing quantum particle. The particle emits soft pink and blue light. Background shows elegant quantum wave functions. Kawaii style but scientifically themed."
-->

---

# How QKD Works: The BB84 Protocol

<div class="grid grid-cols-3 gap-2 text-center">

<div class="p-4 bg-blue-500/20 rounded">

### Alice
Prepares photons in random bases

</div>

<div class="p-4 bg-purple-500/20 rounded">

### Quantum Channel
Photons travel through fiber/air

</div>

<div class="p-4 bg-pink-500/20 rounded">

### Bob
Measures in random bases

</div>

</div>

<div class="mt-8">

| Alice's Basis | Alice's Bit | Bob's Basis | Bob's Result | Keep? |
|--------------|-------------|-------------|--------------|-------|
| ➕ | 0 | ➕ | 0 | ✅ |
| ✖️ | 1 | ➕ | ? | ❌ |
| ✖️ | 0 | ✖️ | 0 | ✅ |

</div>

<!--
NANO BANANA PRO PROMPT:
"Anime style Alice and Bob characters on opposite sides, connected by a stream of glowing photons. Alice has blue theme, Bob has pink theme. Show polarization symbols floating near photons. Clean infographic style with anime character design."
-->

---
layout: two-cols
---

# But Wait... There's a Problem!

<v-clicks>

- QKD assumes devices work **perfectly**
- What if your device is:
  - 🐛 Buggy?
  - 🕵️ Compromised?
  - 📦 From untrusted manufacturer?

</v-clicks>

::right::

<div class="ml-4">

## Real Attacks Happened!

- **Blinding attacks** on detectors
- **Trojan horse** attacks
- Side-channel vulnerabilities

</div>

<!--
NANO BANANA PRO PROMPT:
"Dramatic anime scene of a suspicious-looking quantum device with a tiny cartoon devil inside it. The device appears normal on outside but x-ray view shows hidden malicious components. Dark thriller anime style."
-->

---
layout: center
class: text-center
---

# Device Independent QKD

## Trust the physics, not the device!

<div class="text-8xl my-8">🎰</div>

Based on **Bell inequality violations**

<!--
NANO BANANA PRO PROMPT:
"Triumphant anime hero character standing confidently with arms crossed, surrounded by floating quantum devices that appear as cute but untrustworthy robot characters. The hero is protected by a glowing shield labeled 'Bell'. Inspirational anime poster style."
-->

---

# Bell's Inequality: The Heart of DIQKD

<div class="text-center text-2xl my-8">

$S = |E(a,b) - E(a,b') + E(a',b) + E(a',b')| \leq 2$

</div>

<v-clicks>

- Classical physics: S ≤ 2 (always!)
- Quantum mechanics: S ≤ 2√2 ≈ 2.83
- **If S > 2**: Genuine quantum correlations!

</v-clicks>

<div class="mt-8 p-4 bg-green-500/20 rounded">

✨ **The Magic**: If Bell inequality is violated, the key MUST be secure - regardless of what's inside the devices!

</div>

<!--
NANO BANANA PRO PROMPT:
"Educational anime infographic showing the Bell inequality. Two entangled particles as cute connected characters. Mathematical formula displayed elegantly. Show classical limit as a barrier being broken by quantum correlations. Bright, educational style like a science anime."
-->

---

# DIQKD Protocol Overview

```mermaid
graph LR
    A[Alice's Device] -->|Entangled Pairs| B[Bob's Device]
    A --> C{Bell Test}
    B --> C
    C -->|S > 2| D[Secure Key!]
    C -->|S ≤ 2| E[Abort!]
```

<v-clicks>

1. Share entangled photon pairs
2. Randomly choose: Key generation OR Bell test
3. If Bell test passes → Extract secure key
4. If Bell test fails → Someone's cheating!

</v-clicks>

<!--
NANO BANANA PRO PROMPT:
"Flowchart in anime style showing DIQKD protocol. Cute chibi versions of Alice and Bob with their devices. Show entangled photons as connected hearts. Bell test as a checkpoint gate. Happy ending for successful key, dramatic failure scene for abort. Comic panel layout."
-->

---
layout: two-cols
---

# Challenges

<v-clicks>

- **Detection loophole**: Need ~83% efficiency
- **Locality loophole**: Fast measurements
- **Distance**: Entanglement is fragile
- **Rate**: Very slow key generation

</v-clicks>

::right::

# Recent Progress

<v-clicks>

- 2022: First loophole-free DIQKD demo
- Improved detector efficiency
- Quantum repeaters research
- Satellite-based experiments

</v-clicks>

<!--
NANO BANANA PRO PROMPT:
"Split anime panel: Left side shows determined scientists facing obstacles represented as cute monster characters (detection monster, distance monster, speed monster). Right side shows triumphant breakthroughs with scientists celebrating, satellite in background. Shonen manga style."
-->

---
layout: center
---

# The Future of Secure Communication

<div class="grid grid-cols-3 gap-8 mt-8">

<div class="text-center">
<div class="text-4xl mb-2">🌐</div>
<div class="font-bold">Quantum Internet</div>
<div class="text-sm">Global quantum network</div>
</div>

<div class="text-center">
<div class="text-4xl mb-2">🛡️</div>
<div class="font-bold">Unhackable Banks</div>
<div class="text-sm">Physics-guaranteed security</div>
</div>

<div class="text-center">
<div class="text-4xl mb-2">🏛️</div>
<div class="font-bold">Secure Governance</div>
<div class="text-sm">Trustworthy elections</div>
</div>

</div>

<!--
NANO BANANA PRO PROMPT:
"Utopian anime cityscape of the future with quantum networks visualized as beautiful light streams connecting buildings. Mix of Hong Kong skyline elements with futuristic additions. Hopeful, bright color palette. Studio Ghibli style optimistic future."
-->

---
layout: center
class: text-center
---

# Thank You!

## Questions?

<div class="mt-8">

🐦 @YourHandle | 📧 your@email.com

</div>

<!--
NANO BANANA PRO PROMPT:
"Anime style 'thank you' card featuring cute Alice and Bob characters waving goodbye, surrounded by floating quantum particles forming a heart shape. Hong Kong skyline in background at sunset. Warm, friendly, kawaii aesthetic."
-->
