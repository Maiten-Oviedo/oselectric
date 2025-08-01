export interface IFooterSection {
  id: string
  title: string
  links: IFooterLink[]
}

export interface IFooterLink {
  id: string
  label: string
  href: string
  icon?: string
  isExternal?: boolean
}

export interface ISocialLink {
  id: string
  name: string
  href: string
  icon: string
  color: string
}
