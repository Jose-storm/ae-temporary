// src/routes/AppRouter.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainLayout from '@/layouts/MainLayout';

import Home from '@/pages/home/Home';
import Contacto from '@/pages/contact/Contacto';
import Nosotros from '@/pages/aboutus/Nosotros';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/Contacto" element={<Contacto />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
