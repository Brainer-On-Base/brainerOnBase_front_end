import React from "react";
import WalletsProvider from "./WalletsProviders";
import AccountProvider from "./AccountProvider/AccountProvider";
import BrainerThemeProvider from "./ThemeProvider/BrainerThemeProvider";

export default function Provider({ children }) {
  return (
    <>
      <BrainerThemeProvider>
        <WalletsProvider>
          <AccountProvider>{children}</AccountProvider>
        </WalletsProvider>
      </BrainerThemeProvider>
    </>
  );
}
