'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import { animate, onScroll, stagger } from 'animejs';

export default function ScrollAnimator() {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const cleanups = [];
    let rafId = 0;

    const lenis = new Lenis({
      duration: reduceMotion ? 0.8 : 1.15,
      smoothWheel: !reduceMotion,
      syncTouch: false,
      wheelMultiplier: 0.95,
    });

    const raf = (time) => {
      lenis.raf(time);
      rafId = window.requestAnimationFrame(raf);
    };

    rafId = window.requestAnimationFrame(raf);

    const singles = Array.from(document.querySelectorAll('[data-animate="reveal"]'));
    singles.forEach((element, index) => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(56px)';
      element.style.filter = 'blur(10px)';

      const entry = animate(element, {
        opacity: [0, 1],
        translateY: [56, 0],
        filter: ['blur(10px)', 'blur(0px)'],
        delay: reduceMotion ? 0 : index * 45,
        duration: reduceMotion ? 320 : 1100,
        ease: 'outExpo',
        autoplay: false,
      });

      const observer = onScroll({
        target: element,
        enter: 'top bottom-=12%',
        onEnter: () => entry.play(),
      });

      cleanups.push(() => {
        observer.revert();
        entry.revert();
      });
    });

    const groups = Array.from(document.querySelectorAll('[data-animate="stagger"]'));
    groups.forEach((group) => {
      const items = group.querySelectorAll('[data-animate-item]');

      if (!items.length) {
        return;
      }

      items.forEach((item) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(44px) scale(.98)';
      });

      const entry = animate(items, {
        opacity: [0, 1],
        translateY: [44, 0],
        scale: [0.98, 1],
        delay: reduceMotion ? 0 : stagger(120),
        duration: reduceMotion ? 260 : 900,
        ease: 'outExpo',
        autoplay: false,
      });

      const observer = onScroll({
        target: group,
        enter: 'top bottom-=14%',
        onEnter: () => entry.play(),
      });

      cleanups.push(() => {
        observer.revert();
        entry.revert();
      });
    });

    return () => {
      window.cancelAnimationFrame(rafId);
      lenis.destroy();
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  return null;
}
