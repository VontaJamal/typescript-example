export interface Team {
  id: number
  abbreviation: string
  city: string
  conference: string
  division: string
  full_name: string
  name: string
  image?: string
}

export interface Logo {
  teamAbbreviation: string
  teamLogo: string
}
