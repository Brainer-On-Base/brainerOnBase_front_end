import React from "react";
import WalletsProvider from "./WalletsProviders";
import AccountProvider from "./Web3Provider/Web3Provider";
import BrainerThemeProvider from "./ThemeProvider/BrainerThemeProvider";
import { Provider as ReduxBrainerStoreProvider } from "react-redux";
import { store } from "../redux/store";

export default function Provider({ children }) {
  return (
    <>
      <ReduxBrainerStoreProvider store={store}>
        <BrainerThemeProvider>
          <WalletsProvider>
            <AccountProvider>{children}</AccountProvider>
          </WalletsProvider>
        </BrainerThemeProvider>
      </ReduxBrainerStoreProvider>
    </>
  );
}
