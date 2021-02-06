export interface NBATeam {
  id: number
  abbreviation: string
  city: string
  conference: string
  division: string
  full_name: string
  name: string
  image?: string
}

export interface NBALogo {
  teamAbbreviation: string
  teamLogo: string
}
