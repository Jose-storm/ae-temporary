import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Header() {
const [isOpen, setIsOpen] = useState<boolean>(false);
const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

const toggleMenu = () => setIsOpen(!isOpen);

const closeMenu = () => {
    setIsOpen(false);
    setOpenSubmenu(null);
  };

  const toggleSubmenu = (menu: string) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu);
  };

  return (
    <header className="shadow-md sticky w-full z-2 left-0 top-0 bg-[#103778]">
      <div className="flex justify-between max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 items-center h-16 bg-[#103778]">
        {/* <div className="text-xl font-bold text-white">Asesoría Empresarial</div> */}
        <Link to="/">
          <img
            src="src/assets/img/ae_logo.png"  // Cambia por la ruta de tu logo
            alt="Logo Asesoría Empresarial"
            className="h-16 w-auto"
          />
        </Link>
        {/* Botón hamburguesa */}
        <button className="md:hidden text-white" onClick={toggleMenu}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Navegación */}
        <nav
          className={`md:flex md:items-center md:space-x-6 ${
            isOpen ? 'block' : 'hidden'
          } absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent shadow md:shadow-none z-40`}
        >
          <ul className="flex flex-col md:flex-row w-full md:w-auto uppercase font-bold font-fam">
            <li className="">
              <Link
                to="/"
                onClick={closeMenu}
                className="inline-block px-4 py-2 text-black hover:text-gray-300 md:text-white transition duration-100 ease-in-out"
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                to="/nosotros"
                onClick={closeMenu}
                className="block px-4 py-2 text-black md:text-white hover:text-gray-300 transition duration-100 ease-in-out"
              >
                Nosotros
              </Link>
            </li>

            {/* Submenú */}
            <li className="relative group">
                <button
                  onClick={() => toggleSubmenu('servicios')}
                  className="flex items-center justify-between w-full px-4 py-2 text-black md:text-white hover:text-gray-300 transition font-fam uppercase"
                >
                  Servicios ▾
                </button>

                <ul
                  className={`
                    absolute left-0 top-full bg-white shadow-md min-w-[200px] z-50
                    transition-all duration-300 ease-in-out origin-top
                    transform overflow-hidden
                    md:group-hover:max-h-96 md:group-hover:opacity-100 md:group-hover:scale-y-100
                    ${openSubmenu === 'servicios' ? 'max-h-96 opacity-100 scale-y-100' : 'max-h-0 opacity-0 scale-y-95'}
                  `}
                >
                  <li>
                    <Link
                      to="/servicios/web"
                      onClick={closeMenu}
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Contabilidad
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/servicios/mobile"
                      onClick={closeMenu}
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Finanzas
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/servicios/seo"
                      onClick={closeMenu}
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Tributos
                    </Link>
                  </li>
                </ul>
              </li>


            <li>
              <Link to="/Contacto" onClick={closeMenu} className="block px-4 py-2 text-black md:text-white hover:text-gray-300">
                Contacto
              </Link>
            </li>
            <li>
              <Link to="/blog" onClick={closeMenu} className="block px-4 py-2 text-black md:text-white hover:text-gray-300 ">
                Blog
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
