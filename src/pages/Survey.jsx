import { useNavigate, useParams, Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { questions } from "../data/data.js";
import { useStore } from "../store.jsx";

export default function Survey() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { answers, setAnswer } = useStore();
  const index = Math.min(Math.max(parseInt(id, 10) || 1, 1), questions.length);
  const q = questions[index - 1];
  const isLast = index === questions.length;

  const answer = (value) => {
    setAnswer(q.id, value);
    if (isLast) navigate("/results");
    else navigate(`/survey/${index + 1}`);
  };

  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-5 py-16 text-center sm:px-8 sm:py-24">
      <div className="flex w-full items-center justify-between text-sm text-muted">
        <span>Question {index} / {questions.length}</span>
        {index > 1 && <Link to={`/survey/${index - 1}`} className="hover:text-fg">← Précédent</Link>}
      </div>
      <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-surface">
        <motion.div className="h-full rounded-full bg-brand" animate={{ width: `${(index / questions.length) * 100}%` }} transition={{ ease: [0.2, 0.8, 0.2, 1] }} />
      </div>

      <AnimatePresence mode="wait">
        <motion.h1 key={q.id}
          initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.35 }}
          className="mt-14 text-[clamp(1.6rem,4vw,2.4rem)] font-extrabold leading-tight">
          {q.text}
        </motion.h1>
      </AnimatePresence>

      <div className="mt-12 flex w-full gap-4">
        {[["Oui", true], ["Non", false]].map(([label, val]) => (
          <button key={label} onClick={() => answer(val)}
            className={`flex-1 rounded-2xl border-2 py-6 text-lg font-semibold transition-all hover:-translate-y-0.5 ${
              answers[q.id] === val ? "border-brand bg-brand text-white" : "border-line bg-surface hover:border-brand/50"
            }`}>
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
