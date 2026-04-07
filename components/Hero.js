'use client';

import { motion } from 'framer-motion';

const metrics = [
  { value: 'Grad', label: 'recently graduated with a strong foundation in modern web technologies and DevOps practices' },
  { value: 'Driven', label: 'eager to learn, adapt, and contribute to fast-paced engineering teams' },
  { value: 'Code', label: 'focus on writing clean, maintainable, and production-ready applications' },
];

const highlights = [
  'Strong foundation in full stack development and cloud infrastructure.',
  'Passionate about crafting polished, responsive, and accessible user interfaces.',
  'Dedicated to continuous learning and adopting industry best practices.',
];

const focusAreas = [
  {
    title: 'Frontend Development',
    detail: 'Building responsive, accessible, and performant web applications using React and Next.js.',
  },
  {
    title: 'Backend & APIs',
    detail: 'Designing robust RESTful services and managing reliable database interactions.',
  },
  {
    title: 'Cloud & DevOps',
    detail: 'Understanding of modern CI/CD pipelines, containerization, and cloud deployment.',
  },
];

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-28">
      <div className="section-shell relative z-10 grid gap-12 pb-16 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="section-kicker"
          >
            Aspiring Software Engineer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-5 max-w-5xl text-5xl font-semibold leading-[0.92] tracking-[-0.05em] text-zinc-950 text-glow sm:text-6xl md:text-7xl xl:text-[7.2rem]"
          >
            Passionate about building scalable digital experiences.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.75, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 h-px w-28 origin-left bg-gradient-to-r from-rose-400 via-rose-300 to-transparent"
          />

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.35 }}
            className="mt-8 max-w-2xl text-base leading-8 text-zinc-600 sm:text-lg md:text-xl"
          >
            I&apos;m Krishika Rajput, a motivated fresher and full stack developer eager to dive into modern web development and DevOps. I love turning complex problems into elegant, maintainable solutions, and I am excited to bring my energy and fresh perspective to a dynamic engineering team.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.42 }}
            className="mt-8 grid gap-3"
          >
            {highlights.map((highlight) => (
              <div
                key={highlight}
                className="flex items-start gap-3 text-sm leading-7 text-zinc-600 sm:text-base"
              >
                <span className="mt-[0.72rem] h-2 w-2 rounded-full bg-rose-400" />
                <p>{highlight}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.48 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a href="#projects" className="btn-primary">
              View Signature Work
            </a>
            <a href="#contact" className="btn-secondary">
              Let&apos;s Build Something
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.58 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <span className="pill">Full Stack</span>
            <span className="pill">Cloud Infrastructure</span>
            <span className="pill">Problem Solving</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 24, y: 24 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="panel mesh-gradient relative overflow-hidden p-6 sm:p-8"
        >
          <motion.div
            aria-hidden="true"
            animate={{ y: [0, -14, 0], x: [0, 10, 0], scale: [1, 1.06, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute right-8 top-12 h-32 w-32 rounded-full bg-rose-200/50 blur-3xl"
          />
          <motion.div
            aria-hidden="true"
            animate={{ y: [0, 12, 0], x: [0, -8, 0], scale: [1, 0.94, 1] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
            className="absolute bottom-10 left-8 h-28 w-28 rounded-full bg-white/85 blur-3xl"
          />

          <div className="absolute inset-x-6 top-6 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent" />
          <div className="relative">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="mono text-xs uppercase tracking-[0.32em] text-rose-500">Strategic Focus</p>
                <h2 className="mt-3 text-2xl font-semibold text-zinc-950">Professional product presentation.</h2>
                <p className="mt-2 max-w-md text-sm leading-6 text-zinc-600">
                  A cleaner hero composition that keeps the section elevated and design-led without
                  relying on a mascot or novelty element.
                </p>
              </div>
              <div className="rounded-full border border-rose-200 bg-white/75 px-3 py-1 text-xs text-rose-600">
                Refined Layout
              </div>
            </div>

            <div
              data-animate="line"
              className="mt-6 h-px w-full bg-gradient-to-r from-rose-200 via-rose-300 to-transparent"
            />

            <div className="mt-6 grid gap-4" data-animate="stagger">
              {focusAreas.map((item) => (
                <article
                  key={item.title}
                  data-animate-item
                  className="rounded-[24px] border border-rose-100 bg-white/72 p-5 shadow-[0_12px_30px_rgba(232,170,199,0.08)]"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-lg font-semibold text-zinc-950">{item.title}</h3>
                    <span className="h-2 w-2 rounded-full bg-rose-400" />
                  </div>
                  <p className="mt-3 text-sm leading-7 text-zinc-600">{item.detail}</p>
                </article>
              ))}
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-1" data-animate="stagger">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  data-animate-item
                  className="rounded-[24px] border border-rose-100 bg-white/72 p-4 shadow-[0_12px_30px_rgba(232,170,199,0.08)]"
                >
                  <p className="text-3xl font-semibold tracking-tight text-zinc-950">{metric.value}</p>
                  <p className="mt-2 text-sm leading-6 text-zinc-600">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
