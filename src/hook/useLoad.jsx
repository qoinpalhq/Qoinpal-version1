import { useState, useEffect } from "react";

export default function useLoad() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    function handleLoad() {
      setIsLoaded(true);
    }
    window.addEventListener("load", handleLoad);
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);
  return { isLoaded };
}
