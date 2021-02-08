import * as React from 'react'
import {Team} from '../interfaces/interfaces'
import logos from '../resources/logos'

const {useState, useEffect} = React

export default function useNBATeams() {
  const [nbaTeams, setNBATeams] = useState<Team[]>([])

  useEffect(() => {
    const getLogo = (nbaTeam: Team) => {
      const logo = logos.find(
        (logo) => logo.teamAbbreviation === nbaTeam.abbreviation
      )
      nbaTeam.image = logo?.teamLogo
    }

    const getTeams = async () => {
      const teamList: Team[] = (
        await (await fetch('https://www.balldontlie.io/api/v1/teams'))?.json()
      )?.data

      teamList.forEach((team) => getLogo(team))
      setNBATeams(teamList)
    }

    getTeams()
  }, [])

  return nbaTeams
}
