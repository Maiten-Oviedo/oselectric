"use client"

import { useState, useRef, useEffect } from "react"
import type { ITeamMember } from "../types/ITeamMember"

interface Props {
  member: ITeamMember
  index: number
}

const TeamMemberCard = ({ member, index }: Props) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, index * 150)
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

  return (
    <div
      ref={cardRef}
      className={`
        bg-white rounded-2xl shadow-lg hover:shadow-2xl p-6 text-center
        transition-all duration-700 ease-out transform hover:scale-105
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
    >
      {/* Foto del miembro */}
      <div className="relative w-24 h-24 mx-auto mb-4">
        {!imageLoaded && !imageError && <div className="w-full h-full bg-gray-200 rounded-full animate-pulse" />}

        {!imageError ? (
          <img
            src={member.image || "/placeholder.svg"}
            alt={member.alt}
            className={`
              w-full h-full object-cover rounded-full border-4 border-primary/20
              transition-opacity duration-500
              ${imageLoaded ? "opacity-100" : "opacity-0"}
            `}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/40 rounded-full flex items-center justify-center">
            <span className="text-2xl">👤</span>
          </div>
        )}
      </div>

      {/* Información del miembro */}
      <h4 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h4>
      <p className="text-primary font-semibold mb-3">{member.position}</p>
      <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.description}</p>

      {/* Experiencia */}
      <div className="flex justify-center items-center mb-4">
        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
          {member.experience} experiencia
        </span>
      </div>

      {/* Especialidades */}
      <div className="mb-4">
        <h5 className="text-sm font-semibold text-gray-700 mb-2">Especialidades:</h5>
        <div className="flex flex-wrap justify-center gap-1">
          {member.specialties.map((specialty, idx) => (
            <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
              {specialty}
            </span>
          ))}
        </div>
      </div>

      {/* Certificaciones */}
      <div>
        <h5 className="text-sm font-semibold text-gray-700 mb-2">Certificaciones:</h5>
        <ul className="space-y-1">
          {member.certifications.map((cert, idx) => (
            <li key={idx} className="flex items-center justify-center text-xs text-gray-600">
              <svg className="w-3 h-3 mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              {cert}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default TeamMemberCard
