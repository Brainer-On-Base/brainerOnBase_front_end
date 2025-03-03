import React, { useEffect } from "react";
import ThemeContext from "./ThemeContext";
import { ThemeProvider } from "styled-components";
import { LightTheme } from "./BrainerTheme";

const BrainerThemeProvider = ({ children }) => {
  return (
    <ThemeContext.Provider
      value={{
        theme: LightTheme,
      }}
    >
      <ThemeProvider theme={LightTheme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default BrainerThemeProvider;
