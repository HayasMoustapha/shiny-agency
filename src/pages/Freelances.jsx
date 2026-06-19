import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { freelancers } from "../data/data.js";
import { FreelancerCard } from "../components/FreelancerCard.jsx";

const ALL = "Toutes";
const skillSet = [ALL, ...Array.from(new Set(freelancers.flatMap((f) => f.skills)))];

export default function Freelances() {
  const [filter, setFilter] = useState(ALL);
  const list = useMemo(
    () => (filter === ALL ? freelancers : freelancers.filter((f) => f.skills.includes(filter))),
    [filter]
  );

  return (
    <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8">
      <h1 className="text-[clamp(1.8rem,4vw,2.6rem)] font-extrabold">Nos freelances</h1>
      <p className="mt-2 text-muted">Des profils tech vérifiés, disponibilité et TJM affichés.</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {skillSet.map((s) => (
          <button key={s} onClick={() => setFilter(s)}
            className={`rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
              filter === s ? "border-brand bg-brand text-white" : "border-line text-muted hover:text-fg"
            }`}>{s}</button>
        ))}
      </div>

      <motion.div layout className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((f) => <FreelancerCard key={f.id} f={f} />)}
      </motion.div>
    </div>
  );
}
