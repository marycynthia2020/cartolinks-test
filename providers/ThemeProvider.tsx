'use client'
import { ReactChildren, ThemeContextType } from "@/types";
import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: ReactChildren) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

 useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      document.documentElement.classList.toggle("dark", newTheme === "dark");
      return newTheme;
    });
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () =>{
  const context = useContext(ThemeContext)
  if(context === undefined) {
    throw new Error("useTheme must be available in ThemeProvider")
  } return context
}