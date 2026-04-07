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
            If you want the product to feel more premium, strategic, and trustworthy, let&apos;s talk.
          </h2>
          <div
            data-animate="line"
            className="mt-6 h-px w-24 bg-gradient-to-r from-rose-300 via-rose-400 to-transparent"
          />
          <p className="section-subtitle">
            I&apos;m available for portfolio rebuilds, landing pages, design-led frontend work, and
            infrastructure-backed product delivery where visual quality and engineering quality need
            to move together.
          </p>

          <div
            className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between"
            data-animate="stagger"
          >
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2" data-animate="stagger">
                <span data-animate-item className="pill text-xs">
                  Portfolio Rebuilds
                </span>
                <span data-animate-item className="pill text-xs">
                  Landing Pages
                </span>
                <span data-animate-item className="pill text-xs">
                  Frontend + DevOps
                </span>
              </div>
              <a
                data-animate-item
                href="mailto:krishika.dev@example.com"
                className="mono inline-block text-sm text-zinc-900 transition hover:text-rose-600"
              >
                krishika.dev@example.com
              </a>
              <div className="flex flex-wrap gap-3">
                <a href="#projects" className="btn-primary">
                  Review Work
                </a>
                <a href="mailto:krishika.dev@example.com" className="btn-secondary">
                  Send Email
                </a>
              </div>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="flex flex-wrap gap-3"
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
                    className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white/78 px-4 py-2 text-sm text-zinc-700 transition hover:border-rose-300 hover:text-zinc-950"
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
