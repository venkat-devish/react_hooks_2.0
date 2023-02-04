import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    setDark((prev) => !prev);
  };

  const value = {
    toggle: toggleTheme,
    isDark: dark,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

const themeState = () => {
  const themeCtx = useContext(ThemeContext);
  return themeCtx;
};

export default themeState;
