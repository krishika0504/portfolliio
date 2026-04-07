'use client';

import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../styles/motion';

const skills = [
  { name: 'Three.js', type: '3D UI' },
  { name: 'Anime.js', type: 'Motion' },
  { name: 'Next.js', type: 'Frontend' },
  { name: 'React', type: 'Frontend' },
  { name: 'Node.js', type: 'Backend' },
  { name: 'Docker', type: 'Containers' },
  { name: 'Kubernetes', type: 'Infra' },
  { name: 'Terraform', type: 'IaC' },
  { name: 'AWS', type: 'Cloud' },
  { name: 'PostgreSQL', type: 'Data' },
  { name: 'Redis', type: 'Caching' },
  { name: 'GitHub Actions', type: 'Automation' },
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
          <h2 className="section-title mt-4">Design-forward frontend work backed by solid engineering tools.</h2>
          <p className="section-subtitle">
            The visual layer matters, but so do the systems that keep it responsive, maintainable,
            and production-ready.
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
