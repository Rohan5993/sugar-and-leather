import { Outlet } from 'react-router-dom';
import { useCustomCursor } from '../hooks/useCustomCursor';
import { useSmoothAnchor } from '../hooks/useSmoothAnchor';
import CustomCursor from './CustomCursor';
import Nav from './Nav';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

export default function Layout() {
  useSmoothAnchor();
  useCustomCursor();

  return (
    <div className="on-obsidian">
      <ScrollToTop />
      <CustomCursor />
      <Nav />
      <main id="top">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
