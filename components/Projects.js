'use client';

import { motion } from 'framer-motion';
import { cardHover, fadeUp, staggerContainer } from '../styles/motion';

const projects = [
  {
    tag: 'Featured',
    title: 'Roseline Commerce',
    description:
      'A fashion-forward storefront with immersive product storytelling, fast transitions, and reliable checkout architecture.',
    impact: 'Built to feel editorial while keeping the buying journey simple and high-converting.',
    stack: ['Next.js', 'Anime.js', 'Stripe', 'Headless CMS'],
    featured: true,
  },
  {
    tag: 'Platform',
    title: 'VelvetOps Console',
    description:
      'A release control surface for deployment approvals, rollout visibility, and environment health.',
    impact: 'Turned operational complexity into a calmer, more visual workflow for engineering teams.',
    stack: ['React', 'Node.js', 'Docker', 'GitHub Actions'],
  },
  {
    tag: 'Analytics',
    title: 'Cloud Cost Atelier',
    description:
      'An elegant cloud spend dashboard with anomaly alerts and weekly optimization snapshots.',
    impact: 'Made cost data easier to understand without losing technical depth.',
    stack: ['TypeScript', 'AWS', 'Terraform', 'CloudWatch'],
  },
  {
    tag: 'Experience',
    title: 'Studio Booking Suite',
    description:
      'A polished reservations platform with branded flows, instant confirmations, and flexible admin tools.',
    impact: 'Balanced premium presentation with dependable day-to-day booking operations.',
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
            Selected work with stronger layout, better hierarchy, and clearer personality.
          </h2>
          <p className="section-subtitle">
            These concepts are framed like real product pieces, not filler cards, so the portfolio
            feels curated instead of copied.
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
