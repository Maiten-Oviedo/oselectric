export interface IReason {
  id: string
  title: string
  description: string
  icon: string
  benefits: string[]
  category: "financiamiento" | "servicio" | "calidad" | "seguridad"
}
