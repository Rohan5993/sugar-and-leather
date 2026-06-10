import { useEffect, useState } from 'react';

export function useLoader(onComplete) {
  const [done, setDone] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let pct = 0;
    const interval = setInterval(() => {
      pct = Math.min(100, pct + Math.random() * 26);
      setProgress(pct);
      if (pct >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setDone(true);
          onComplete?.();
        }, 260);
      }
    }, 130);

    function onLoad() {
      setProgress(100);
    }
    window.addEventListener('load', onLoad);

    return () => {
      clearInterval(interval);
      window.removeEventListener('load', onLoad);
    };
  }, [onComplete]);

  return { done, progress };
}
