'use client';

import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../styles/motion';

const experiences = [
  {
    role: 'Senior Full Stack Developer',
    company: 'Tech Innovation Labs',
    period: '2023 - Present',
    detail:
      'Led platform modernization, interface refinement, and rollout automation with a focus on raising product quality while improving release confidence.',
  },
  {
    role: 'DevOps Engineer',
    company: 'CloudScale Solutions',
    period: '2021 - 2022',
    detail:
      'Implemented Infrastructure as Code, observability workflows, and cloud optimization systems to improve uptime, visibility, and delivery speed.',
  },
  {
    role: 'Full Stack Developer',
    company: 'Digital Ventures Inc',
    period: '2020 - 2021',
    detail:
      'Built customer-facing applications with scalable APIs, thoughtful UI implementation, and performance-conscious frontend architecture.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-frame py-20 md:py-32">
      <div className="section-shell">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          data-animate="reveal"
        >
          <p className="section-kicker">Experience</p>
          <h2 className="section-title mt-4">
            A track record built on execution, quality, and dependable delivery.
          </h2>
          <div
            data-animate="line"
            className="mt-6 h-px w-24 bg-gradient-to-r from-rose-300 via-rose-400 to-transparent"
          />
          <p className="section-subtitle">
            My experience spans frontend product work, DevOps systems, and the connective layer
            between them, where strong products usually succeed or fail.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-10 space-y-4"
          data-animate="stagger"
        >
          {experiences.map((item) => (
            <motion.article
              key={`${item.company}-${item.role}`}
              variants={fadeUp}
              whileHover={{ y: -5 }}
              data-animate-item
              className="panel p-6"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-lg font-semibold text-zinc-950 md:text-xl">{item.role}</h3>
                <span className="mono text-xs uppercase tracking-[0.2em] text-zinc-400">{item.period}</span>
              </div>
              <p className="mt-2 text-sm font-medium text-rose-600">{item.company}</p>
              <div
                data-animate="line"
                className="mt-4 h-px w-16 bg-gradient-to-r from-rose-200 via-rose-300 to-transparent"
              />
              <p className="mt-3 text-sm leading-7 text-zinc-600 md:text-base">{item.detail}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
