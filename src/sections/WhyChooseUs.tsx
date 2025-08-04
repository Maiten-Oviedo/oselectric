'use client'

import WhyChooseUsCard from '../Components/WhyChooseUsCard'
import type { IReason } from '../types/IReason'

const WhyChooseUs = () => {
  const reasons: IReason[] = [
    {
      id: 'financiamiento-accesible',
      title: 'Financiamiento Accesible',
      description:
        'Ofrecemos planes de financiamiento flexibles y tasas preferenciales para que puedas acceder a nuestros servicios sin comprometer tu presupuesto.',
      icon: '💳',
      benefits: [
        'Planes de pago flexibles',
        'Tasas preferenciales',
        'Sin intereses en 6 meses',
        'Aprobación rápida',
      ],
      category: 'financiamiento',
    },
    {
      id: 'tu-proyecto',
      title: 'Tu proyecto es nuestra prioridad',
      description: 'Atención directa y dedicada en cada etapa del proceso.',
      icon: '🏠',
      benefits: [
        'Evaluación sin costo',
        'Presupuesto detallado',
        'Asesoramiento profesional',
        'Disponibilidad inmediata',
      ],
      category: 'servicio',
    },
    {
      id: 'tiempo-y-forma',
      title: 'Entrega en tiempo y forma',
      description: 'Porque tu tiempo vale.',
      icon: '🏆',
      benefits: [
        '500+ proyectos exitosos',
        'Certificaciones ISO',
        'Reconocimientos del sector',
        'Garantía extendida',
      ],
      category: 'calidad',
    },
    {
      id: 'innovacion',
      title: 'Innovación',
      description:
        'Estamos en constante actualización y formación para adaptarnos a los cambios del sector y brindar un servicio de vanguardia.',
      icon: '🛡️',
      benefits: [
        'Habilitación municipal',
        'Seguro de responsabilidad',
        'Técnicos certificados',
        'Cumplimiento normativo',
      ],
      category: 'seguridad',
    },
  ]

  return (
    <>
      <section
        className="px-4 sm:px-6 md:px-16 lg:px-32 py-20 bg-gradient-to-b from-white to-gray-50"
        aria-labelledby="why-choose-us-heading"
      >
        {/* Header de la sección */}
        <header className="text-center mb-16">
          <h2
            id="why-choose-us-heading"
            className="text-4xl sm:text-5xl lg:text-6xl mb-6 font-semibold text-gray-900"
          >
            ¿Por qué <span className="text-primary">elegirnos</span>?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Más de 20 años de experiencia nos respaldan. Descubre las razones
            por las que somos la mejor opción para tus proyectos eléctricos.
          </p>
        </header>

        {/* Grid de razones */}
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {reasons.map((reason, index) => (
            <WhyChooseUsCard key={reason.id} reason={reason} index={index} />
          ))}
        </ul>

        {/* Estadísticas adicionales */}
        <div className="mt-20 pt-16 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl sm:text-4xl font-bold text-primary">
                500+
              </div>
              <div className="text-sm sm:text-base text-gray-600">
                Proyectos Completados
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl sm:text-4xl font-bold text-primary">
                20+
              </div>
              <div className="text-sm sm:text-base text-gray-600">
                Años de Experiencia
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl sm:text-4xl font-bold text-primary">
                24/7
              </div>
              <div className="text-sm sm:text-base text-gray-600">
                Soporte Técnico
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl sm:text-4xl font-bold text-primary">
                100%
              </div>
              <div className="text-sm sm:text-base text-gray-600">
                Satisfacción Garantizada
              </div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            ¿Listo para comenzar tu proyecto?
          </p>
          <a
            href="#contacto"
            className="
              inline-flex items-center justify-center
              bg-primary hover:bg-primary/90 active:bg-primary/80
              text-white font-medium text-lg
              px-8 py-4 rounded-lg
              shadow-lg hover:shadow-xl
              transition-all duration-300 ease-out
              transform hover:scale-105 active:scale-95
              focus:outline-none focus:ring-4 focus:ring-primary/30
            "
          >
            Solicitar Consulta Gratuita
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
            '@type': 'Organization',
            name: 'Instalaciones Eléctricas Profesionales',
            description:
              'Empresa líder en instalaciones eléctricas con más de 20 años de experiencia',
            foundingDate: '2004',
            numberOfEmployees: '5-10',
            areaServed: 'Argentina',
            hasCredential: [
              {
                '@type': 'EducationalOccupationalCredential',
                credentialCategory: 'Habilitación Municipal',
              },
              {
                '@type': 'EducationalOccupationalCredential',
                credentialCategory: 'Certificación ISO',
              },
            ],
            makesOffer: reasons.map(reason => ({
              '@type': 'Offer',
              name: reason.title,
              description: reason.description,
              category: reason.category,
            })),
          }),
        }}
      />
    </>
  )
}

export default WhyChooseUs
