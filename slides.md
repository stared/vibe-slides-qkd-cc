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

<div class="absolute inset-0">
  <img src="/images/title.png" class="w-full h-full object-cover opacity-40" />
</div>

<div class="relative z-10">

# Device Independent Quantum Key Distribution

## Securing Communication Without Trusting Your Devices

<div class="pt-12">
  <span class="px-2 py-1 rounded bg-gradient-to-r from-pink-500 to-purple-500 text-white">
    Hong Kong 2024
  </span>
</div>

</div>

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

---
layout: image-right
image: /images/quantum-threat.png
---

# The Problem with Classical Cryptography

## Today's Security

- Based on **mathematical difficulty**
- RSA: Hard to factor large numbers
- Works... for now

## The Quantum Threat

- Quantum computers can break RSA
- Shor's algorithm: Exponential speedup
- "Harvest now, decrypt later"

---
layout: image-right
image: /images/qkd-intro.png
---

# Enter: Quantum Key Distribution

<div class="text-4xl my-4">🔐 + ⚛️ = 💪</div>

Security based on **physics**, not math!

<v-clicks>

- Quantum mechanics guarantees security
- Eavesdropping disturbs the quantum state
- Any interception is detectable

</v-clicks>

---
layout: image-right
image: /images/bb84-protocol.png
---

# How QKD Works: BB84

<div class="text-sm bb84-table">

| Alice | Bit | Bob | Result | Keep? |
|:-----:|:---:|:---:|:------:|:-----:|
| **+** | 0 | **+** | 0 | ✅ |
| **×** | 1 | **+** | ? | ❌ |
| **×** | 0 | **×** | 0 | ✅ |

</div>

<style>
.bb84-table th { background: #4a1d7a; color: #f0f0f0; }
.bb84-table td { color: #ffffff; font-weight: bold; }
</style>

<v-clicks>

- Alice sends polarized photons
- Bob measures in random bases
- They compare bases publicly
- Keep only matching measurements

</v-clicks>

---
layout: image-right
image: /images/device-problem.png
---

# But Wait... There's a Problem!

<v-clicks>

- QKD assumes devices work **perfectly**
- What if your device is:
  - 🐛 Buggy?
  - 🕵️ Compromised?
  - 📦 From untrusted manufacturer?

</v-clicks>

<div class="mt-4">

## Real Attacks Happened!

- **Blinding attacks** on detectors
- **Trojan horse** attacks
- Side-channel vulnerabilities

</div>

---
layout: image-right
image: /images/diqkd-hero.png
---

# Device Independent QKD

## Trust the physics, not the device!

<v-clicks>

- Treat devices as **black boxes**
- Security from **Bell inequality**
- Works even with adversarial devices!

</v-clicks>

<div class="mt-4 p-2 bg-purple-500/20 rounded">

The only assumption: quantum mechanics is correct

</div>

---
layout: image-right
image: /images/bell-inequality.png
---

# Bell's Inequality

<div class="text-xl my-4">

$S = |E(a,b) - E(a,b') + E(a',b) + E(a',b')|$

</div>

<v-clicks>

- Classical physics: **S ≤ 2** (always!)
- Quantum mechanics: **S ≤ 2√2 ≈ 2.83**
- If **S > 2**: Genuine quantum correlations!

</v-clicks>

<div class="mt-4 p-2 bg-green-500/20 rounded text-sm">

✨ If Bell inequality is violated → key is secure!

</div>

---
layout: image-right
image: /images/diqkd-protocol.png
---

# DIQKD Protocol

<v-clicks>

1. **Share** entangled photon pairs
2. **Randomly choose**: Key generation OR Bell test
3. **If Bell test passes** → Extract secure key
4. **If Bell test fails** → Someone's cheating!

</v-clicks>


---
layout: image-right
image: /images/challenges-progress.png
---

# Challenges & Progress

## Challenges

- **Detection loophole**: Need ~83% efficiency
- **Distance**: Entanglement is fragile
- **Rate**: Slow key generation

## Recent Progress

- 2022: First loophole-free DIQKD
- Improved detector efficiency
- Quantum repeaters research
- Satellite experiments

---
layout: image-right
image: /images/quantum-future.png
---

# The Future

<div class="grid grid-cols-1 gap-4">

<div class="flex items-center gap-2">
<div class="text-2xl">🌐</div>
<div><strong>Quantum Internet</strong> - Global quantum network</div>
</div>

<div class="flex items-center gap-2">
<div class="text-2xl">🛡️</div>
<div><strong>Unhackable Banks</strong> - Physics-guaranteed security</div>
</div>

<div class="flex items-center gap-2">
<div class="text-2xl">🏛️</div>
<div><strong>Secure Governance</strong> - Trustworthy elections</div>
</div>

</div>

---
layout: image
image: /images/thank-you.png
class: text-center
---

<div class="absolute inset-0 flex items-center justify-center">
<div class="bg-black/50 p-8 rounded-xl">

# Thank You!

## Questions?

<div class="mt-4 text-sm">

🐦 @YourHandle | 📧 your@email.com

</div>

</div>
</div>
