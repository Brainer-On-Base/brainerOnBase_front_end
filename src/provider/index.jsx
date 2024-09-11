import React from "react";
import { MetaMaskProvider } from "@metamask/sdk-react"


export default function Provider({children}) {
  return <div>
    <MetaMaskProvider
      debug={false}
      sdkOptions={{
        dappMetadata: {
          name: "Example React Dapp",
          url: window.location.href,
        },
        // infuraAPIKey: process.env.INFURA_API_KEY,
        // Other options.
      }}
    >
      {children}
    </MetaMaskProvider>
  </div>;
}
