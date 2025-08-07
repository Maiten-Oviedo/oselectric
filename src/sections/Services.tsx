'use client'

import { useInView } from 'react-intersection-observer'
import { ServiceCard } from '../Components/ServiceCard'
import { principalServices } from '../constants/services'

const Services = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  return (
    <>
      <section
        id="servicios"
        ref={ref}
        className={`
          px-4 sm:px-6 md:px-16 lg:px-32 mt-20 pt-24 pb-20 bg-gradient-to-b from-gray-50 to-white
          transition-all duration-1000 ease-out
          ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        `}
        aria-labelledby="services-heading"
      >
        {/* Header de la sección */}
        <header className="text-center mb-16">
          <h2
            id="services-heading"
            className="text-4xl sm:text-5xl lg:text-6xl mb-6 font-semibold text-gray-900"
          >
            Nuestros <span className="text-primary-bold">Servicios</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ofrecemos soluciones eléctricas integrales con más de 10 años de
            experiencia en el sector. Desde energía renovable hasta
            instalaciones industriales complejas.
          </p>
        </header>

        {/* Grid de servicios */}
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {principalServices.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              priority={index < 2}
            />
          ))}
        </ul>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            ¿Necesitas una solución personalizada?
          </p>
          <a
            href="#contacto"
            className="
              inline-flex items-center justify-center
              bg-primary-bold hover:bg-primary/90 active:bg-primary/80
              text-white font-medium text-lg
              px-8 py-4 rounded-lg
              shadow-lg hover:shadow-xl
              transition-all duration-300 ease-out
              transform hover:scale-105 active:scale-95
              focus:outline-none focus:ring-4 focus:ring-primary/30
            "
          >
            Solicitar Cotización
            <svg
              className="ml-2 w-5 h-5"
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
        </div>
      </section>

      {/* Schema.org structured data para SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            provider: {
              '@type': 'LocalBusiness',
              name: 'Instalaciones Eléctricas Profesionales',
            },
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Servicios Eléctricos',
              itemListElement: principalServices.map((service, index) => ({
                '@type': 'Offer',
                position: index + 1,
                itemOffered: {
                  '@type': 'Service',
                  name: service.title,
                  description: service.description,
                  category: service.category,
                },
              })),
            },
          }),
        }}
      />
    </>
  )
}

export default Services
