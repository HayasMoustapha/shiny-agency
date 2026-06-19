import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { questions, freelancers } from "../data/data.js";
import { useStore } from "../store.jsx";
import { FreelancerCard } from "../components/FreelancerCard.jsx";

export default function Results() {
  const { answers, resetSurvey } = useStore();
  const skills = questions.filter((q) => answers[q.id]).map((q) => q.skill);

  const ranked = [...freelancers]
    .map((f) => ({ f, score: f.skills.filter((s) => skills.includes(s)).length }))
    .sort((a, b) => b.score - a.score);
  const matches = skills.length ? ranked.filter((r) => r.score > 0).map((r) => r.f) : freelancers;
  const top = matches.slice(0, 3);

  return (
    <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="text-center">
        <p className="text-sm font-medium text-brand">Vos résultats</p>
        <h1 className="mt-2 text-[clamp(1.8rem,4vw,2.6rem)] font-extrabold">
          {skills.length ? "Voici les profils faits pour vous" : "Découvrez nos freelances"}
        </h1>
        {skills.length > 0 && (
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            {skills.map((s) => (
              <span key={s} className="rounded-full bg-brand-soft px-3 py-1.5 text-sm font-medium text-brand">{s}</span>
            ))}
          </div>
        )}
        <div className="mt-6 flex justify-center gap-3">
          <Link to="/survey/1" onClick={resetSurvey} className="rounded-xl border border-line px-4 py-2 text-sm font-medium hover:border-brand/50">Refaire le test</Link>
          <Link to="/freelances" className="rounded-xl bg-brand px-4 py-2 text-sm font-medium text-white hover:bg-brand/90">Tous les freelances</Link>
        </div>
      </motion.div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {top.map((f) => <FreelancerCard key={f.id} f={f} />)}
      </div>
    </div>
  );
}
