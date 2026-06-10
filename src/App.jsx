import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import EcosystemPage from './pages/EcosystemPage';
import AboutPage from './pages/AboutPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="practices/:slug" element={<ProductPage />} />
          <Route path="products/:slug" element={<EcosystemPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
