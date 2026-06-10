import { useEffect } from 'react';

export function useCustomCursor() {
  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || reduce) return;

    const dot = document.getElementById('cursorDot');
    const ring = document.getElementById('cursorRing');
    if (!dot || !ring) return;

    let dx = 0;
    let dy = 0;
    let rx = 0;
    let ry = 0;
    let has = false;
    let rafId;

    function onMouseMove(e) {
      dx = e.clientX;
      dy = e.clientY;
      if (!has) {
        has = true;
        rx = dx;
        ry = dy;
        document.body.classList.add('cursor-on');
      }
    }

    function loop() {
      rx += (dx - rx) * 0.16;
      ry += (dy - ry) * 0.16;
      dot.style.transform = `translate(${dx}px, ${dy}px) translate(-50%, -50%)`;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      rafId = requestAnimationFrame(loop);
    }

    const hotSelectors = 'a, button, [data-magnetic], .faq-q, .car-arrow';
    function enterHot() {
      document.body.classList.add('cursor-hot');
    }
    function leaveHot() {
      document.body.classList.remove('cursor-hot');
    }

    window.addEventListener('mousemove', onMouseMove);
    rafId = requestAnimationFrame(loop);

    document.querySelectorAll(hotSelectors).forEach((el) => {
      el.addEventListener('mouseenter', enterHot);
      el.addEventListener('mouseleave', leaveHot);
    });

    const observer = new MutationObserver(() => {
      document.querySelectorAll(hotSelectors).forEach((el) => {
        if (!el.dataset.cursorBound) {
          el.dataset.cursorBound = '1';
          el.addEventListener('mouseenter', enterHot);
          el.addEventListener('mouseleave', leaveHot);
        }
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafId);
      observer.disconnect();
      document.body.classList.remove('cursor-on', 'cursor-hot');
    };
  }, []);
}
