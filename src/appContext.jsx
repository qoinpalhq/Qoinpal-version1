import { createContext, useState, useContext } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const { email, setEmail } = useState({
    title: "",
    level: "",
    selection: "",
  });
  const [selected, setSelected] = useState("");

  function handleOpen() {
    setIsOpen(!isOpen);
  }

  function handleApply(title, level, selection) {
    console.log(title, level);
    setEmail({ title, level, selection });
  }

  return (
    <AppContext.Provider
      value={{
        isOpen,
        setIsOpen,
        handleOpen,
        handleApply,
        email,
        selected,
        setSelected,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default function useGlobalContext() {
  return useContext(AppContext);
}
