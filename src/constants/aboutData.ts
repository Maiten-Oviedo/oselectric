import type { ICompanyValue, ITeamMember } from '../types/ITeamMember'

export const teamMembers: ITeamMember[] = [
  {
    id: 'carlos-rodriguez',
    name: 'Carlos Rodríguez',
    position: 'Director Técnico',
    description:
      'Ingeniero Electricista con más de 15 años de experiencia en proyectos industriales y residenciales de gran envergadura.',
    image: './assets/images/team/carlos-rodriguez.webp',
    alt: 'Carlos Rodríguez, Director Técnico de Instalaciones Eléctricas, ingeniero con casco y equipo de seguridad',
    experience: '15+ años',
    specialties: [
      'Instalaciones Industriales',
      'Sistemas Fotovoltaicos',
      'Alta Tensión',
    ],
    certifications: [
      'Ingeniero Electricista',
      'Certificación ISO 9001',
      'Habilitación Municipal',
    ],
  },
  {
    id: 'maria-gonzalez',
    name: 'María González',
    position: 'Especialista en Energía Solar',
    description:
      'Técnica especializada en sistemas fotovoltaicos con certificaciones internacionales en energías renovables.',
    image: './assets/images/team/maria-gonzalez.webp',
    alt: 'María González, Especialista en Energía Solar, técnica revisando paneles solares',
    experience: '8+ años',
    specialties: [
      'Paneles Solares',
      'Inversores',
      'Sistemas de Almacenamiento',
    ],
    certifications: [
      'Técnica en Energías Renovables',
      'Certificación NABCEP',
      'Curso Avanzado en Fotovoltaica',
    ],
  },
  {
    id: 'juan-martinez',
    name: 'Juan Martínez',
    position: 'Jefe de Mantenimiento',
    description:
      'Especialista en mantenimiento preventivo y correctivo con amplia experiencia en instalaciones comerciales.',
    image: './assets/images/team/juan-martinez.webp',
    alt: 'Juan Martínez, Jefe de Mantenimiento, técnico trabajando en tablero eléctrico',
    experience: '12+ años',
    specialties: [
      'Mantenimiento Preventivo',
      'Diagnóstico de Fallas',
      'Automatización',
    ],
    certifications: [
      'Técnico Electricista',
      'Especialización en Mantenimiento',
      'Certificación en Seguridad',
    ],
  },
]

export const companyValues: ICompanyValue[] = [
  {
    id: 'mision',
    title: 'Nuestra Misión',
    description:
      'Brindar soluciones eléctricas integrales de la más alta calidad, utilizando tecnología de vanguardia y un equipo altamente capacitado para superar las expectativas de nuestros clientes.',
    icon: '🎯',
    category: 'mision',
  },
  {
    id: 'vision',
    title: 'Nuestra Visión',
    description:
      'Ser la empresa líder en instalaciones eléctricas y energías renovables en la región, reconocida por nuestra innovación, calidad y compromiso con la sustentabilidad.',
    icon: '🔮',
    category: 'vision',
  },
  {
    id: 'valores',
    title: 'Nuestros Valores',
    description:
      'Integridad, excelencia, innovación y compromiso con el medio ambiente guían cada uno de nuestros proyectos y relaciones comerciales.',
    icon: '⭐',
    category: 'valores',
  },
]
