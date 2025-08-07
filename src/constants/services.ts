import type { IService } from '../types/IService'

export const principalServices: IService[] = [
  {
    id: 'sistemas-fotovoltaicos',
    title: 'Sistemas Fotovoltáicos',
    description:
      'Instalación y venta de sistemas completos para generación de energía solar. Soluciones sustentables y eficientes para Agro, Empresas y Hogares.',
    image: './assets/images/services/fotovoltaico.webp',
    alt: 'Instalación de paneles solares fotovoltáicos en techo residencial con técnicos especializados',
    features: [
      'Paneles de alta eficiencia',
      'Inversores inteligentes',
      'Monitoreo en tiempo real',
      'Garantía extendida',
    ],
    category: 'fotovoltaica',
  },
  {
    id: 'electricidad-industrial',
    title: 'Electricidad Industrial',
    description:
      'Especialistas en instalaciones eléctricas industriales y grandes áreas. Proyectos de alta complejidad con estándares internacionales.',
    image: './assets/images/services/industrial.webp',
    alt: 'Instalación eléctrica industrial en planta de manufactura con equipos de alta tensión',
    features: [
      'Alta tensión',
      'Automatización',
      'Tableros de control',
      'Certificaciones',
    ],
    category: 'industrial',
  },
  {
    id: 'obras-mantenimiento',
    title: 'Obras y Mantenimiento',
    description:
      'Servicios integrales de construcción eléctrica y mantenimiento preventivo. Garantizamos el funcionamiento óptimo de sus instalaciones.',
    image: './assets/images/services/obras.webp',
    alt: 'Técnico realizando mantenimiento preventivo en tablero eléctrico industrial',
    features: [
      'Mantenimiento preventivo',
      'Reparaciones urgentes',
      'Actualizaciones',
      'Soporte 24/7',
    ],
    category: 'mantenimiento',
  },
]
