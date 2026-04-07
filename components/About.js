'use client';

import { motion } from 'framer-motion';
import { fadeUp } from '../styles/motion';

export default function About() {
  return (
    <section id="about" className="section-frame py-20 md:py-32">
      <motion.div
        className="section-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
      >
        <div data-animate="reveal">
          <p className="section-kicker">About</p>
          <h2 className="section-title mt-4">Infrastructure thinking with product-level taste.</h2>
        </div>

        <div className="grid gap-6">
          <p
            data-animate="reveal"
            className="max-w-3xl text-lg leading-8 text-slate-200/78 md:text-xl"
          >
            I build delivery systems, interfaces, and developer workflows that remove friction
            without losing personality. The goal is always the same: make complexity feel calm.
          </p>

          <div className="grid gap-4 md:grid-cols-2" data-animate="stagger">
            <article data-animate-item className="panel p-6">
              <p className="mono text-xs uppercase tracking-[0.28em] text-sky-100/60">
                Platform Design
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-300/75">
                Release pipelines, cloud infrastructure, and observability systems built to scale
                with teams instead of slowing them down.
              </p>
            </article>
            <article data-animate-item className="panel p-6">
              <p className="mono text-xs uppercase tracking-[0.28em] text-amber-100/60">
                Product Execution
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-300/75">
                Frontends and APIs shaped with the same attention to clarity, motion, and real user
                trust that strong product teams expect.
              </p>
            </article>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
