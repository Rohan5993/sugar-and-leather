import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scrollToSection } from '../hooks/useSmoothAnchor';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      window.setTimeout(() => scrollToSection(hash), 80);
      return;
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}
