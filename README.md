# BrainerOnBase Frontend 🧠

This project is the frontend interface for the **BrainerOnBase** ecosystem, built with React and Vite. You'll find a modular and well-structured architecture, crafted with 💜 to ensure scalability and ease of maintenance.

---

## 🚀 Technologies Used

- **React** – Main library for building the UI.
- **Vite** – A lightning-fast modern build tool.
- **Ethers.js** – For blockchain interaction on Ethereum/Base networks.
- **Styled Components** – For dynamic, component-scoped styling.
- **Framer Motion** – Smooth and kawaii animations.
- **React Router** – For intuitive navigation between pages.

---

## 🧩 Project Structure

### 1. `BrainerOnBaseService`

Centralizes all API calls using `axios` to keep logic clean and centralized.

📁 Location: `src/service/BrainerOnBaseService.js`  
🔗 Purpose: Connect the frontend with the Brainer Society backend.

---

### 2. Custom `Hooks`

These encapsulate logic for each smart contract.

- `useContractPBC1` → Handles logic for the Pixel Brainer NFT contract.
- `useContractMainCharacter` → Handles minting and managing the player's main NFT.
- `useContractMainCharacter` → Also manages token purchases during presale.

✅ Benefits:
- Modular code.
- Easy to test and reuse.
- Separation of concerns.

---

### 3. `HocComponents`: Your custom UI kit

A set of higher-order components with flexible props and styles:

- `HBox` – A flexible layout container (row/column).
- `HButton` – Fully customizable button.
- `HModal` – Reusable themed modal.
- `HTitle` – Styled title component with flair.

📁 Location: `src/HocComponents`

---

### 4. Main App Sections

- `Home` → Main landing page featuring Welcome, Roadmap, and Tokenomics.
- `Player Hub` → User dashboard with stats, inventory, and more.
- `Marketplace` → Buy and sell in-game NFT items.
- `Mint` → Section to mint exclusive NFTs (Pixel and Main Character).

---

## 🛠 Getting Started

1. Clone the repo:

```bash
git clone https://github.com/your-username/braineronbase-frontend.git
```

2. Install dependencies:

```bash
cd braineronbase-frontend
npm install
```

3. Run the development server:

```bash
npm run dev
```

---

## 📦 Useful Scripts

- `npm run dev` – Runs the project in development mode.
- `npm run build` – Compiles the project for production.
- `npm run preview` – Previews the production build.
- `npm run lint` – Checks code for errors and conventions.

---

## 🌐 Default Network

> This frontend is designed to work with **Base Sepolia** (chainId: `84532`).  
> If you're connected to a different network, a warning will appear asking you to switch via Metamask.

---

## 💬 Contributing

Wanna collaborate? Awesome! Clone the repo, create a branch, and submit a PR.  
And if something breaks... no worries, that's part of the journey 😉  

---

## 🧠 Are you a no brainer??
