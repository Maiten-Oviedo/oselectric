'use client'

import type React from 'react'
import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import type { IContactForm } from '../types/IContact'
import { useInView } from 'react-intersection-observer'

const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })
  const [formData, setFormData] = useState<IContactForm>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    urgency: 'baja',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

  const formRef = useRef<HTMLFormElement>(null)

  const services = [
    'Sistemas Fotovoltaicos',
    'Electricidad Industrial',
    'Obras y Mantenimiento',
    'Consulta General',
  ]

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    // Validación básica
    if (
      !formData.name ||
      !formData.email ||
      !formData.service ||
      !formData.message
    ) {
      setSubmitStatus({
        type: 'error',
        message: 'Por favor completa todos los campos obligatorios.',
      })
      setIsSubmitting(false)
      return
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus({
        type: 'error',
        message: 'Por favor ingresa un email válido.',
      })
      setIsSubmitting(false)
      return
    }

    try {
      // Preparar datos para EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || 'No proporcionado',
        service: formData.service,
        urgency: formData.urgency.toUpperCase(),
        message: formData.message,
        to_name: 'Instalaciones Eléctricas', // Tu nombre/empresa
        reply_to: formData.email,
        // Información adicional para el template
        urgency_color:
          formData.urgency === 'alta'
            ? '#dc2626'
            : formData.urgency === 'media'
            ? '#d97706'
            : '#16a34a',
        estimated_response:
          formData.urgency === 'alta'
            ? '2-4 horas'
            : formData.urgency === 'media'
            ? '24 horas'
            : '48 horas',
      }

      // Enviar email principal
      const result = await emailjs.send(
        process.env.VITE_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.VITE_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.VITE_PUBLIC_EMAILJS_PUBLIC_KEY!
      )

      if (result.status === 200) {
        // Enviar email de confirmación al cliente
        const confirmationParams = {
          to_name: formData.name,
          to_email: formData.email,
          service: formData.service,
          urgency: formData.urgency,
          message: formData.message,
          estimated_response:
            formData.urgency === 'alta'
              ? '2-4 horas'
              : formData.urgency === 'media'
              ? '24 horas'
              : '48 horas',
          company_name: 'Instalaciones Eléctricas Profesionales',
          company_phone: '+54 9 261 533-3891',
          company_email: 'obraservicioselectricos@gmail.com',
        }

        // Enviar confirmación (opcional - necesitas crear un segundo template)
        try {
          await emailjs.send(
            process.env.VITE_PUBLIC_EMAILJS_SERVICE_ID!,
            process.env.VITE_PUBLIC_EMAILJS_CONFIRMATION_TEMPLATE_ID!,
            confirmationParams,
            process.env.VITE_PUBLIC_EMAILJS_PUBLIC_KEY!
          )
        } catch (confirmationError) {
          console.log('Error enviando confirmación:', confirmationError)
        }

        setSubmitStatus({
          type: 'success',
          message: '¡Mensaje enviado correctamente! Te responderemos pronto.',
        })

        // Resetear formulario
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: '',
          urgency: 'media',
        })

        // Scroll al mensaje de éxito
        if (formRef.current) {
          formRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
          })
        }
      }
    } catch (error) {
      console.error('Error enviando email:', error)
      setSubmitStatus({
        type: 'error',
        message:
          'Error al enviar el mensaje. Por favor inténtalo de nuevo o contáctanos directamente.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <section
        ref={ref}
        id="contacto"
        className="px-4 sm:px-6 md:px-16 lg:px-32 py-20 bg-gradient-to-b from-white to-gray-50"
        aria-labelledby="contact-heading"
      >
        {/* Header de la sección */}
        <header className="text-center mb-16">
          <h2
            id="contact-heading"
            className={`
            text-4xl sm:text-5xl lg:text-6xl mb-6 font-semibold text-gray-900
            transition-all duration-1000 ease-out
            ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
          >
            <span className="text-primary-bold">Contáctanos</span>
          </h2>
          <p
            className={`
            text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-4
            transition-all duration-1000 ease-out delay-200
            ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
          >
            ¿Tienes preguntas o necesitas un presupuesto? Estamos aquí para
            ayudarte.
          </p>
          <p
            className={`
            text-2xl sm:text-3xl font-bold text-primary uppercase tracking-wide
            transition-all duration-1000 ease-out delay-400
            ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
          >
            Respuesta garantizada en 24 horas
          </p>
        </header>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Información de contacto */}
            <div
              className={`
              space-y-8 transition-all duration-1000 ease-out delay-600
              ${
                inView
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-8'
              }
            `}
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Información de Contacto
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Teléfono</p>
                      <a
                        href="tel:+5411123456789"
                        className="text-gray-600 hover:text-primary transition-colors"
                      >
                        +54 9 2615533891
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <a
                        href="mailto:obraservicioselectricos@gmail.com"
                        className="text-gray-600 hover:text-primary transition-colors"
                      >
                        obraservicioselectricos@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Ubicación</p>
                      <p className="text-gray-600">Mendoza, Argentina</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Horarios</p>
                      <p className="text-gray-600">Lun - Vie: 8:00 - 18:00</p>
                      <p className="text-gray-600">Sáb: 9:00 - 14:00</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h4 className="text-lg font-bold text-green-800 mb-3 flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </svg>
                  WhatsApp Directo
                </h4>
                <p className="text-green-700 text-sm mb-3">
                  ¿Necesitas respuesta inmediata? Escríbenos por WhatsApp
                </p>
                <a
                  href="https://wa.me/5492615278495?text=Hola,%20me%20interesa%20saber%20más%20información%20sobre%20sus%20servicios%20eléctricos."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </svg>
                  Chatear Ahora
                </a>
              </div>
            </div>

            {/* Formulario */}
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className={`
                bg-white rounded-2xl shadow-xl p-8 space-y-6
                transition-all duration-1000 ease-out delay-800
                ${
                  inView
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-8'
                }
              `}
              aria-label="Formulario de contacto"
            >
              {/* Mensaje de estado */}
              {submitStatus.type && (
                <div
                  className={`
                    p-4 rounded-lg border text-sm font-medium
                    ${
                      submitStatus.type === 'success'
                        ? 'bg-green-50 border-green-200 text-green-800'
                        : 'bg-red-50 border-red-200 text-red-800'
                    }
                  `}
                  role="alert"
                >
                  {submitStatus.message}
                </div>
              )}
              {/* Campos del formulario */}
              <p className="text-2xl font-bold"> O envianos un correo</p>{' '}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors duration-300"
                    placeholder="Tu nombre completo"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors duration-300"
                    placeholder="ejemplo@gmail.com"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors duration-300"
                    placeholder="+54 11 1234-5678"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Servicio de interés *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors duration-300"
                  >
                    <option value="">Selecciona un servicio</option>
                    {services.map(service => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label
                  htmlFor="urgency"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Urgencia del proyecto
                </label>
                <select
                  id="urgency"
                  name="urgency"
                  value={formData.urgency}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors duration-300"
                >
                  <option value="baja">Puedo esperar (48-72 horas)</option>
                  <option value="media">Preferencial (24 horas)</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors duration-300 resize-vertical"
                  placeholder="Cuéntanos sobre tu proyecto, ubicación, presupuesto estimado, etc."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`
                  w-full py-4 px-6 rounded-lg font-semibold text-lg
                  transition-all duration-300 ease-out transform
                  ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-primary hover:bg-primary/90 active:bg-primary/80 hover:scale-105 active:scale-95'
                  }
                  text-white shadow-lg hover:shadow-xl
                  focus:outline-none focus:ring-4 focus:ring-primary/30
                `}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Enviando...
                  </span>
                ) : (
                  'Enviar Correo'
                )}
              </button>
              <p className="text-xs text-gray-500 text-center">
                * Campos obligatorios. Respetamos tu privacidad y no compartimos
                tu información.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Schema.org structured data para SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            mainEntity: {
              '@type': 'LocalBusiness',
              name: 'Instalaciones Eléctricas Profesionales',
              telephone: '+54-11-1234-5678',
              email: 'obraservicioselectricos@gmail.com',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Buenos Aires',
                addressCountry: 'AR',
              },
              openingHours: ['Mo-Fr 08:00-18:00', 'Sa 09:00-14:00'],
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+54-11-1234-5678',
                contactType: 'customer service',
                availableLanguage: 'Spanish',
              },
            },
          }),
        }}
      />
    </>
  )
}

export default Contact
