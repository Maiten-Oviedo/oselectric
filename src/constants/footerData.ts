import type { IFooterSection, ISocialLink } from '../types/footer'

export const footerSections: IFooterSection[] = [
  {
    id: 'empresa',
    title: 'Empresa',
    links: [
      {
        id: 'sobre-nosotros',
        label: 'Sobre Nosotros',
        href: '#sobre-nosotros',
        icon: '👥',
      },
      {
        id: 'nuestro-equipo',
        label: 'Nuestro Equipo',
        href: '#sobre-nosotros',
        icon: '👷',
      },
      {
        id: 'trabajos-realizados',
        label: 'Trabajos Realizados',
        href: '#trabajos',
        icon: '📸',
      },
      {
        id: 'certificaciones',
        label: 'Certificaciones',
        href: '#sobre-nosotros',
        icon: '🏆',
      },
    ],
  },
  {
    id: 'servicios',
    title: 'Nuestros Servicios',
    links: [
      {
        id: 'sistemas-fotovoltaicos',
        label: 'Sistemas Fotovoltaicos',
        href: '#servicios',
        icon: '🌞',
      },
      {
        id: 'electricidad-industrial',
        label: 'Electricidad Industrial',
        href: '#servicios',
        icon: '⚡',
      },
      {
        id: 'mantenimiento',
        label: 'Mantenimiento',
        href: '#servicios',
        icon: '🔧',
      },
      {
        id: 'instalaciones-residenciales',
        label: 'Instalaciones Residenciales',
        href: '#servicios',
        icon: '🏠',
      },
    ],
  },
]

export const socialLinks: ISocialLink[] = [
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    href: 'https://wa.me/5491123456789',
    icon: '📱',
    color: 'hover:text-green-500',
  },
  {
    id: 'facebook',
    name: 'Facebook',
    href: 'https://facebook.com/ose-electricidad',
    icon: '📘',
    color: 'hover:text-blue-600',
  },
  {
    id: 'instagram',
    name: 'Instagram',
    href: 'https://instagram.com/ose_electricidad',
    icon: '📷',
    color: 'hover:text-pink-500',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    href: 'https://linkedin.com/company/ose-electricidad',
    icon: '💼',
    color: 'hover:text-blue-700',
  },
  {
    id: 'youtube',
    name: 'YouTube',
    href: 'https://youtube.com/@ose-electricidad',
    icon: '📺',
    color: 'hover:text-red-600',
  },
]
