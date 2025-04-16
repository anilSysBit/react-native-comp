// TabVisibilityContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface TabVisibilityContextType {
  setTabVisibility: (visible: boolean) => void;
  tabVisible: boolean;
}

const TabVisibilityContext = createContext<TabVisibilityContextType | undefined>(undefined);

export const useTabVisibility = () => {
  const context = useContext(TabVisibilityContext);
  if (!context) {
    throw new Error('useTabVisibility must be used within a TabVisibilityProvider');
  }
  return context;
};

interface TabVisibilityProviderProps {
  children: ReactNode;
}

export const TabVisibilityProvider: React.FC<TabVisibilityProviderProps> = ({ children }) => {
  const [tabVisible, setTabVisible] = useState(true);

  const setTabVisibility = (visible: boolean) => {
    setTabVisible(visible);
  };

  return (
    <TabVisibilityContext.Provider value={{ setTabVisibility, tabVisible }}>
      {children}
    </TabVisibilityContext.Provider>
  );
};
