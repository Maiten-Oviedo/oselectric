import { useState } from 'react'
import { navLinks } from '../constants/navLinks'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-[#fff] px-4 md:px-24">
      <article className="mx-auto sm:px-6 lg:px-8  flex items-center justify-between">
        <img className="rounded-2xl size-20" src="/assets/images/logo.jpeg" alt='Logo de la empresa, un diseño limpio con tonos azules y rojos que expresan las iniciales OSE.'/>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link, index) => (
            <a
              key={`header-link-${index}`}
              href={link.href}
              className="text-black text-lg hover:text-secundary border-b-2 border-b-transparent hover:border-b-secundary transition"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* BURGER BUTTON */}
        <button
          className="md:hidden text-black"
          onClick={toggleMenu}
          aria-label="Abrir menú"
        >
          {isOpen ? 'Cerrar' : 'Abrir menú'}
        </button>

        {/* MOBILE MENU */}
        {isOpen && (
          <div
            onClick={() => setIsOpen(false)}
            className="absolute flex justify-end right-0 top-20 md:hidden w-full bg-black/20 h-dvh"
          >
            <nav className="w-[70vw] rounded-tl-2xl bg-white shadow-lg px-4 pt-2 pb-4 space-y-2">
              {navLinks.map((link, index) => (
                <a
                  key={`header-desktop-link-${index}`}
                  href={link.href}
                  className="flex justify-between text-lg text-black py-2 border-b border-gray-200"
                  onClick={() => setIsOpen(false)}
                >
                  <p>{link.label}</p>
                  <p>{'>'}</p>
                </a>
              ))}
            </nav>
          </div>
        )}
      </article>
    </header>
  )
}

export default Header
