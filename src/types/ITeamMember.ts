export interface ITeamMember {
  id: string
  name: string
  position: string
  description: string
  image: string
  alt: string
  experience: string
  specialties: string[]
  certifications: string[]
}

export interface ICompanyValue {
  id: string
  title: string
  description: string
  icon: string
  category: "mision" | "vision" | "valores"
}
