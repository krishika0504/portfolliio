'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 py-10">
      <div className="section-shell flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="text-sm text-slate-300/60"
        >
          Copyright {year} Krishika Rajput. Built with Next.js, Three.js, Anime.js, and Tailwind
          CSS.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.1 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="rounded-full border border-white/20 px-4 py-2 text-sm text-slate-200/75 transition hover:border-white hover:text-white"
        >
          Back to top
        </motion.button>
      </div>
    </footer>
  );
}
