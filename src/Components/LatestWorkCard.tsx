'use client'

import { useState } from 'react'

interface Props {
  work: {
    image: string | null
    alt: string
  }
  priority?: boolean
}

const LatestWorkCard = ({ work, priority = false }: Props) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)

  const handleImageLoad = () => {
    setImageLoaded(true)
  }

  const handleImageError = () => {
    setImageError(true)
  }

  return (
    <li className="aspect-square w-full overflow-hidden group cursor-pointer relative bg-gray-900">
      {!work.image || imageError ? (
        <div className="absolute inset-0 flex justify-center items-center bg-gradient-to-br from-gray-800 to-gray-900">
          <div className="text-center px-6">
            <h3 className="text-white font-bold text-lg sm:text-xl lg:text-2xl xl:text-3xl leading-tight">
              NUESTROS ÚLTIMOS TRABAJOS
            </h3>
            {imageError && (
              <p className="text-gray-400 text-xs sm:text-sm mt-2">
                Error al cargar imagen
              </p>
            )}
          </div>
        </div>
      ) : (
        <>
          {/* Skeleton loader */}
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gray-300 animate-pulse" />
          )}

          {/* Imagen optimizada */}
          <img
            src={work.image || '/placeholder.svg'}
            alt={work.alt || 'Trabajo reciente'}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            fetchPriority={priority ? 'high' : 'auto'}
            className={`
              absolute inset-0 w-full h-full object-cover 
              transition-all duration-500 ease-out
              group-hover:scale-110 group-focus-visible:scale-110
              ${!imageLoaded ? 'opacity-0' : 'opacity-100'}
            `}
            onLoad={handleImageLoad}
            onError={handleImageError}
          />

          {/* Overlay sutil para hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
        </>
      )}

      {/* Accesibilidad */}
      <span className="sr-only">
        {work.image ? `Trabajo: ${work.alt}` : 'Galería de trabajos recientes'}
      </span>
    </li>
  )
}

export default LatestWorkCard
