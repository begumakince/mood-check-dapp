"use client";

import WalletConnect from "@/components/WalletConnect";
import MoodButtons from "@/components/MoodButtons";
import StatsDisplay from "@/components/StatsDisplay";
import ActivityFeed from "@/components/ActivityFeed";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold mb-6">
        Mood Check dApp 🙂
      </h1>

      <WalletConnect />

      <div className="mt-6">
        <MoodButtons />
      </div>

      <div className="mt-10 w-full max-w-md">
        <StatsDisplay />
      </div>

      <div className="mt-10 w-full max-w-md">
        <ActivityFeed />
      </div>
    </main>
  );
}
