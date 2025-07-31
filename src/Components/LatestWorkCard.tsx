interface Props {
  work: { image: string | null; alt: string }
}

const LatestWorkCard = ({ work }: Props) => {
  return (
    <>
      {!work.image && (
        <li className="min-h-[513px] size-full flex justify-center items-center bg-gray-600 p-16">
          <p className="capitalize text-white font-bold text-4xl">
            NUESTROS ÚLTIMOS TRABAJOS
          </p>
        </li>
      )}
      {work.image && (
        <li className="size-full overflow-hidden group cursor-pointer">
          <img
            src={work.image}
            alt={work.alt}
            loading="lazy"
            className="group-hover:scale-110  size-full transition duration-500"
          />
        </li>
      )}
    </>
  )
}

export default LatestWorkCard
