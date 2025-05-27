// src/layouts/MainLayout.jsx
import { Outlet } from 'react-router-dom';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';

export default function MainLayout() {
return (
    <div className="flex flex-col min-h-screen font-fam">
        <Header />
        <main className="flex-grow">
            <Outlet />
        </main>
        <Footer></Footer>
        <a
        href="https://wa.me/51999999999" // Reemplaza por tu número (ejemplo: 51 = Perú)
        target="_blank"
        rel="whatsapp"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-4xl text-white px-4 py-3 rounded-[100%] shadow-lg z-50"
        ><i className="fa-brands fa-whatsapp"></i>
        </a>
    </div>
    
);
}
