'use client';

import { motion } from 'framer-motion';

const metrics = [
  { value: '8+', label: 'Years designing and shipping digital systems' },
  { value: '24', label: 'Launches orchestrated across product and infra' },
  { value: '99.9%', label: 'Reliability mindset across delivery pipelines' },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-0 pt-28"
    >
      <div className="section-shell relative z-10 grid gap-12 pb-16 pt-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="section-kicker"
          >
            3D Portfolio Experience
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-5 max-w-5xl text-5xl font-semibold leading-[0.92] tracking-[-0.05em] text-slate-50 text-glow sm:text-6xl md:text-7xl xl:text-[7.5rem]"
          >
            Designing cloud-ready products with cinematic depth.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.35 }}
            className="mt-8 max-w-2xl text-base leading-8 text-slate-200/78 sm:text-lg md:text-xl"
          >
            I&apos;m Krishika Rajput, a DevOps engineer and full stack developer shaping platforms
            that feel tactile, resilient, and unmistakably modern.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.48 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="rounded-full border border-sky-200/25 bg-sky-200/10 px-6 py-3 text-sm font-medium text-slate-50 transition hover:border-sky-100/60 hover:bg-sky-100/20"
            >
              Explore Projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-slate-200/85 transition hover:border-white/40 hover:bg-white/5"
            >
              Start a Conversation
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 24, y: 24 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="panel mesh-gradient relative overflow-hidden p-6 sm:p-8"
        >
          <div className="absolute inset-x-6 top-6 h-px bg-gradient-to-r from-transparent via-sky-100/70 to-transparent" />
          <div className="relative">
            <p className="mono text-xs uppercase tracking-[0.32em] text-sky-100/65">Identity</p>
            <div className="mt-5 flex items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold text-slate-50">Krishika Rajput</h2>
                <p className="mt-2 text-sm leading-6 text-slate-200/70">
                  DevOps Engineer
                  <br />
                  Full Stack Developer
                </p>
              </div>
              <div className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-slate-200/75">
                Available 2026
              </div>
            </div>

            <div className="mt-10 space-y-4" data-animate="stagger">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  data-animate-item
                  className="rounded-[22px] border border-white/12 bg-slate-950/25 p-4"
                >
                  <p className="text-3xl font-semibold tracking-tight text-slate-50">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300/72">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
