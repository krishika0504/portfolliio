'use client';

import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../styles/motion';

const experiences = [
  {
    role: 'Senior Full Stack Developer',
    company: 'Tech Innovation Labs',
    period: '2023 - Present',
    detail:
      'Led platform modernization and rollout automation, reducing deployment cycle time and improving release confidence.',
  },
  {
    role: 'DevOps Engineer',
    company: 'CloudScale Solutions',
    period: '2021 - 2022',
    detail:
      'Implemented Infrastructure as Code and observability workflows to improve uptime, incident response, and cloud efficiency.',
  },
  {
    role: 'Full Stack Developer',
    company: 'Digital Ventures Inc',
    period: '2020 - 2021',
    detail:
      'Built and shipped customer-facing web applications with scalable APIs and strong frontend performance practices.',
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
            A timeline shaped by delivery, scale, and calm execution.
          </h2>
          <p className="section-subtitle">
            Roles where infrastructure discipline and product craftsmanship had to coexist under
            real deadlines.
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
                <h3 className="text-lg font-semibold text-slate-100 md:text-xl">{item.role}</h3>
                <span className="mono text-xs uppercase tracking-[0.2em] text-slate-300/60">
                  {item.period}
                </span>
              </div>
              <p className="mt-2 text-sm font-medium text-sky-100/75">{item.company}</p>
              <p className="mt-3 text-sm leading-7 text-slate-300/72 md:text-base">{item.detail}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
