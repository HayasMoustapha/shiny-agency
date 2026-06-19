import { Link } from "react-router-dom";
import notfound from "../assets/404.svg";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-5 py-24 text-center">
      <img src={notfound} alt="" aria-hidden className="w-full max-w-xs" />
      <h1 className="mt-6 text-2xl font-extrabold">Page introuvable</h1>
      <p className="mt-2 text-muted">La page que vous cherchez n'existe pas.</p>
      <Link to="/" className="mt-6 rounded-xl bg-brand px-5 py-2.5 text-sm font-medium text-white hover:bg-brand/90">Retour à l'accueil</Link>
    </div>
  );
}
