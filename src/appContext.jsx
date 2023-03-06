import { createContext, useState, useContext } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [errors, setErrors] = useState({});

  function handleOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <AppContext.Provider
      value={{
        isOpen,
        setIsOpen,
        handleOpen,
        errors,
        error,
        setError,
        setLoading,
        setErrors,
        loading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default function useGlobalContext() {
  return useContext(AppContext);
}
