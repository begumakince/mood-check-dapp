"use client";

import { useState } from "react";
import { requestAccess } from "@stellar/freighter-api";

export default function WalletConnect() {
  const [publicKey, setPublicKey] = useState<string | null>(null);

  const connectWallet = async () => {
    const publicKey = await requestAccess();
    if (publicKey) {
      setPublicKey(publicKey);
    }
  };

  return (
    <div style={{ border: "1px solid black", padding: "1rem" }}>
      {!publicKey ? (
        <>
          <p>Wallet not connected</p>
          <button onClick={connectWallet}>Connect Wallet</button>
        </>
      ) : (
        <>
          <p>Wallet connected</p>
          <p>
            {publicKey.slice(0, 5)}...{publicKey.slice(-4)}
          </p>
        </>
      )}
    </div>
  );
}
