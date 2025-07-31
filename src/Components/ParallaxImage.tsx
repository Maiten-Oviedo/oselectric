"use client"
import { useState, useEffect, useRef } from "react"

interface ParallaxImageProps {
  src: string
  alt: string
  className?: string
  parallaxSpeed?: number
}

const ParallaxImage = ({ src, alt, className = "", parallaxSpeed = 0.5 }: ParallaxImageProps) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)
  const imageRef = useRef<HTMLImageElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current || !containerRef.current) return

      const scrolled = window.pageYOffset
      const containerTop = containerRef.current.offsetTop
      const containerHeight = containerRef.current.offsetHeight
      const windowHeight = window.innerHeight

      // Solo aplicar parallax cuando el contenedor esté visible
      if (scrolled + windowHeight > containerTop && scrolled < containerTop + containerHeight) {
        // Calcular el offset parallax - corregido para empezar desde top
        const relativeScroll = Math.max(0, scrolled - containerTop + windowHeight)
        const yPos = -relativeScroll * parallaxSpeed

        requestAnimationFrame(() => {
          if (imageRef.current) {
            imageRef.current.style.transform = `translate3d(0, ${yPos}px, 0)`
          }
        })
      }
    }

    let ticking = false
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", throttledScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener("scroll", throttledScroll)
    }
  }, [parallaxSpeed, imageLoaded])

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      {!imageLoaded && !imageError && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse" />
      )}

      {!imageError ? (
        <img
          ref={imageRef}
          src={src || "/placeholder.svg"}
          alt={alt}
          className={`
            absolute top-0 left-0 w-full h-[150%] object-cover
            transition-opacity duration-700 ease-out
            ${imageLoaded ? "opacity-100" : "opacity-0"}
          `}
          style={{
            willChange: "transform",
          }}
          loading="eager"
          decoding="async"
          fetchPriority="high"
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
          <div className="text-center text-gray-600">
            <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 002 2v12a2 2 0 002 2z"
              />
            </svg>
            <p className="text-sm">Imagen no disponible</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default ParallaxImage
