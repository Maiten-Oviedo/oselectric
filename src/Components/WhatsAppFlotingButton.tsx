import { useState, useEffect, useRef } from 'react'
import WhatsAppIcon from '../assets/icons/WhatsAppIcon'

const WhatsAppFloatingButton = () => {
  const [isOpen, setIsOpen] = useState(false)
  const chatRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  // Cerrar el chat al hacer clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        chatRef.current &&
        !chatRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleWhatsAppClick = () => {
    window.open(
      'https://wa.me/5492615278495?text=Hola,%20me%20interesa%20saber%20más%20información%20sobre%20sus%20servicios%20eléctricos.',
      '_blank'
    )
    setIsOpen(false) // Cierra el chat después de abrir WhatsApp
  }

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end ">
      {/* Mini-chat desplegable */}
      {isOpen && (
        <div
          ref={chatRef}
          className="relative bg-white rounded-lg shadow-xl p-4 mb-3 w-64 sm:w-72 border border-gray-200 animate-fade-in-up"
          role="dialog"
          aria-modal="true"
          aria-labelledby="whatsapp-chat-title"
        >
          <h3
            id="whatsapp-chat-title"
            className="text-lg font-semibold text-gray-800 mb-3"
          >
            ¡Hola! ¿Necesitas ayuda?
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Haz clic abajo para chatear con nosotros directamente por WhatsApp.
          </p>
          <button
            onClick={handleWhatsAppClick}
            className="w-full flex items-center justify-center px-4 py-3 bg-green-600 text-white rounded-lg font-medium text-base shadow-md hover:bg-green-500 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 cursor-pointer"
          >
            <svg
              className="size-6 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
            </svg>
            Chatear Ahora
          </button>
          {/* Flecha que apunta al botón */}
          <div className="absolute bottom-[-8px] right-4 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-white shadow-md" />
        </div>
      )}

      {/* Botón flotante de WhatsApp */}
      <button
        ref={buttonRef}
        onClick={toggleChat}
        className=" bg-white text-white rounded-full flex items-center cursor-pointer justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 "
        aria-label={
          isOpen ? 'Cerrar chat de WhatsApp' : 'Abrir chat de WhatsApp'
        }
      >
        <WhatsAppIcon className="size-14" />
      </button>
    </div>
  )
}

export default WhatsAppFloatingButton
