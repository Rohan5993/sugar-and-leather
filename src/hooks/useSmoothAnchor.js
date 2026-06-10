import { useEffect } from 'react';

export function useReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function scrollToSection(id) {
  if (id === '#' || id === '#top') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }
  const target = document.querySelector(id);
  if (!target) return;
  const y = target.getBoundingClientRect().top + window.scrollY - 70;
  window.scrollTo({ top: y, behavior: 'smooth' });
}

export function useSmoothAnchor() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function onClick(e) {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;
      const href = link.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const y = target.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top: y, behavior: reduce ? 'auto' : 'smooth' });
    }

    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);
}
