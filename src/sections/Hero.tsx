'use client'

import type React from 'react'
import ParallaxImage from '../Components/ParallaxImage'
import { socialLinks } from '../constants/footerData'
import InstagramIcon from '../assets/icons/InstagramIcon'
import WhatsAppIcon from '../assets/icons/WhatsAppIcon'
import FacebookIcon from '../assets/icons/FacebookIcon'

const Hero = () => {
  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const contactSection = document.getElementById('contacto')
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  return (
    <>
      {/* Preload hint para la imagen crítica */}
      <link
        rel="preload"
        as="image"
        href="/assets/images/hero.webp"
        fetchPriority="high"
      />

      <section
        className="w-full overflow-hidden flex flex-col gap-6 pt-32 sm:pt-40 lg:pt-48 px-4 sm:px-6 md:px-16 lg:px-32"
        aria-labelledby="hero-heading"
        role="banner"
      >
        {/* Contenido principal */}
        <article className="flex flex-col items-center md:items-start md:flex-row max-w-7xl mx-auto w-full">
          {/* Título principal */}
          <header className="flex-1 max-w-2xl">
            <h1
              id="hero-heading"
              className="text-gray-900 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight md:leading-none mb-6 md:mb-0"
            >
              Instalaciones y construcciones{' '}
              <span className="text-primary">eléctricas</span>
            </h1>
          </header>

          {/* Separador visual */}
          <div
            className="border-2 border-primary w-32 sm:w-48 md:w-0 md:h-32 lg:h-48 self-center md:self-start lg:self-center my-6 md:my-0 md:mx-6 lg:mx-10"
            aria-hidden="true"
          />

          {/* Contenido secundario y CTA */}
          <div className="flex-1 max-w-md md:max-w-sm lg:max-w-md flex flex-col gap-6 text-center md:text-left">
            <p className="text-gray-700 text-lg leading-relaxed">
              Somos una empresa que brinda el mejor servicio en instalaciones
              eléctricas con más de 20 años de experiencia.
            </p>

            <a
              href="#contacto"
              onClick={handleScrollToContact}
              className="
                inline-flex items-center justify-center
                bg-primary hover:bg-primary/90 active:bg-primary/80
                text-white font-medium text-lg
                px-8 py-4 rounded-lg
                shadow-lg hover:shadow-xl
                transition-all duration-300 ease-out
                transform hover:scale-105 active:scale-95
                focus:outline-none focus:ring-4 focus:ring-primary/30
                w-max mx-auto md:mx-0
              "
              title="Ir a la sección de contacto"
              aria-describedby="cta-description"
            >
              Contáctanos
              <svg
                className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <span id="cta-description" className="sr-only">
              Botón para contactar y solicitar presupuesto
            </span>
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
        </article>

        {/* Imagen hero con ParallaxImage - FORMA CORRECTA */}
        <ParallaxImage
          src="/assets/images/hero.webp"
          alt="Instalación eléctrica profesional realizada para YPF - Técnicos especializados trabajando en sistemas eléctricos industriales"
          parallaxSpeed={0.2}
          className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] rounded-lg md:rounded-xl shadow-2xl"
        />

        {/* Schema.org structured data para SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Instalaciones Eléctricas',
              description:
                'Empresa especializada en instalaciones y renovaciones eléctricas con más de 10 años de experiencia',
              serviceType: 'Instalaciones Eléctricas',
              areaServed: 'Argentina',
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Servicios Eléctricos',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Instalaciones Eléctricas',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Renovaciones Eléctricas',
                    },
                  },
                ],
              },
            }),
          }}
        />
      </section>
    </>
  )
}

export default Hero
