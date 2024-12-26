"use client";

import React, { useState } from "react";
import WalletLogin from "./_components/walletLogin";
import TaskForm from "./_components/taskForm";

export default function Home() {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  if (!walletAddress) {
    return (
      <main>
        <h1>Task Manager App</h1>
        <WalletLogin onLogin={setWalletAddress} />
      </main>
    );
  }

  return (
    <main>
      <h1>Task Manager App</h1>
      <p>Connected Wallet: {walletAddress}</p>
      <TaskForm walletAddress={walletAddress} />
    </main>
  );
}
