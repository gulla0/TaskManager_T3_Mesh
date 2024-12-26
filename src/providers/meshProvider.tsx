"use client";

import dynamic from "next/dynamic";

const MeshProvider = dynamic(() => import("@meshsdk/react").then(mod => mod.MeshProvider), {
  ssr: false, // Ensure this only loads on the client side
});

export const MeshProviderApp = ({ children }: { children: React.ReactNode }) => {
  return <MeshProvider>{children}</MeshProvider>;
};

