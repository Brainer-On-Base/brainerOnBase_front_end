import React from "react";
import { MetaMaskProvider } from "@metamask/sdk-react"

export default function WalletsProvider({children}) {
  return (
    <>
        <MetaMaskProvider
            debug={false}
            sdkOptions={{
                dappMetadata: {
                name: "Example React Dapp",
                url: window.location.href,
                },
            }}
        >
        {children}
        </MetaMaskProvider>
    </>
)}
