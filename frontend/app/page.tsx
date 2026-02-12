import WalletConnect from "../components/WalletConnect";
import MoodButtons from "../components/MoodButtons";
import StatsDisplay from "../components/StatsDisplay";
import ActivityFeed from "@/components/ActivityFeed";


export default function HomePage() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>Mood Check DApp</h1>

      <p>
        Welcome! This is an AI-assisted Web3 project built on Stellar Testnet.
      </p>

      <WalletConnect />
      <MoodButtons />
      <StatsDisplay />
      <ActivityFeed />
    </main>
  );
}
