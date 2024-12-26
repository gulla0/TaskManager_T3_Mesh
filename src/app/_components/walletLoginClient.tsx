"use client";

import { useWallet } from "@meshsdk/react";

const WalletLoginClient = ({ onLogin }: { onLogin: (address: string) => void }) => {
  const { connect, wallet } = useWallet();

  const handleLogin = async () => {
    try {
      await connect("eternl"); // Use your preferred wallet type here
      const address = await wallet?.getChangeAddress();
      if (address) {
        onLogin(address); // Pass wallet address to the parent component
      }
    } catch (error) {
      console.error("Error connecting wallet:", error);
    }
  };

  return <button onClick={handleLogin}>Connect Wallet</button>;
};

export default WalletLoginClient;
