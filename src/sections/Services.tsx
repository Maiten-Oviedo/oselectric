import { ServiceCard } from '../Components/ServiceCard'
import type { IService } from '../types/IService'

const Services = () => {
  const principalServices: IService[] = [
    {
      title: 'Instalaciones eléctricas',
      description: 'Realizamos instalaciones eléctricas seguras y eficientes.',
      image: './assets/images/services/service.webp',
      alt: '',
    },
    {
      title: 'Mantenimiento eléctrico',
      description:
        'Ofrecemos servicios de mantenimiento para asegurar el buen funcionamiento de tus sistemas eléctricos.',
      image: './assets/images/services/service.webp',
      alt: '',
    },
    {
      title: 'Renovaciones eléctricas',
      description:
        'Actualizamos tus instalaciones eléctricas a los estándares más altos.',
      image: './assets/images/services/service.webp',
      alt: '',
    },
  ]

  return (
    <section
      id="servicios"
      className="px-6 md:px-32 mt-20 pt-24 pb-16 bg-gray-100"
      aria-label="Sección de Servicios"
    >
      <h2 className="text-5xl mb-12 font-semibold text-center">
        Nuestros Servicios
      </h2>
      <ul className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center">
        {principalServices.map((service, index) => (
          <ServiceCard key={`service-${index}`} service={service} />
        ))}
      </ul>
    </section>
  )
}

export default Services
