# Mood Check dApp

## Description
Mood Check is a full-stack decentralized application built on
Stellar Testnet using Soroban smart contracts. The application
allows users to connect their wallet and log their current mood
(Happy, Neutral, or Angry). Each mood selection is recorded
on-chain, and both global and per-user statistics are tracked.

This project was built as an educational dApp to demonstrate
the basics of Stellar, Soroban smart contracts, and wallet
integration using Freighter.

---

## Features
- Connect wallet using Freighter
- Log mood on-chain (Happy / Neutral / Angry)
- Track total mood counts globally
- Track mood statistics per user
- Deployed and tested on Stellar Testnet

---

## Tech Stack

### Frontend
- Next.js (App Router)
- TypeScript
- Tailwind CSS

### Blockchain
- Stellar Soroban Smart Contracts
- Stellar Testnet
- Freighter Wallet

---

## Project Structure
frontend/ -> Next.js frontend application
contract/ -> Soroban smart contract (Rust)
prompts/ -> AI prompts used during development


---

## Setup Instructions

### Prerequisites
- Node.js (v18+)
- npm or yarn
- Rust & Cargo
- Stellar CLI (soroban-cli)
- Freighter Wallet browser extension

---

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
Create a .env.local file:

NEXT_PUBLIC_CONTRACT_ID=your_contract_id_here
NEXT_PUBLIC_NETWORK_PASSPHRASE=Test SDF Network ; September 2015
Smart Contract Setup
cd contract
cargo build
Usage
Open the frontend application

Connect your Freighter wallet (Testnet)

Select your current mood

Confirm the transaction in Freighter

View updated mood statistics

Stellar Integration
Uses Stellar Soroban smart contracts

Deployed on Stellar Testnet

Transactions are signed via Freighter wallet

Contract stores both global and per-user mood counters

AI-Assisted Development
This project was developed using AI-assisted coding tools
such as ChatGPT and Claude. These tools were used for prompt
design, code generation, architectural guidance, and
development planning. All generated code was reviewed,
understood, and integrated by the developer.

The prompts used during development are documented in the
prompts/ directory.

Notes
This project uses Stellar Testnet only

No real assets are involved

Designed for educational purposes

Future Improvements
Mood history per user

Daily mood limits

Simple analytics dashboard

Additional mood categories

License
MIT

## AI-Assisted Development

This project was developed with the support of AI-powered coding tools as part of the program requirements.

### Tools Used
- ChatGPT (OpenAI): Used for brainstorming the project idea, structuring the application, and generating boilerplate frontend code.
- GitHub Copilot / similar AI assistants: Assisted with component structure and best practices.

### How AI Was Used
AI tools were used as a productivity aid to:
- Generate initial project structure ideas
- Help design React components
- Improve code readability and documentation
- Support problem-solving during development

All architectural decisions, integrations, and final code review were done by the developer.

