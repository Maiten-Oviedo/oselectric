export interface IContactForm {
  name: string
  email: string
  phone?: string
  service: string
  message: string
  urgency: "baja" | "media" | "alta"
}
