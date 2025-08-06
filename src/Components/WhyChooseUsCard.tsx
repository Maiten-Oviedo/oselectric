'use client'

import { useState, useRef, useEffect } from 'react'
import type { IReason } from '../types/IReason'

interface Props {
  reason: IReason
  index: number
}

const WhyChooseUsCard = ({ reason, index }: Props) => {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isMobile, setIsMobile] = useState(false) // Nuevo estado para detectar móvil
  const cardRef = useRef<HTMLLIElement>(null)

  // Intersection Observer para animaciones al scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Delay escalonado basado en el index
          setTimeout(() => {
            setIsVisible(true)
          }, index * 150)
        }
      },
      {
        threshold: 0.1,
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
  }, [index])

  // Detectar si es móvil (usando un breakpoint de Tailwind)
  useEffect(() => {
    const checkIsMobile = () => {
      // Tailwind's 'md' breakpoint is 768px. We'll use that.
      setIsMobile(window.innerWidth < 768)
    }

    checkIsMobile() // Check on mount
    window.addEventListener('resize', checkIsMobile) // Check on resize

    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'financiamiento':
        return 'from-green-500 to-emerald-600'
      case 'servicio':
        return 'from-blue-500 to-cyan-600'
      case 'calidad':
        return 'from-yellow-500 to-orange-600'
      case 'seguridad':
        return 'from-purple-500 to-indigo-600'
      default:
        return 'from-gray-500 to-gray-600'
    }
  }

  const getCategoryBg = (category: string) => {
    switch (category) {
      case 'financiamiento':
        return 'bg-green-50 border-green-200 hover:border-green-300'
      case 'servicio':
        return 'bg-blue-50 border-blue-200 hover:border-blue-300'
      case 'calidad':
        return 'bg-yellow-50 border-yellow-200 hover:border-yellow-300'
      case 'seguridad':
        return 'bg-purple-50 border-purple-200 hover:border-purple-300'
      default:
        return 'bg-gray-50 border-gray-200 hover:border-gray-300'
    }
  }

  // Determinar si el contenido expandible debe estar visible
  const shouldExpand = isMobile ? isVisible : isHovered

  return (
    <li
      ref={cardRef}
      className={`
        group relative p-6 rounded-2xl border-2 transition-all duration-700 ease-out cursor-pointer
        ${getCategoryBg(reason.category)}
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
        md:hover:shadow-xl md:hover:scale-105 md:focus-within:scale-105
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      tabIndex={0}
      role="article"
      aria-labelledby={`reason-title-${reason.id}`}
    >
      {/* Icono con gradiente */}
      <div className="flex justify-center mb-6">
        <div
          className={`
          w-16 h-16 rounded-full bg-gradient-to-br ${getCategoryColor(
            reason.category
          )}
          flex items-center justify-center text-2xl text-white shadow-lg
          transition-transform duration-300 group-hover:scale-110
        `}
        >
          {reason.icon}
        </div>
      </div>

      {/* Título */}
      <h3
        id={`reason-title-${reason.id}`}
        className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-4 leading-tight"
      >
        {reason.title}
      </h3>

      {/* Descripción */}
      <p className="text-gray-600 text-center text-sm sm:text-base leading-relaxed mb-6">
        {reason.description}
      </p>

      {/* Beneficios expandibles */}
      <div
        className={`
          space-y-2 transition-all duration-500 ease-out overflow-hidden
          ${shouldExpand ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <div className="border-t border-gray-200 pt-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-3 text-center">
            Beneficios incluidos:
          </h4>
          <ul className="space-y-2">
            {reason.benefits.map((benefit, benefitIndex) => (
              <li
                key={benefitIndex}
                className={`
                  flex items-center text-sm text-gray-600 transition-all duration-300 ease-out
                  ${
                    shouldExpand
                      ? 'translate-x-0 opacity-100'
                      : 'translate-x-4 opacity-0'
                  }
                `}
                style={{ transitionDelay: `${benefitIndex * 100}ms` }}
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
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Indicador de hover (solo en desktop) */}
      <div
        className={`
          absolute bottom-4 left-1/2 transform -translate-x-1/2
          text-xs text-gray-400 transition-opacity duration-300
          md:${isHovered ? 'opacity-0' : 'opacity-100'}
          ${isMobile ? 'hidden' : ''}
        `}
      >
        Pasa el cursor para ver más
      </div>

      {/* Efecto de brillo en hover (solo en desktop) */}
      <div
        className={`
          absolute inset-0 rounded-2xl bg-gradient-to-r ${getCategoryColor(
            reason.category
          )}
          md:opacity-0 md:group-hover:opacity-5 transition-opacity duration-300 pointer-events-none
          ${isMobile ? 'opacity-5' : ''}
        `}
      />

      {/* Screen reader content */}
      <span className="sr-only">
        {reason.title}: {reason.description}. Beneficios:{' '}
        {reason.benefits.join(', ')}.
      </span>
    </li>
  )
}

export default WhyChooseUsCard
