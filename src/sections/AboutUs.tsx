'use client'

import { useState, useRef, useEffect } from 'react'
import TeamMemberCard from '../Components/TeamMemberCard'
import MissionVision from '../Components/MissionVision'
import { companyValues, teamMembers } from '../constants/aboutData'
const AboutUs = () => {
  const [activeTab, setActiveTab] = useState<'historia' | 'equipo' | 'valores'>(
    'historia'
  )
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  // Intersection Observer para animaciones
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const tabs = [
    { id: 'historia', label: 'Nuestra Historia', icon: '📖' },
    { id: 'equipo', label: 'Nuestro Equipo', icon: '👥' },
    { id: 'valores', label: 'Misión y Visión', icon: '💎' },
  ] as const

  return (
    <>
      <section
        ref={sectionRef}
        id="sobre-nosotros"
        className="px-4 sm:px-6 md:px-16 lg:px-32 py-20 bg-gradient-to-b from-gray-50 to-white"
        aria-labelledby="about-us-heading"
      >
        {/* Header de la sección */}
        <header className="text-center mb-16">
          <h2
            id="about-us-heading"
            className={`
            text-4xl sm:text-5xl lg:text-6xl mb-6 font-semibold text-gray-900
            transition-all duration-1000 ease-out
            ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }
          `}
          >
            Sobre <span className="text-primary">Nosotros</span>
          </h2>
          <p
            className={`
            text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed
            transition-all duration-1000 ease-out delay-200
            ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }
          `}
          >
            Conoce la historia, el equipo y los valores que nos han convertido
            en líderes del sector eléctrico con más de una década de
            experiencia.
          </p>
        </header>

        {/* Navegación por tabs */}
        <nav
          className="flex justify-center mb-12"
          aria-label="Navegación de secciones sobre nosotros"
        >
          <div className="flex flex-wrap justify-center gap-2 p-2 bg-gray-100 rounded-xl">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  flex items-center px-4 cursor-pointer py-3 rounded-lg font-medium text-sm sm:text-base
                  transition-all duration-300 ease-out
                  ${
                    activeTab === tab.id
                      ? 'bg-primary text-white shadow-lg transform scale-105'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-white'
                  }
                `}
                aria-pressed={activeTab === tab.id}
              >
                <span className="mr-2 text-lg">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </nav>

        {/* Contenido de tabs */}
        <div className="max-w-7xl mx-auto">
          {/* Historia */}
          {activeTab === 'historia' && (
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Dos Décadas de Excelencia
                </h3>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Fundada en 2014, nuestra empresa nació con la visión de
                    revolucionar el sector de las instalaciones eléctricas en
                    Argentina, combinando experiencia técnica con las últimas
                    tecnologías del mercado.
                  </p>
                  <p>
                    Durante estos más de 20 años, hemos completado exitosamente
                    más de 500 proyectos, desde instalaciones residenciales
                    hasta complejos sistemas industriales y plantas de energía
                    solar.
                  </p>
                </div>

                {/* Timeline */}
                <div className="space-y-4 mt-8">
                  <h4 className="text-xl font-semibold text-gray-900">
                    Hitos Importantes
                  </h4>
                  <div className="space-y-3">
                    {[
                      { year: '2014', event: 'Fundación de la empresa' },
                      { year: '2019', event: 'Certificación ISO 9001' },
                      {
                        year: '2021',
                        event: 'Expansión a energías renovables',
                      },
                      { year: '2024', event: '500+ proyectos completados' },
                    ].map((milestone, index) => (
                      <div key={index} className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                          {milestone.year.slice(-2)}
                        </div>
                        <span className="text-gray-700">{milestone.event}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Imagen de la empresa */}
              <div className="relative">
                <img
                  src="./assets/images/about.webp"
                  alt="Oficinas principales de Instalaciones Eléctricas con equipo técnico y vehículos de servicio"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
              </div>
            </div>
          )}

          {/* Equipo */}
          {activeTab === 'equipo' && (
            <div>
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Nuestro Equipo Profesional
                </h3>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Contamos con un equipo de profesionales altamente capacitados
                  y certificados, comprometidos con la excelencia en cada
                  proyecto.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
                  <TeamMemberCard
                    key={member.id}
                    member={member}
                    index={index}
                  />
                ))}
              </div>

              {/* Estadísticas del equipo */}
              <div className="mt-16 pt-12 border-t border-gray-200">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-primary">15+</div>
                    <div className="text-sm text-gray-600">
                      Técnicos Certificados
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-primary">50+</div>
                    <div className="text-sm text-gray-600">
                      Años de Experiencia Combinada
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-primary">100%</div>
                    <div className="text-sm text-gray-600">
                      Técnicos Habilitados
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-primary">24/7</div>
                    <div className="text-sm text-gray-600">Disponibilidad</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Valores */}
          {activeTab === 'valores' && (
            <MissionVision companyValues={companyValues} />
          )}
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
              'Empresa líder en instalaciones eléctricas y energías renovables con más de 10 años de experiencia',
            foundingDate: '2014',
            address: {
              '@type': 'PostalAddress',
              addressCountry: 'AR',
            },
            employee: teamMembers.map(member => ({
              '@type': 'Person',
              name: member.name,
              jobTitle: member.position,
              description: member.description,
              hasCredential: member.certifications.map(cert => ({
                '@type': 'EducationalOccupationalCredential',
                credentialCategory: cert,
              })),
            })),
            numberOfEmployees: '15-50',
            areaServed: 'Argentina',
            serviceType: [
              'Instalaciones Eléctricas',
              'Energía Solar',
              'Mantenimiento Eléctrico',
            ],
          }),
        }}
      />
    </>
  )
}

export default AboutUs
