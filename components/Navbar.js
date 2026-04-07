'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);

    const ids = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.35,
        rootMargin: '-20% 0px -55% 0px',
      }
    );

    ids.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    window.addEventListener('scroll', onScroll);
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <motion.nav
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`mx-auto flex w-full max-w-6xl items-center justify-between rounded-full border px-4 py-3 backdrop-blur-xl transition-all sm:px-6 ${
          isScrolled
            ? 'border-rose-200/80 bg-white/72 shadow-[0_18px_44px_rgba(224,150,183,0.18)]'
            : 'border-white/80 bg-white/48'
        }`}
      >
        <motion.a
          href="#home"
          whileHover={{ y: -1 }}
          className="text-sm font-semibold tracking-[0.28em] text-zinc-950 sm:text-base"
        >
          KRISHIKA
        </motion.a>

        <ul className="hidden items-center gap-2 md:flex">
          {navLinks.map((link, index) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <motion.li
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.06 * index }}
              >
                <a
                  href={link.href}
                  className={`relative rounded-full px-4 py-2 text-sm transition ${
                    isActive ? 'text-rose-700' : 'text-zinc-600 hover:text-zinc-950'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="active-nav"
                      className="absolute inset-0 -z-10 rounded-full border border-rose-200 bg-rose-100/80"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </a>
              </motion.li>
            );
          })}
        </ul>

        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="rounded-full border border-rose-200/80 p-2 text-zinc-700 transition hover:text-zinc-950 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-2 w-full max-w-6xl rounded-[28px] border border-rose-200/70 bg-white/90 p-2 backdrop-blur-xl md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block rounded-2xl px-3 py-2 text-sm text-zinc-700 transition hover:bg-rose-50 hover:text-zinc-950"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
