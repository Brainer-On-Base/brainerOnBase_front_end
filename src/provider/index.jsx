import React from "react";
import WalletsProvider from "./WalletsProviders";
import AccountProvider from "./AccountProvider/AccountProvider";


export default function Provider({children}) {
  return <>
    <WalletsProvider>
      <AccountProvider>
        {children}
      </AccountProvider>
    </WalletsProvider>
  </>;
}
