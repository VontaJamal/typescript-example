import * as React from 'react'
import {Grid, Text, Image, Box} from '@chakra-ui/react'
import {NBATeam} from '../interfaces/interfaces'
import NBALogos from '../resources/logos'
import nbaLogos from '../resources/logos'

const {useState, useEffect} = React

const useNBATeams = () => {
  const [nbaTeams, setNBATeams] = useState<NBATeam[]>([])

  useEffect(() => {
    const getNBATeams = async () => {
      const teamList: NBATeam[] = (
        await (await fetch('https://www.balldontlie.io/api/v1/teams'))?.json()
      )?.data
      setNBATeams(teamList)
    }

    getNBATeams()
  }, [])

  return nbaTeams
}

const NBATeamList = () => {
  const nbaTeams = useNBATeams()

  return (
    <>
      {nbaTeams.map((team) => (
        <Text>{team.full_name}</Text>
      ))}
      {nbaLogos.map((logo) => (
        <Box bg='white'>
          <Image src={logo.teamLogo} />
        </Box>
      ))}
    </>
  )
}

export default NBATeamList
