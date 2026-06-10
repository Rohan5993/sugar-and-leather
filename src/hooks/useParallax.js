import { useEffect, useRef } from 'react';

export function useParallax(amount = 0.05) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let ticking = false;

    function update() {
      if (reduce) {
        el.style.transform = '';
        return;
      }
      const r = el.getBoundingClientRect();
      const center = r.top + r.height / 2 - window.innerHeight / 2;
      el.style.transform = `translate3d(0, ${-center * amount}px, 0)`;
    }

    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          update();
          ticking = false;
        });
        ticking = true;
      }
    }

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [amount]);

  return ref;
}

export function useHeroParallax() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let ticking = false;

    function update() {
      if (reduce) {
        el.style.transform = '';
        return;
      }
      const y = window.scrollY;
      el.style.transform = `translate3d(0, ${y * 0.18}px, 0) scale(1.05)`;
    }

    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          update();
          ticking = false;
        });
        ticking = true;
      }
    }

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return ref;
}
