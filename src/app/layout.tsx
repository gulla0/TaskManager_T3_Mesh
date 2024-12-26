"use client";

import { MeshProviderApp } from "~/providers/meshProvider";
import { TRPCProvider } from "~/app/_trpc/Provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <TRPCProvider>
          <MeshProviderApp>{children}</MeshProviderApp>
        </TRPCProvider>
      </body>
    </html>
  );
}
