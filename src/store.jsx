import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

const Ctx = createContext(null);

export function Providers({ children }) {
  const [theme, setTheme] = useState("light");
  const [answers, setAnswers] = useState({}); // { [questionId]: true/false }

  useEffect(() => {
    const t = (() => { try { return localStorage.getItem("shiny-theme"); } catch { return null; } })() || "light";
    setTheme(t);
    document.documentElement.classList.toggle("dark", t === "dark");
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      try { localStorage.setItem("shiny-theme", next); } catch { /* ignore */ }
      document.documentElement.classList.toggle("dark", next === "dark");
      return next;
    });
  }, []);

  const setAnswer = useCallback((id, value) => setAnswers((a) => ({ ...a, [id]: value })), []);
  const resetSurvey = useCallback(() => setAnswers({}), []);

  const value = useMemo(
    () => ({ theme, toggleTheme, answers, setAnswer, resetSurvey }),
    [theme, toggleTheme, answers, setAnswer, resetSurvey]
  );
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export const useStore = () => {
  const c = useContext(Ctx);
  if (!c) throw new Error("useStore outside Providers");
  return c;
};
