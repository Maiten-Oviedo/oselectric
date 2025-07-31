const Hero = () => {
  return (
    <section
      id="#"
      className="w-full overflow-hidden flex flex-col gap-4  pt-48 px-6 md:px-32"
      aria-label="Sección principal de la página"
    >
      {/* Contenido */}
      <article className="flex flex-col items-center md:flex-row max-w-5xl">
        <h1 className="max-w-[600px] text-black text-5xl md:text-7xl font-semibold leading-tight">
          Instalaciones y renovaciones eléctricas
        </h1>
        <div className="border-2 border-primary w-48 md:w-0 md:h-48 self-start md:self-center my-10 md:ml-6 md:mr-10" />
        <div className="self-end flex-1 w-full flex flex-col gap-4">
          <p className="text-black">
            Somos una empresa que brinda el mejor servicio
          </p>
          <a className="bg-primary text-white px-4 py-3 w-max font-medium shadow-md hover:bg-gray-300 transition cursor-pointer">
            Contáctanos
          </a>
        </div>
      </article>

      <div className="w-full h-[50vh] md:h-[80vh]">
        <img
          src="/assets/images/hero.jpg"
          className="w-full h-full md:min-h-[120%] object-cover"
          loading="lazy"
          alt="Imágen de trabajo realizado para YPF"
        />
      </div>
    </section>
  )
}

export default Hero
