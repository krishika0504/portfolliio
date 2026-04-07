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
          <h2 className="section-title mt-4">
            I approach software engineering with a passion for clean code and resilient systems.
          </h2>
          <div
            data-animate="line"
            className="mt-6 h-px w-24 bg-gradient-to-r from-rose-300 via-rose-400 to-transparent"
          />
        </div>

        <div className="grid gap-6">
          <p
            data-animate="reveal"
            className="max-w-3xl text-lg leading-8 text-zinc-600 md:text-xl"
          >
            As a motivated fresher with a solid foundation in computer science and full-stack development, I am eager to apply my skills to real-world challenges. I believe the strongest applications are clearly structured, highly accessible, and supported by robust backend architectures.
          </p>

          <div className="grid gap-4 md:grid-cols-2" data-animate="stagger">
            <article data-animate-item className="panel p-6">
              <p className="mono text-xs uppercase tracking-[0.28em] text-rose-500">
                Interface Strategy
              </p>
              <div
                data-animate="line"
                className="mt-4 h-px w-16 bg-gradient-to-r from-rose-200 via-rose-300 to-transparent"
              />
              <p className="mt-4 text-sm leading-7 text-zinc-600">
                I build landing pages, product surfaces, and component systems that feel premium,
                clear, and consistent rather than generic or over-designed.
              </p>
            </article>
            <article data-animate-item className="panel p-6">
              <p className="mono text-xs uppercase tracking-[0.28em] text-rose-500">
                Delivery Architecture
              </p>
              <div
                data-animate="line"
                className="mt-4 h-px w-16 bg-gradient-to-r from-rose-200 via-rose-300 to-transparent"
              />
              <p className="mt-4 text-sm leading-7 text-zinc-600">
                I support that visual quality with CI/CD, cloud infrastructure, and maintainable
                frontend architecture so shipping stays smooth after launch.
              </p>
            </article>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
