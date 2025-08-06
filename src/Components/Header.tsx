'use client'

import type React from 'react'

import { useState, useEffect, useRef } from 'react'
import { navLinks } from '../constants/navLinks'
import type { INavLink } from '../types/Invigation'
import WhatsAppIcon from '../assets/icons/WhatsAppIcon'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('inicio')
  const [isScrolled, setIsScrolled] = useState(false)
  const [logoLoaded, setLogoLoaded] = useState(false)
  const [logoError, setLogoError] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  // Detectar scroll para cambiar estilo del header
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)

      // Detectar sección activa
      const sections = navLinks
        .map(link => link.href.replace('#', ''))
        .filter(href => href !== '')

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Ejecutar una vez al montar

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Cerrar menú al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Excluir el botón hamburger del click outside
      const target = event.target as Node
      const hamburgerButton = document.querySelector('[aria-label*="menú"]')

      if (
        menuRef.current &&
        !menuRef.current.contains(target) &&
        hamburgerButton &&
        !hamburgerButton.contains(target)
      ) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      // Prevenir scroll horizontal y vertical
      document.body.style.overflow = 'hidden'
      document.documentElement.style.overflowX = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
      document.documentElement.style.overflowX = 'unset'
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = 'unset'
      document.documentElement.style.overflowX = 'unset'
    }
  }, [isOpen])

  // Cerrar menú con Escape
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen])

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    link: INavLink
  ) => {
    e.preventDefault()
    setIsOpen(false)

    if (link.href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    const targetId = link.href.replace('#', '')
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      const headerHeight = 80 // Altura del header
      const elementPosition =
        targetElement.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - headerHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const isLinkActive = (link: INavLink) => {
    if (link.href === '#') return activeSection === 'inicio'
    return activeSection === link.href.replace('#', '')
  }

  return (
    <>
      <header
        className={`
          w-full fixed top-0 left-0 z-50 transition-all duration-300 ease-out
          ${
            isScrolled
              ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50'
              : 'bg-white/90 backdrop-blur-sm'
          }
        `}
      >
        <div className="mx-auto px-4 sm:px-6 md:px-16 lg:px-32 overflow-x-hidden">
          <article className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="relative w-12 h-12 sm:w-14 sm:h-14">
                {!logoLoaded && !logoError && (
                  <div className="w-full h-full bg-gray-200 rounded-xl animate-pulse" />
                )}

                {!logoError ? (
                  <img
                    src="/assets/images/logo.jpeg"
                    alt="Logo de OSE - Instalaciones Eléctricas, diseño profesional con tonos azules y rojos"
                    className={`
                      w-full h-full object-cover rounded-xl shadow-md
                      transition-all duration-500 hover:scale-105
                      ${logoLoaded ? 'opacity-100' : 'opacity-0'}
                    `}
                    loading="eager"
                    onLoad={() => setLogoLoaded(true)}
                    onError={() => setLogoError(true)}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/40 rounded-xl flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">OSE</span>
                  </div>
                )}
              </div>

              {/* Nombre de la empresa (opcional, solo en desktop) */}
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold text-gray-900 leading-tight">
                  OSE
                </h1>
                <p className="text-xs text-gray-600">
                  Instalaciones Eléctricas
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav
              className="hidden md:flex items-center space-x-1"
              aria-label="Navegación principal"
            >
              {navLinks.map(link => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={e => handleNavClick(e, link)}
                  className={`
                    relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ease-out
                    hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary/50
                    ${
                      isLinkActive(link)
                        ? 'text-primary bg-primary/10'
                        : 'text-gray-700 hover:text-gray-900'
                    }
                  `}
                  aria-current={isLinkActive(link) ? 'page' : undefined}
                >
                  <span className="flex items-center space-x-2">
                    <span className="text-base">{link.icon}</span>
                    <span>{link.label}</span>
                  </span>

                  {/* Indicador activo */}
                  {isLinkActive(link) && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                  )}
                </a>
              ))}
            </nav>

            {/* CTA Button (Desktop) */}
            <div className="hidden md:block">
              <a
                href="#contacto"
                onClick={e =>
                  handleNavClick(e, {
                    id: 'contacto',
                    label: 'Contacto',
                    href: '#contacto',
                  })
                }
                className="
                  inline-flex items-center px-6 py-2.5 bg-primary hover:bg-primary/90 
                  text-white font-medium text-sm rounded-lg shadow-md hover:shadow-lg
                  transition-all duration-300 ease-out transform hover:scale-105
                  focus:outline-none focus:ring-2 focus:ring-primary/50
                "
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Cotizar
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors duration-200"
              aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={isOpen}
              id="mobile-menu-button"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span
                  className={`
                    block h-0.5 w-6 bg-gray-700 transition-all duration-300 ease-out
                    ${isOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1'}
                  `}
                />
                <span
                  className={`
                    block h-0.5 w-6 bg-gray-700 transition-all duration-300 ease-out
                    ${isOpen ? 'opacity-0' : 'opacity-100'}
                  `}
                />
                <span
                  className={`
                    block h-0.5 w-6 bg-gray-700 transition-all duration-300 ease-out
                    ${isOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-1'}
                  `}
                />
              </div>
            </button>
          </article>
        </div>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 top-20 bg-black/50 backdrop-blur-sm md:hidden z-40"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
        )}

        {/* Mobile Menu */}
        <div
          ref={menuRef}
          className={`
            fixed top-20 right-0 h-[calc(100vh-5rem)] w-80 max-w-[85vw] bg-white shadow-2xl
            transform transition-transform duration-300 ease-out md:hidden z-50
            ${isOpen ? 'translate-x-0' : 'translate-x-full'}
          `}
          style={{
            maxWidth: 'min(320px, 85vw)',
            right: isOpen ? '0' : '-100%',
          }}
        >
          <nav className="flex flex-col h-full" aria-label="Navegación móvil">
            {/* Header del menú móvil */}
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Menú</h2>
            </div>

            {/* Links de navegación */}
            <div className="flex-1 overflow-y-auto py-4">
              {navLinks.map((link, index) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={e => handleNavClick(e, link)}
                  className={`
                    flex items-center justify-between px-6 py-4 text-base font-medium
                    transition-all duration-200 ease-out hover:bg-gray-50
                    ${
                      isLinkActive(link)
                        ? 'text-primary bg-primary/5 border-r-2 border-primary'
                        : 'text-gray-700'
                    }
                  `}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-lg">{link.icon}</span>
                    <span>{link.label}</span>
                  </div>
                  <svg
                    className={`w-5 h-5 transition-transform duration-200 ${
                      isLinkActive(link) ? 'text-primary' : 'text-gray-400'
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              ))}
            </div>

            {/* Footer del menú móvil */}
            <div className="px-6 py-4 border-t border-gray-200 space-y-4">
              <a
                href="https://wa.me/5491123456789"
                onClick={e =>
                  handleNavClick(e, {
                    id: 'contacto',
                    label: 'Contacto',
                    href: '#contacto',
                  })
                }
                rel="noopener noreferrer"
                className="
                  w-full flex gap-2 items-center justify-center px-4 py-3 bg-primary hover:bg-primary/90 
                  text-white font-medium rounded-lg shadow-md transition-all duration-200
                "
              >
                <i className="bg-white rounded-full">
                  <WhatsAppIcon className="size-6" />
                </i>
                Solicitar Cotización
              </a>

              {/* Información de contacto rápida */}
              <div className="text-center text-sm text-gray-600">
                <p>
                  📞{' '}
                  <a
                    href="tel:+541112345678"
                    className="hover:underline"
                    aria-label="Llamar al número +54 11 1234-5678"
                  >
                    +54 11 1234-5678
                  </a>
                </p>
                <p>
                  📧{' '}
                  <a
                    href="mailto:info@ose.com"
                    className="hover:underline"
                    aria-label="Enviar correo a info@ose.com"
                  >
                    info@ose.com
                  </a>
                </p>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Spacer para compensar el header fixed */}
      <div className="h-20" aria-hidden="true" />
    </>
  )
}

export default Header
