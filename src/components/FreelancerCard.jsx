import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Avatar } from "./Avatar.jsx";

export function FreelancerCard({ f }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Link
        to={`/profile/${f.id}`}
        className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-5 transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl"
      >
        <div className="flex items-center gap-3">
          <Avatar name={f.name} color={f.color} />
          <div className="min-w-0">
            <p className="truncate font-semibold">{f.name}</p>
            <p className="truncate text-sm text-muted">{f.job}</p>
          </div>
        </div>
        <p className="mt-4 line-clamp-2 text-sm text-muted">{f.bio}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {f.skills.map((s) => (
            <span key={s} className="rounded-full bg-brand-soft px-2.5 py-1 text-xs font-medium text-brand">{s}</span>
          ))}
        </div>
        <div className="mt-auto flex items-center justify-between pt-5">
          <span className={`flex items-center gap-1.5 text-xs font-medium ${f.available ? "text-emerald-500" : "text-amber-500"}`}>
            <span className={`h-1.5 w-1.5 rounded-full ${f.available ? "bg-emerald-500" : "bg-amber-500"}`} />
            {f.available ? "Disponible" : "Occupé"}
          </span>
          <span className="text-sm font-semibold">{f.tjm} € <span className="font-normal text-muted">/ jour</span></span>
        </div>
      </Link>
    </motion.div>
  );
}
