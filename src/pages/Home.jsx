import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import illustration from "../assets/home-illustration.svg";

const ease = [0.2, 0.8, 0.2, 1];

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-5 sm:px-8">
      <section className="grid items-center gap-10 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <motion.span initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full bg-brand-soft px-3 py-1 text-xs font-medium text-brand">
            ✨ Le bon freelance, sans perdre de temps
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.05, ease }}
            className="mt-5 text-[clamp(2.4rem,6vw,4rem)] font-extrabold leading-[1.04]">
            Trouvez le freelance <span className="text-brand">qu'il vous faut.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15, ease }}
            className="mt-5 max-w-md text-base text-muted sm:text-lg">
            Répondez à 5 questions sur votre projet. On vous recommande les profils tech adaptés — design, web, back-end, mobile ou data.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25, ease }}
            className="mt-8 flex flex-wrap gap-3">
            <Link to="/survey/1" className="rounded-xl bg-brand px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-brand/90">Faire le test</Link>
            <Link to="/freelances" className="rounded-xl border border-line px-5 py-3 text-sm font-medium transition-colors hover:border-brand/50">Voir les freelances</Link>
          </motion.div>
        </div>
        <motion.img src={illustration} alt="" aria-hidden
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2, ease }}
          className="mx-auto w-full max-w-md" />
      </section>

      <section className="grid gap-4 pb-20 sm:grid-cols-3">
        {[
          { t: "5 questions", d: "Un mini-questionnaire pour cerner votre besoin." },
          { t: "Reco sur-mesure", d: "Les compétences et profils qui matchent." },
          { t: "Profils vérifiés", d: "Disponibilité et TJM affichés clairement." },
        ].map((c, i) => (
          <motion.div key={c.t} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
            className="rounded-2xl border border-line bg-surface p-5">
            <p className="text-2xl font-extrabold text-brand">0{i + 1}</p>
            <h3 className="mt-2 font-semibold">{c.t}</h3>
            <p className="mt-1 text-sm text-muted">{c.d}</p>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
