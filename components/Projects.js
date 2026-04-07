'use client';

import { motion } from 'framer-motion';
import { cardHover, fadeUp, staggerContainer } from '../styles/motion';

const projects = [
  {
    tag: 'Featured',
    title: 'Maison Roseline Commerce',
    description:
      'A luxury storefront concept combining editorial layouts, motion-led storytelling, and a friction-light checkout journey.',
    impact:
      'Designed to feel premium at first glance while preserving speed, mobile clarity, and purchase confidence.',
    stack: ['Next.js', 'Anime.js', 'Stripe', 'Headless CMS'],
    featured: true,
  },
  {
    tag: 'Platform',
    title: 'VelvetOps Release Console',
    description:
      'A deployment control surface for approvals, rollout visibility, environment health, and release management.',
    impact:
      'Transformed operational data into a calmer interface that helped teams ship with more confidence.',
    stack: ['React', 'Node.js', 'Docker', 'GitHub Actions'],
  },
  {
    tag: 'Analytics',
    title: 'Cloud Cost Atelier',
    description:
      'A polished cost intelligence dashboard surfacing anomalies, weekly summaries, and optimization opportunities for cloud teams.',
    impact:
      'Made dense infrastructure metrics more actionable through clearer hierarchy and visual storytelling.',
    stack: ['TypeScript', 'AWS', 'Terraform', 'CloudWatch'],
  },
  {
    tag: 'Experience',
    title: 'Studio Reservation Suite',
    description:
      'A branded reservations platform with elegant scheduling flows, instant confirmations, and streamlined admin tooling.',
    impact:
      'Balanced a premium customer-facing experience with dependable day-to-day booking operations.',
    stack: ['Next.js', 'PostgreSQL', 'Redis', 'Node.js'],
  },
  {
    tag: 'Content',
    title: 'Signature Portfolio CMS',
    description:
      'A publishing workflow for design-led portfolio pages with reusable sections and media optimization.',
    impact: 'Made high-quality personal branding easier to maintain and update over time.',
    stack: ['MDX', 'Vercel', 'Edge Functions', 'Image Pipeline'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-frame py-20 md:py-32">
      <div className="section-shell">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          data-animate="reveal"
        >
          <p className="section-kicker">Projects</p>
          <h2 className="section-title mt-4">
            Work framed as products, not placeholders.
          </h2>
          <div
            data-animate="line"
            className="mt-6 h-px w-24 bg-gradient-to-r from-rose-300 via-rose-400 to-transparent"
          />
          <p className="section-subtitle">
            Each concept is written and structured like a real case-study teaser, with clearer
            outcomes, better hierarchy, and more professional storytelling.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 grid gap-5 lg:grid-cols-3"
          data-animate="stagger"
        >
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              variants={fadeUp}
              initial="rest"
              whileHover="hover"
              animate="rest"
              data-animate-item
              className={`panel flex h-full flex-col overflow-hidden p-6 ${
                project.featured ? 'lg:col-span-2 lg:min-h-[24rem]' : ''
              }`}
            >
              <motion.div variants={cardHover} className="flex h-full flex-col">
                <div className="flex items-center justify-between gap-4">
                  <span className="pill text-xs text-rose-600">{project.tag}</span>
                  <span className="mono text-xs uppercase tracking-[0.28em] text-zinc-400">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <div
                  data-animate="line"
                  className="mt-5 h-px w-full bg-gradient-to-r from-rose-200 via-rose-300 to-transparent"
                />

                <h3 className="mt-6 text-2xl font-semibold text-zinc-950">{project.title}</h3>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-600">{project.description}</p>

                <div className="mt-5 rounded-[24px] border border-rose-100 bg-white/70 p-4 text-sm leading-7 text-zinc-600">
                  {project.impact}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={`${project.title}-${item}`} className="pill text-xs">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
