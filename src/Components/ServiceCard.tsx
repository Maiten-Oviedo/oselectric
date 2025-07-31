import type { IService } from '../types/IService'

interface Props {
  service: IService
}

export const ServiceCard = ({ service }: Props) => {
  return (
    <li className="group overflow-hidden cursor-pointer relative h-[70vh] flex flex-col items-center justify-center p-4 shadow-lg">
      <div className="bg-black/30 absolute top-0 left-0 w-full h-full z-10" />
      <img
        src={`${service.image}`}
        alt={service.alt}
        loading="lazy"
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center group-hover:scale-110 transition duration-500 group-hover:rotate-1"
      />
      <h4 className="text-2xl z-30 text-center text-white font-semibold">
        {service.title}
      </h4>
    </li>
  )
}
