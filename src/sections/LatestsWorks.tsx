import LatestWorkCard from '../Components/LatestWorkCard'

const LatestsWorks = () => {
  const latestWorks = [
    {
      image: null,
      alt: '',
    },
    {
      image: './assets/images/latestsWorks/servicestation1.jpeg',
      alt: '',
    },
    {
      image: './assets/images/latestsWorks/servicestation2.jpeg',
      alt: '',
    },
    {
      image: './assets/images/latestsWorks/servicestation3.jpeg',
      alt: '',
    },
    {
      image: './assets/images/latestsWorks/living.jpeg',
      alt: '',
    },
    {
      image: './assets/images/latestsWorks/panels.jpeg',
      alt: '',
    },
  ]
  return (
    <section
      className="mt-24 flex justify-center px-4 md:px-24"
      aria-label="Sección de últimos trabajos"
    >
      <ul className="grid grid-colds-1 md:grid-cols-2 lg:grid-cols-3 gap-0 w-max">
        {latestWorks.map((work, index) => (
          <LatestWorkCard key={`lastest-work-${index}`} work={work} />
        ))}
      </ul>
    </section>
  )
}

export default LatestsWorks
