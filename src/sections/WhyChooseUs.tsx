import WhyChooseUsCard from '../Components/WhyChooseUsCard'

const WhyChooseUs = () => {
  const reasons = [
    {
      title: 'Financiamiento accesible',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nesciunt, quia omnis nobis nisi ea nemo incidunt fugiat.',
    },
    {
      title: 'Consultas gratis a domicilio',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nesciunt, quia omnis nobis nisi ea nemo incidunt fugiat.',
    },
    {
      title: 'Servicio galardonado',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nesciunt, quia omnis nobis nisi ea nemo incidunt fugiat.',
    },
    {
      title: 'Autorizados y asegurados',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nesciunt, quia omnis nobis nisi ea nemo incidunt fugiat.',
    },
  ]
  return (
    <section
      className="px-6 md:px-32 py-16 bg-gray-100"
      aria-label="Sección por qué elegirnos"
    >
      <h2 className="text-5xl mb-24  font-semibold text-center">
        ¿Por qué elegirnos?
      </h2>

      <ul className="flex flex-row flex-wrap justify-center md:justify-between gap-4">
        {reasons.map((reason, index) => (
          <WhyChooseUsCard key={`reason-${index}`} reason={reason} />
        ))}
      </ul>
    </section>
  )
}

export default WhyChooseUs
