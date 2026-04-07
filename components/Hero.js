'use client';

import { motion } from 'framer-motion';
import Hero3DModel from './Hero3DModel';

const heroIntro = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const heroItem = {
  hidden: { opacity: 0, y: 24, filter: 'blur(8px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

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
        <motion.div
          variants={heroIntro}
          initial="hidden"
          animate="show"
          className="max-w-4xl relative"
        >
          <motion.div
            aria-hidden="true"
            animate={{ y: [0, -20, 0], x: [0, 30, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-rose-200/30 blur-3xl -z-10"
          />
          <motion.p
            variants={heroItem}
            className="section-kicker"
          >
            DevOps Engineer & Full Stack Developer
          </motion.p>

          <motion.h1
            variants={heroItem}
            className="mt-4 max-w-4xl text-5xl font-extrabold leading-[1.05] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-pink-500 to-rose-400 text-glow sm:text-6xl lg:text-7xl"
          >
            Merging creativity with engineering precision.
          </motion.h1>

          <motion.div
            variants={heroItem}
            className="mt-8 border-l-[3px] border-rose-400/70 pl-6"
          >
            <p className="max-w-2xl text-base leading-8 text-zinc-600 sm:text-lg md:text-xl font-medium">
              I&apos;m Krishika Rajput — a Full Stack Developer crafting fast, scalable, and immersive digital experiences. I specialize in developing scalable deployments, automated pipelines, cloud systems, and production-ready web applications using modern technologies.
            </p>
          </motion.div>

          <motion.div
            variants={heroItem}
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
            variants={heroItem}
            className="mt-10 flex flex-wrap gap-4"
          >
            <motion.a href="#projects" className="btn-primary" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              View Signature Work
            </motion.a>
            <motion.a href="#contact" className="btn-secondary" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Let&apos;s Build Something
            </motion.a>
          </motion.div>

          <motion.div
            variants={heroItem}
            className="mt-12 flex flex-wrap gap-3"
          >
            <motion.span whileHover={{ y: -2 }} className="pill hover:bg-rose-50 hover:border-rose-300 transition-colors cursor-default shadow-sm border-white/60 backdrop-blur-md">Full Stack</motion.span>
            <motion.span whileHover={{ y: -2 }} className="pill hover:bg-rose-50 hover:border-rose-300 transition-colors cursor-default shadow-sm border-white/60 backdrop-blur-md">Cloud Infrastructure</motion.span>
            <motion.span whileHover={{ y: -2 }} className="pill hover:bg-rose-50 hover:border-rose-300 transition-colors cursor-default shadow-sm border-white/60 backdrop-blur-md">Problem Solving</motion.span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 32, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
          transition={{ duration: 0.82, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
          className="panel mesh-gradient relative overflow-hidden p-6 sm:p-8"
        >
          <motion.div
            aria-hidden="true"
            animate={{ y: [0, -14, 0], x: [0, 10, 0], scale: [1, 1.06, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute right-8 top-12 h-32 w-32 rounded-full bg-rose-200/50 blur-3xl float-soft"
          />
          <motion.div
            aria-hidden="true"
            animate={{ y: [0, 12, 0], x: [0, -8, 0], scale: [1, 0.94, 1] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
            className="absolute bottom-10 left-8 h-28 w-28 rounded-full bg-white/85 blur-3xl float-soft-delay"
          />

          <div className="absolute inset-x-6 top-6 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent" />
          <div className="relative">
            <div className="flex items-start justify-between gap-4 relative z-30">
              <div>
                <p className="mono text-xs uppercase tracking-[0.32em] text-rose-500">Interactive 3D</p>
                <h2 className="mt-3 text-2xl font-semibold text-zinc-950">Engineering Dimensions.</h2>
                <p className="mt-2 max-w-md text-sm leading-6 text-zinc-600">
                  Building deep, functional, and visually compelling systems.
                </p>
              </div>
              <div className="rounded-full border border-rose-200 bg-white/75 px-3 py-1 text-xs text-rose-600">
                Interactive
              </div>
            </div>

            <div
              data-animate="line"
              className="mt-6 h-px w-full bg-gradient-to-r from-rose-200 via-rose-300 to-transparent relative z-30"
            />

            <div className="mt-8 relative flex justify-center items-center h-[360px] rounded-[28px] border border-white/50 bg-white/30 backdrop-blur-2xl shadow-[0_30px_60px_rgba(226,85,152,0.15)] ring-1 ring-inset ring-rose-100/50 overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-tr from-rose-100/20 via-transparent to-white/40 pointer-events-none z-30" />
              <Hero3DModel />
            </div>
          </div>
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="group absolute bottom-2 left-1/2 z-20 hidden -translate-x-1/2 items-center gap-2 text-xs uppercase tracking-[0.28em] text-rose-500 md:flex"
        >
          Scroll
          <span className="pulse-chip inline-flex h-6 w-6 items-center justify-center rounded-full border border-rose-300/70 bg-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
          </span>
        </motion.a>
      </div>
    </section>
  );
}
