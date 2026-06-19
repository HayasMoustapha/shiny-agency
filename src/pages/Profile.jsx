import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { freelancers } from "../data/data.js";
import { Avatar } from "../components/Avatar.jsx";

export default function Profile() {
  const { id } = useParams();
  const f = freelancers.find((x) => x.id === id);

  if (!f) {
    return (
      <div className="mx-auto max-w-2xl px-5 py-24 text-center">
        <p className="text-muted">Profil introuvable.</p>
        <Link to="/freelances" className="mt-4 inline-block text-brand">← Retour aux freelances</Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl px-5 py-16 sm:px-8">
      <Link to="/freelances" className="text-sm text-muted hover:text-fg">← Tous les freelances</Link>
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
        className="mt-5 rounded-3xl border border-line bg-surface p-7">
        <div className="flex items-center gap-4">
          <Avatar name={f.name} color={f.color} size={72} />
          <div>
            <h1 className="text-2xl font-extrabold">{f.name}</h1>
            <p className="text-muted">{f.job}</p>
            <span className={`mt-1 inline-flex items-center gap-1.5 text-xs font-medium ${f.available ? "text-emerald-500" : "text-amber-500"}`}>
              <span className={`h-1.5 w-1.5 rounded-full ${f.available ? "bg-emerald-500" : "bg-amber-500"}`} />
              {f.available ? "Disponible" : "Occupé"}
            </span>
          </div>
        </div>
        <p className="mt-6 leading-relaxed text-muted">{f.bio}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {f.skills.map((s) => <span key={s} className="rounded-full bg-brand-soft px-3 py-1 text-sm font-medium text-brand">{s}</span>)}
        </div>
        <div className="mt-7 flex items-center justify-between border-t border-line pt-5">
          <span className="text-lg font-bold">{f.tjm} € <span className="text-sm font-normal text-muted">/ jour</span></span>
          <button className="rounded-xl bg-brand px-5 py-2.5 text-sm font-medium text-white hover:bg-brand/90">Contacter</button>
        </div>
      </motion.div>
    </div>
  );
}
