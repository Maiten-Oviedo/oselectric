import LatestWorkCard from "../Components/LatestWorkCard"

const LatestWorks = () => {
  const latestWorks = [
    {
      image: null,
      alt: "Galería de trabajos recientes",
    },
    {
      image: "./assets/images/latestsWorks/servicestation1.jpeg",
      alt: "Estación de servicio - Vista exterior",
    },
    {
      image: "./assets/images/latestsWorks/servicestation2.jpeg",
      alt: "Estación de servicio - Área de combustible",
    },
    {
      image: "./assets/images/latestsWorks/servicestation3.jpeg",
      alt: "Estación de servicio - Interior tienda",
    },
    {
      image: "./assets/images/latestsWorks/living.jpeg",
      alt: "Diseño de sala de estar moderna",
    },
    {
      image: "./assets/images/latestsWorks/panels.jpeg",
      alt: "Instalación de paneles arquitectónicos",
    },
  ]

  return (
    <section className="mt-24 flex justify-center px-4 md:px-24" aria-labelledby="latest-works-heading">
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
