<div className="h-12 bg-blue-500 rounded-xl mb-4" />

import { useEffect, useState } from "react";

function useTheme() {
  // dark por defeito se o user preferir dark e não houver escolha guardada
  const getInitial = () => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") return true;
    if (saved === "light") return false;
    return window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;
  };

  const [isDark, setIsDark] = useState(getInitial);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return { isDark, toggle: () => setIsDark((v) => !v) };
}

export default useTheme;
