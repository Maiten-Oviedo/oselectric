'use client'

import { useState, useRef, useEffect } from 'react'
import type { IService } from '../types/IService'

interface Props {
  service: IService
  priority?: boolean
}

export const ServiceCard = ({ service, priority = false }: Props) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false) // Nuevo estado para Intersection Observer
  const [isMobile, setIsMobile] = useState(false) // Nuevo estado para detectar móvil
  const cardRef = useRef<HTMLLIElement>(null) // Nueva referencia para la tarjeta

  // Intersection Observer para animaciones al scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
        // No se resetea a false para que el contenido permanezca visible una vez que se ha mostrado
      },
      {
        threshold: 0.1, // La tarjeta es visible cuando el 10% de ella está en el viewport
        rootMargin: '50px',
      }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current)
      }
    }
  }, [])

  // Detectar si es móvil (usando el breakpoint 'md' de Tailwind)
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768) // 'md' breakpoint en Tailwind CSS
    }

    checkIsMobile() // Verificar al montar el componente
    window.addEventListener('resize', checkIsMobile) // Verificar al redimensionar la ventana

    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])

  const handleImageLoad = () => {
    setImageLoaded(true)
  }

  const handleImageError = () => {
    setImageError(true)
  }

  // Manejadores de mouse para desktop
  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsHovered(true)
    }
  }

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsHovered(false)
    }
  }

  // Determinar si el contenido expandible debe estar visible
  const shouldExpand = isMobile ? isVisible : isHovered

  return (
    <li
      ref={cardRef} // Asignar la referencia
      className={`
        group relative h-[400px] sm:h-[450px] lg:h-[500px] overflow-hidden rounded-xl shadow-lg
        transition-all duration-500 cursor-pointer
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
        md:hover:shadow-2xl md:transform md:hover:scale-[1.02] md:focus-within:scale-[1.02]
      `}
      onMouseEnter={handleMouseEnter} // Usar manejador condicional
      onMouseLeave={handleMouseLeave} // Usar manejador condicional
    >
      {/* Skeleton loader */}
      {!imageLoaded && !imageError && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-300 to-gray-200 animate-pulse" />
      )}

      {/* Imagen de fondo */}
      {!imageError ? (
        <img
          src={service.image || '/placeholder.svg'}
          alt={service.alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={priority ? 'high' : 'auto'}
          className={`
            absolute inset-0 w-full h-full object-cover
            transition-all duration-700 ease-out
            group-hover:scale-110 group-focus-within:scale-110
            ${!imageLoaded ? 'opacity-0' : 'opacity-100'}
          `}
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
      ) : (
        // Fallback para error de imagen
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center">
          <div className="text-center text-gray-700">
            <svg
              className="w-16 h-16 mx-auto mb-4 opacity-50"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <p className="text-sm font-medium">{service.title}</p>
          </div>
        </div>
      )}

      {/* Overlay gradiente */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />

      {/* Contenido */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
        {/* Título */}
        <h3 className="text-2xl sm:text-3xl font-bold mb-3 transform transition-transform duration-300 group-hover:translate-y-[-4px]">
          {service.title}
        </h3>

        {/* Descripción */}
        <p
          className={`
          text-gray-200 text-sm sm:text-base leading-relaxed mb-4
          transition-all duration-500 ease-out
          ${
            shouldExpand
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4'
          }
        `}
        >
          {service.description}
        </p>

        {/* Features */}
        {service.features && (
          <ul
            className={`
            space-y-1 transition-all duration-500 ease-out delay-100
            ${
              shouldExpand
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }
          `}
          >
            {service.features.slice(0, 3).map((feature, index) => (
              <li
                key={index}
                className="flex items-center text-sm text-gray-300"
              >
                <svg
                  className="w-4 h-4 mr-2 text-primary flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        )}

        {/* CTA Button */}
        <a
          href="https://wa.me/5492613897545?text=Hola,%20me%20interesa%20información%20sobre%20sus%20servicios%20eléctricos"
          target="_blank"
          rel="noopener noreferrer"
          className={`
            mt-4 self-start px-4 py-2 bg-primary hover:bg-primary/90
            text-white text-sm font-medium rounded-lg
            transition-all duration-300 ease-out
            transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary/50
            ${
              shouldExpand
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }
          `}
          style={{ transitionDelay: '200ms' }}
          aria-label={`Más información sobre ${service.title}`}
        >
          Más información
        </a>
      </div>

      {/* Indicador de categoría */}
      <div className="absolute top-4 right-4 z-20">
        <span
          className={`
          px-3 py-1 text-xs font-medium rounded-full
          ${
            service.category === 'fotovoltaica'
              ? 'bg-green-500/90 text-white'
              : ''
          }
          ${
            service.category === 'industrial' ? 'bg-blue-500/90 text-white' : ''
          }
          ${
            service.category === 'mantenimiento'
              ? 'bg-orange-500/90 text-white'
              : ''
          }
        `}
        >
          {service.category === 'fotovoltaica' && '🌞 Solar'}
          {service.category === 'industrial' && '⚡ Industrial'}
          {service.category === 'mantenimiento' && '🔧 Mantenimiento'}
        </span>
      </div>

      {/* Screen reader content */}
      <span className="sr-only">
        Servicio: {service.title}. {service.description}
      </span>
    </li>
  )
}
