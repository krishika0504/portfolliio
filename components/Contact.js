'use client';

import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { fadeUp, staggerContainer } from '../styles/motion';

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/krishika',
    icon: FaGithub,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/krishika',
    icon: FaLinkedin,
  },
  {
    label: 'Email',
    href: 'mailto:krishika.dev@example.com',
    icon: FaEnvelope,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-frame py-20 md:py-32">
      <div className="section-shell">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          data-animate="reveal"
          className="panel mesh-gradient p-8 sm:p-10"
        >
          <p className="section-kicker">Contact</p>
          <h2 className="section-title mt-4">
            Open to ambitious product, platform, and freelance work.
          </h2>
          <p className="section-subtitle">
            Open to collaboration, consulting, and full-time opportunities in DevOps and full stack
            development.
          </p>

          <div
            className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between"
            data-animate="stagger"
          >
            <a
              data-animate-item
              href="mailto:krishika.dev@example.com"
              className="mono text-sm text-slate-100 transition hover:text-white"
            >
              krishika.dev@example.com
            </a>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="flex gap-3"
            >
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    variants={fadeUp}
                    whileHover={{ y: -4, scale: 1.03 }}
                    data-animate-item
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-4 py-2 text-sm text-slate-200/82 transition hover:border-white/30 hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                    {social.label}
                  </motion.a>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
