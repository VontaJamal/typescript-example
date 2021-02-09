import * as React from 'react'
import {Team, Players} from '../interfaces/interfaces'
import logos from '../resources/logos'

const {useState, useEffect} = React
const API_KEY = process.env.REACT_APP_NBA_KEY!

export function useNBATeams() {
  const [nbaTeams, setNBATeams] = useState<Team[]>(() => {
    const defaultTeams = window.localStorage.getItem('teams')
    if (defaultTeams) return JSON.parse(defaultTeams)
    return []
  })

  useEffect(() => {
    const getLogo = (nbaTeam: Team) => {
      const logo = logos.find((logo) => logo.shortName === nbaTeam.shortName)
      nbaTeam.image = logo?.teamLogo
    }

    const getTeams = async () => {
      const teamList: Team[] = (
        await (
          await fetch(
            'https://api-nba-v1.p.rapidapi.com/teams/league/standard',
            {
              headers: {
                'x-rapidapi-key': API_KEY,
                'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com',
              },
            }
          )
        ).json()
      ).api.teams.filter(
        (team: Team) => team.nbaFranchise === '1' && team.allStar === '0'
      )

      teamList.forEach((team) => getLogo(team))
      window.localStorage.setItem('teams', JSON.stringify(teamList))
      setNBATeams(teamList)

      console.log('teamList :>> ', teamList)
    }

    getTeams()
  }, [])

  return nbaTeams
}

export function useNBAPlayers(teamId: string) {
  const [nbaPlayers, setNBAPlayers] = useState<Players[]>(() => {
    const defaultPlayers = window.localStorage.getItem(`players${teamId}`)
    if (defaultPlayers) return JSON.parse(defaultPlayers)
    return []
  })

  useEffect(() => {
    const getPlayers = async (teamId: string) => {
      const teamPlayers: Players[] = (
        await (
          await fetch(
            `https://api-nba-v1.p.rapidapi.com/players/teamId/${teamId}`,
            {
              headers: {
                'x-rapidapi-key': API_KEY,
                'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com',
              },
            }
          )
        ).json()
      ).api.players
        .filter(
          (player: Players) =>
            player?.leagues?.standard?.active === '1' && +player.yearsPro > 0
        )
        .sort((playerOne: Players, playerTwo: Players) => {
          const playerOneName = playerOne.lastName.toUpperCase()
          const playerTwoName = playerTwo.lastName.toUpperCase()

          if (playerOneName < playerTwoName) {
            return -1
          }
          if (playerOneName > playerTwoName) {
            return 1
          }

          return 0
        })

      console.log('playerList :>> ', teamPlayers)

      window.localStorage.setItem(
        `players${teamId}`,
        JSON.stringify(teamPlayers)
      )
      setNBAPlayers(teamPlayers)
    }

    getPlayers(teamId)
  }, [teamId])
  return nbaPlayers
}
