import { useInView } from 'react-intersection-observer'
import LatestWorkCard from '../Components/LatestWorkCard'

const LatestWorks = () => {
  const latestWorks = [
    {
      image: null,
      alt: 'Galería de trabajos recientes',
    },
    {
      image: './assets/images/latestsWorks/servicestation1.webp',
      alt: 'Estación de servicio - Vista exterior',
    },
    {
      image: './assets/images/latestsWorks/servicestation2.webp',
      alt: 'Estación de servicio - Área de combustible',
    },
    {
      image: './assets/images/latestsWorks/servicestation3.webp',
      alt: 'Estación de servicio - Interior tienda',
    },
    {
      image: './assets/images/latestsWorks/living.webp',
      alt: 'Diseño de sala de estar moderna',
    },
    {
      image: './assets/images/latestsWorks/panels.webp',
      alt: 'Instalación de paneles arquitectónicos',
    },
  ]
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })
  return (
    <section
      ref={ref}
      id="trabajos"
      className={`mt-24 flex justify-center px-4 md:px-24 transition duration-300 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      aria-labelledby="latest-works-heading"
    >
      {/* Heading oculto para SEO y accesibilidad */}
      <h2 id="latest-works-heading" className="sr-only">
        Nuestros últimos trabajos realizados
      </h2>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 w-full max-w-6xl">
        {latestWorks.map((work, index) => (
          <LatestWorkCard
            key={`latest-work-${index}`}
            work={work}
            priority={index < 3} // Priorizar las primeras 3 imágenes
          />
        ))}
      </ul>
    </section>
  )
}

export default LatestWorks
