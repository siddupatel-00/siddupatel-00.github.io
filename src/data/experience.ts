export type Experience = {
  company: string
  title: string
  type: "Full-time" | "Internship"
  logo: string | null
  from: Date
  to: Date | null
  descriptionList: string[]
  skills: string[]
  isExpanded: boolean
}

export const EXPERIENCE: Experience[] = []

