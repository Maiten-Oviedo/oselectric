interface Props {
  work: { image: string | null; alt: string }
}

const LatestWorkCard = ({ work }: Props) => {
  return (
    <>
      {!work.image && (
        <article className="min-h-[513px] size-full flex justify-center items-center bg-gray-600 p-16">
          <p className="capitalize text-white font-bold text-4xl">
            NUESTROS ÚLTIMOS TRABAJOS
          </p>
        </article>
      )}
      {work.image && (
        <article className="size-full overflow-hidden group cursor-pointer">
          <img
            src={work.image}
            alt={work.alt}
            loading="lazy"
            className="group-hover:scale-110  size-full transition duration-500"
          />
        </article>
      )}
    </>
  )
}

export default LatestWorkCard
