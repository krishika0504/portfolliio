'use client';

import { motion } from 'framer-motion';

const metrics = [
  { value: '12+', label: 'end-to-end launches across product and platform teams' },
  { value: '3D', label: 'premium motion direction powered by Three.js' },
  { value: 'Fast', label: 'scroll storytelling and crisp UI transitions with Anime.js' },
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
            White And Rose Portfolio Rebuild
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-5 max-w-5xl text-5xl font-semibold leading-[0.92] tracking-[-0.05em] text-zinc-950 text-glow sm:text-6xl md:text-7xl xl:text-[7.2rem]"
          >
            Proper UI polish with real engineering underneath.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.35 }}
            className="mt-8 max-w-2xl text-base leading-8 text-zinc-600 sm:text-lg md:text-xl"
          >
            I&apos;m Krishika Rajput, a DevOps engineer and full stack developer building interfaces
            that feel elegant, intentional, and strong enough for real production use.
          </motion.p>

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
            <span className="pill">UI Direction</span>
            <span className="pill">Three.js Depth</span>
            <span className="pill">Anime.js Scroll Motion</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 24, y: 24 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="panel mesh-gradient relative overflow-hidden p-6 sm:p-8"
        >
          <div className="absolute inset-x-6 top-6 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent" />
          <div className="relative">
            <p className="mono text-xs uppercase tracking-[0.32em] text-rose-500">Creative Direction</p>
            <div className="mt-5 flex items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold text-zinc-950">Krishika Rajput</h2>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  DevOps Engineer
                  <br />
                  Full Stack Developer
                </p>
              </div>
              <div className="rounded-full border border-rose-200 bg-white/75 px-3 py-1 text-xs text-rose-600">
                Available For Projects
              </div>
            </div>

            <div className="mt-10 space-y-4" data-animate="stagger">
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
