"use client";

import dynamic from "next/dynamic";

// Dynamically import WalletLoginClient for client-side rendering
const WalletLoginClient = dynamic(() => import("./walletLoginClient"), {
  ssr: false, // Disable server-side rendering
});

const WalletLogin = (props: { onLogin: (address: string) => void }) => {
  return <WalletLoginClient {...props} />;
};

export default WalletLogin;
