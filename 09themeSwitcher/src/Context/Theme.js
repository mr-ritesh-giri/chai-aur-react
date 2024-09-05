import React from "react";
import { useContext } from "react";

export const ThemeContext = React.createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

function useTheme() {
  return useContext(ThemeContext);
}
export default useTheme;
