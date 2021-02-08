import * as React from 'react'
import {Team} from '../interfaces/interfaces'
import logos from '../resources/logos'

const {useState, useEffect} = React

export default function useNBATeams() {
  const [nbaTeams, setNBATeams] = useState<Team[]>(() => {
    const defaultTeams = window.localStorage.getItem('teams')
    if (defaultTeams) return JSON.parse(defaultTeams)
    return []
  })

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
      window.localStorage.setItem('teams', JSON.stringify(teamList))
      setNBATeams(teamList)
    }

    getTeams()
  }, [])

  return nbaTeams
}
