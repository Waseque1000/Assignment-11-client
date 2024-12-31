import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <DataContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DataContext.Provider>
  );
};
