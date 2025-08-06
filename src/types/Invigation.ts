import type { ReactNode } from 'react'

export interface INavLink {
  id: string
  label: string
  href: string
  icon?: ReactNode
}
