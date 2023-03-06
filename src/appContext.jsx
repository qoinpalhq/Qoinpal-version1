import { createContext, useState, useContext } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <AppContext.Provider
      value={{
        isOpen,
        setIsOpen,
        handleOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default function useGlobalContext() {
  return useContext(AppContext);
}
