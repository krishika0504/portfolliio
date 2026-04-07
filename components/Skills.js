'use client';

import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../styles/motion';

const skills = [
  { name: 'Three.js', type: 'Immersive UI' },
  { name: 'Anime.js', type: 'Interaction Motion' },
  { name: 'Next.js', type: 'Frontend Architecture' },
  { name: 'React', type: 'Component Systems' },
  { name: 'Node.js', type: 'Backend Services' },
  { name: 'Docker', type: 'Containerization' },
  { name: 'Kubernetes', type: 'Platform Orchestration' },
  { name: 'Terraform', type: 'Infrastructure as Code' },
  { name: 'AWS', type: 'Cloud Delivery' },
  { name: 'PostgreSQL', type: 'Data Layer' },
  { name: 'Redis', type: 'Caching' },
  { name: 'GitHub Actions', type: 'Release Automation' },
];

export default function Skills() {
  return (
    <section id="skills" className="section-frame py-20 md:py-32">
      <div className="section-shell">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          data-animate="reveal"
        >
          <p className="section-kicker">Skills</p>
          <h2 className="section-title mt-4">
            A toolkit shaped around premium frontend execution and dependable delivery.
          </h2>
          <div
            data-animate="line"
            className="mt-6 h-px w-24 bg-gradient-to-r from-rose-300 via-rose-400 to-transparent"
          />
          <p className="section-subtitle">
            I use motion, rendering, UI architecture, cloud tooling, and release automation together
            so the final product feels deliberate in both design and engineering.
          </p>
        </motion.div>

        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3"
          data-animate="stagger"
        >
          {skills.map((skill) => (
            <motion.li
              key={skill.name}
              variants={fadeUp}
              whileHover={{ y: -6, boxShadow: '0 18px 45px rgba(231,162,196,0.14)' }}
              data-animate-item
              className="panel flex items-center justify-between gap-4 px-5 py-4"
            >
              <span className="text-base font-medium text-zinc-950">{skill.name}</span>
              <span className="pill text-xs">{skill.type}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
