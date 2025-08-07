'use client'

import type React from 'react'
import { useState } from 'react'
import type { IFooterLink } from '../types/footer'
import { footerSections, socialLinks } from '../constants/footerData'
import InstagramIcon from '../assets/icons/InstagramIcon'
import WhatsAppIcon from '../assets/icons/WhatsAppIcon'
import FacebookIcon from '../assets/icons/FacebookIcon'
import { useInView } from 'react-intersection-observer'
const Footer = () => {
  const [logoLoaded, setLogoLoaded] = useState(false)
  const [logoError, setLogoError] = useState(false)

  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    link: IFooterLink
  ) => {
    if (link.isExternal) return

    e.preventDefault()

    if (link.href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    const targetId = link.href.replace('#', '')
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      const headerHeight = 80
      const elementPosition =
        targetElement.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - headerHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  const currentYear = new Date().getFullYear()

  return (
    <>
      <footer
        ref={ref}
        className="bg-gradient-to-b from-gray-50 to-gray-100 border-t-4 border-primary mt-20"
        aria-labelledby="footer-heading"
      >
        {/* Contenido principal del footer */}
        <div className="px-4 sm:px-6 md:px-16 lg:px-32 pt-16 pb-8">
          <div className="max-w-7xl mx-auto">
            {/* Header del footer */}
            <div
              className={`
                text-center mb-16 transition-all duration-1000 ease-out
                ${
                  inView
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }
              `}
            >
              <h2 id="footer-heading" className="sr-only">
                Información de contacto y enlaces del sitio
              </h2>
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                ¿Listo para tu próximo{' '}
                <span className="text-primary-bold">proyecto eléctrico</span>?
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Contáctanos hoy y descubre por qué somos la opción preferida
                para instalaciones eléctricas profesionales.
              </p>
            </div>

            {/* Grid principal */}
            <div className="flex flex-wrap  gap-6 mb-10 justify-center lg:justify-between ">
              {/* Información de la empresa */}
              <div
                className={`
                  lg:max-w-[300px] transition-all duration-1000 ease-out delay-200
                  ${
                    inView
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                  }
                `}
              >
                {/* Logo y nombre */}
                <div className="flex flex-col items-center lg:items-start mb-6">
                  <div className="relative w-16 h-16 mb-4">
                    {!logoLoaded && !logoError && (
                      <div className="w-full h-full bg-gray-200 rounded-2xl animate-pulse" />
                    )}

                    {!logoError ? (
                      <img
                        src="/assets/images/logo@2x.webp"
                        srcSet="
                      /assets/images/logo@1x.webp 1x,
                      /assets/images/logo@2x.webp 2x,
                      /assets/images/logo@3x.webp 3x
                    "
                        alt="Logo de OSE..."
                        className="w-full h-full object-cover rounded-xl shadow-md transition-all duration-500 hover:scale-105"
                        loading="eager"
                        onLoad={() => setLogoLoaded(true)}
                        onError={() => setLogoError(true)}
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/40 rounded-2xl flex items-center justify-center">
                        <span className="text-primary font-bold text-xl">
                          OSE
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="text-center lg:text-left">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      OSE
                    </h4>
                    <p className="text-primary font-semibold mb-4">
                      Servicios Eléctricos Profesionales
                    </p>
                  </div>
                </div>

                {/* Descripción */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6 text-center lg:text-left">
                  Más de 20 años brindando soluciones eléctricas integrales con
                  la más alta calidad y tecnología de vanguardia.
                </p>

                {/* Certificaciones */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-6">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                    ISO 9001
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                    Habilitado
                  </span>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs font-medium">
                    Asegurado
                  </span>
                </div>

                {/* Redes sociales */}
                <div className="flex justify-center lg:justify-start space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={social.id}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`
                          flex items-center justify-center
                        text-gray-600 transition-all duration-300 hover:scale-110
                        focus:outline-none focus:ring-2 focus:ring-primary/50
                      `}
                      aria-label={`Síguenos en ${social.name}`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {social.icon === 'InstagramIcon' && (
                        <InstagramIcon className="size-8" />
                      )}
                      {social.icon === 'WhatsAppIcon' && (
                        <WhatsAppIcon className="size-8" />
                      )}
                      {social.icon === 'FacebookIcon' && (
                        <FacebookIcon className="size-8" />
                      )}
                    </a>
                  ))}
                </div>
              </div>

              {/* Secciones de navegación */}
              {footerSections.map((section, sectionIndex) => (
                <div
                  key={section.id}
                  className={`
                     transition-all duration-1000 ease-out
                    ${
                      inView
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-8'
                    }
                  `}
                  style={{ transitionDelay: `${(sectionIndex + 1) * 200}ms` }}
                >
                  <h4 className="text-lg font-bold text-gray-900 mb-6">
                    {section.title}
                  </h4>
                  <nav>
                    <ul className="space-y-3 ">
                      {section.links.map(link => (
                        <li key={link.id}>
                          <a
                            href={link.href}
                            onClick={e => handleNavClick(e, link)}
                            className="
                              flex items-center text-gray-600 hover:text-primary text-sm
                              transition-colors duration-300 group
                            "
                            target={link.isExternal ? '_blank' : undefined}
                            rel={
                              link.isExternal
                                ? 'noopener noreferrer'
                                : undefined
                            }
                          >
                            <span className="mr-2 text-base group-hover:scale-110 transition-transform duration-300">
                              {link.icon}
                            </span>
                            {link.label}
                            {link.isExternal && (
                              <svg
                                className="w-3 h-3 ml-1 opacity-50"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                />
                              </svg>
                            )}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              ))}
            </div>

            {/* Estadísticas */}
            <div
              className={`
                grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 transition-all duration-1000 ease-out delay-1400
                ${
                  inView
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }
              `}
            >
              {[
                { number: '500+', label: 'Proyectos Completados', icon: '🏗️' },
                { number: '20+', label: 'Años de Experiencia', icon: '📅' },
                { number: '24/7', label: 'Soporte Técnico', icon: '🛠️' },
                {
                  number: '100%',
                  label: 'Satisfacción Garantizada',
                  icon: '⭐',
                },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl mb-2">{stat.icon}</div>
                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="border-t border-gray-200 bg-gray-100">
          <div className="px-4 sm:px-6 md:px-16 lg:px-32 py-6">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                {/* Copyright */}
                <div className="text-center md:text-left">
                  <p className="text-sm text-gray-900">
                    © {currentYear}{' '}
                    <span className="font-semibold text-primary-bold">
                      OSE Servicios Eléctricos
                    </span>
                    . Todos los derechos reservados.
                  </p>
                  <p className="text-xs text-gray-900 mt-1">
                    Desarrollado con ❤️ para brindar el mejor servicio
                    eléctrico. By{' '}
                    <a
                      href="https://github.com/Maiten-Oviedo"
                      rel="noopener noreferrer"
                      aria-label="Link hacia el perfil de github del desarrollador Maiten Oviedo"
                      title="Perfil de Github de Maitén Oviedo"
                    >
                      maiten.
                    </a>
                  </p>
                </div>

                {/* Links legales */}
                <div className="flex flex-wrap justify-center gap-6 text-sm">
                  <a
                    href="/privacidad"
                    className="text-gray-600 hover:text-primary transition-colors duration-300"
                  >
                    Política de Privacidad
                  </a>
                  <a
                    href="/terminos"
                    className="text-gray-600 hover:text-primary transition-colors duration-300"
                  >
                    Términos de Servicio
                  </a>
                  <a
                    href="/cookies"
                    className="text-gray-600 hover:text-primary transition-colors duration-300"
                  >
                    Política de Cookies
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Schema.org structured data para SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'OSE Servicios Eléctricos',
            description:
              'Empresa líder en instalaciones eléctricas y energías renovables',
            url: 'https://ose.com',
            logo: 'https://ose.com/assets/images/logo.jpeg',
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+54-11-1234-5678',
              contactType: 'customer service',
              availableLanguage: 'Spanish',
            },
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Buenos Aires',
              addressCountry: 'AR',
            },
            sameAs: socialLinks.map(social => social.href),
            foundingDate: '2014',
            numberOfEmployees: '15-50',
          }),
        }}
      />
    </>
  )
}

export default Footer
