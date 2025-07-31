export interface IService {
  id: string
  title: string
  description: string
  image: string
  alt: string
  features?: string[]
  category: "fotovoltaica" | "industrial" | "mantenimiento"
}
