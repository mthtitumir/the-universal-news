"use client";

import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("light");


  return (
    <ThemeContext.Provider value={{ setMode }}>
      <div className={`theme ${mode} bg-sky-400`}>{children}</div>
    </ThemeContext.Provider>
  );
};