import React, { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedDarkMode = localStorage.getItem('isDarkMode');
    setIsDarkMode(storedDarkMode === 'true');
    setIsLoading(false);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem('isDarkMode', newDarkMode);
  };

  return <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>{isLoading ? '' : children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
