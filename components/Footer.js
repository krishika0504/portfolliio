'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-rose-100/80 py-10">
      <div className="section-shell flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="text-sm text-zinc-500"
        >
          Designed and engineered by Krishika Rajput in {year}, using Next.js, Three.js, Anime.js,
          and a design-led development workflow.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.1 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="rounded-full border border-rose-200 bg-white/75 px-4 py-2 text-sm text-zinc-700 transition hover:border-rose-300 hover:text-zinc-950"
        >
          Back to top
        </motion.button>
      </div>
    </footer>
  );
}
