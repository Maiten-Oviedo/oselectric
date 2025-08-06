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
    href: 'https://wa.me/5492615278495?text=Hola,%20me%20interesa%20saber%20más%20información%20sobre%20sus%20servicios%20eléctricos.',
    icon: 'WhatsAppIcon',
    color: 'hover:text-green-500',
  },
  {
    id: 'facebook',
    name: 'Facebook',
    href: 'https://facebook.com/ose-electricidad',
    icon: 'FacebookIcon',
    color: 'hover:text-blue-600',
  },
  {
    id: 'instagram',
    name: 'Instagram',
    href: 'https://www.instagram.com/oselectric_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
    icon: 'InstagramIcon',
    color: 'hover:text-pink-500',
  },
]
