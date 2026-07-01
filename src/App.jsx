import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import EcosystemPage from './pages/EcosystemPage';
import PodPage from './pages/PodPage';
import AboutPage from './pages/AboutPage';

const routerBasename = import.meta.env.BASE_URL.replace(/\/$/, '') || undefined;

export default function App() {
  return (
    <BrowserRouter basename={routerBasename}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="practices/:slug" element={<ProductPage />} />
          <Route path="strategic-partnerships/:podSlug" element={<PodPage />} />
          <Route path=":slug" element={<EcosystemPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
