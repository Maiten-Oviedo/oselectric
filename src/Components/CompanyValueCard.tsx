"use client"

import { useState, useRef, useEffect } from "react"
import type { ICompanyValue } from "../types/ITeamMember"

interface Props {
  value: ICompanyValue
  index: number
}

const CompanyValueCard = ({ value, index }: Props) => {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, index * 200)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      },
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

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "mision":
        return "from-blue-500 to-cyan-600"
      case "vision":
        return "from-purple-500 to-indigo-600"
      case "valores":
        return "from-orange-500 to-red-600"
      default:
        return "from-gray-500 to-gray-600"
    }
  }

  return (
    <div
      ref={cardRef}
      className={`
        text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl
        transition-all duration-700 ease-out transform hover:scale-105
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
    >
      {/* Icono */}
      <div className="flex justify-center mb-6">
        <div
          className={`
          w-16 h-16 rounded-full bg-gradient-to-br ${getCategoryColor(value.category)}
          flex items-center justify-center text-2xl text-white shadow-lg
        `}
        >
          {value.icon}
        </div>
      </div>

      {/* Título */}
      <h4 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h4>

      {/* Descripción */}
      <p className="text-gray-600 leading-relaxed">{value.description}</p>
    </div>
  )
}

export default CompanyValueCard
