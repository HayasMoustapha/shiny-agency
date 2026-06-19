import { Link, NavLink, Outlet } from "react-router-dom";
import { useStore } from "../store.jsx";

function ThemeToggle() {
  const { theme, toggleTheme } = useStore();
  return (
    <button onClick={toggleTheme} aria-label="Changer de thème"
      className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted hover:text-fg">
      {theme === "dark" ? (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M19 5l-1.5 1.5M6.5 17.5L5 19" /></svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" /></svg>
      )}
    </button>
  );
}

export function Layout() {
  const link = ({ isActive }) =>
    `text-sm transition-colors ${isActive ? "text-fg font-medium" : "text-muted hover:text-fg"}`;
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b border-line bg-bg/85 backdrop-blur">
        <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 sm:px-8">
          <Link to="/" className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-brand" />
            <span className="text-lg font-extrabold tracking-tight">Shiny</span>
          </Link>
          <div className="flex items-center gap-5">
            <NavLink to="/freelances" className={link}>Freelances</NavLink>
            <NavLink to="/survey/1" className="hidden rounded-full bg-brand px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand/90 sm:block">Faire le test</NavLink>
            <ThemeToggle />
          </div>
        </nav>
      </header>
      <main className="flex-1"><Outlet /></main>
      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-8 sm:px-8">
          <span className="flex items-center gap-2 font-bold"><span className="h-2.5 w-2.5 rounded-full bg-brand" />Shiny</span>
          <p className="text-sm text-muted">© {new Date().getFullYear()} · démo Governor Studio</p>
        </div>
      </footer>
    </div>
  );
}
