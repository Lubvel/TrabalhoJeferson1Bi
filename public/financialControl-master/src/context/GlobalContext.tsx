// src/context/GlobalContext.tsx
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface GlobalContextType {
  results: any[];
  setResults: (data: any[]) => void;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [results, setResults] = useState<any[]>([]);

  return (
    <GlobalContext.Provider value={{ results, setResults }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobalContext must be used within a GlobalProvider');
  }
  return context;
};
