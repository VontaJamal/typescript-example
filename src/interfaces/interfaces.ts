export interface Team {
  teamId: string
  shortName: string
  city: string
  fullName: string
  name: string
  image?: string
  leagues: {
    standard: {
      confName: string
      divName: string
    }
  }
  nbaFranchise: string
  nickname: string
  allStar: string
}

export interface Logo {
  shortName: string
  teamLogo: string
}

export interface Players {
  firstName: string
  lastName: string
  teamId: string
  yearsPro: string
  playerId: string
  leagues: {
    standard: {
      jersey: string
      active: string
      pos: string
    }
  }
  country: string
  startNba: string
}
