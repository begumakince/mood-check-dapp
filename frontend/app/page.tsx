import WalletConnect from "../components/WalletConnect";

export default function HomePage() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>Mood Check DApp</h1>

      <p>
        Welcome! This is an AI-assisted Web3 project built on Stellar Testnet.
      </p>

      <WalletConnect />
    </main>
  );
}

