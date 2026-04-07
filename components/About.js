'use client';

import { motion } from 'framer-motion';
import { fadeUp } from '../styles/motion';

export default function About() {
  return (
    <section id="about" className="section-frame py-20 md:py-32">
      <motion.div
        className="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
      >
        <div data-animate="reveal">
          <p className="section-kicker">About</p>
          <h2 className="section-title mt-4">I care about how a site feels as much as how it runs.</h2>
        </div>

        <div className="grid gap-6">
          <p
            data-animate="reveal"
            className="max-w-3xl text-lg leading-8 text-zinc-600 md:text-xl"
          >
            My best work lives in the space between polish and reliability. I like soft visual
            systems, confident typography, and delivery pipelines that keep beautiful products fast,
            stable, and easy to maintain.
          </p>

          <div className="grid gap-4 md:grid-cols-2" data-animate="stagger">
            <article data-animate-item className="panel p-6">
              <p className="mono text-xs uppercase tracking-[0.28em] text-rose-500">UI Systems</p>
              <p className="mt-4 text-sm leading-7 text-zinc-600">
                Landing pages, product surfaces, and design-led layouts that feel premium rather
                than generic.
              </p>
            </article>
            <article data-animate-item className="panel p-6">
              <p className="mono text-xs uppercase tracking-[0.28em] text-rose-500">Platform Systems</p>
              <p className="mt-4 text-sm leading-7 text-zinc-600">
                Infrastructure, CI/CD, and cloud workflows that give teams confidence to ship at a
                high standard.
              </p>
            </article>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
