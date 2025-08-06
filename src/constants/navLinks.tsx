import HomeIcon from '../assets/icons/HomeIcon'
import PhoneIcon from '../assets/icons/PhoneIcon'
import RayIcon from '../assets/icons/RayIcon'
import UsIcon from '../assets/icons/UsIcon'
import WorkIcon from '../assets/icons/WorkIcon'
import type { INavLink } from '../types/Invigation'

export const navLinks: INavLink[] = [
  {
    id: 'inicio',
    label: 'Inicio',
    href: '#',
    icon: <HomeIcon className="size-6" />,
  },
  {
    id: 'servicios',
    label: 'Servicios',
    href: '#servicios',
    icon: <RayIcon className="size-6" />,
  },
  {
    id: 'trabajos',
    label: 'Trabajos',
    href: '#trabajos',
    icon: <WorkIcon className="size-6" />,
  },
  {
    id: 'nosotros',
    label: 'Nosotros',
    href: '#sobre-nosotros',
    icon: <UsIcon className="size-6" />,
  },
  {
    id: 'contacto',
    label: 'Contacto',
    href: '#contacto',
    icon: <PhoneIcon className="size-6" />,
  },
]
