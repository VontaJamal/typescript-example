import React, {FunctionComponent} from 'react'
import {Text} from '@chakra-ui/react'

import {Box} from '@chakra-ui/react'

import {useNBAPlayers} from '../resources/customHooks'

type NBAPlayersListProps = {
  teamId: string
}

const NBAPlayersList: FunctionComponent<NBAPlayersListProps> = ({teamId}) => {
  const playersList = useNBAPlayers(teamId)

  const teamPlayers = playersList.map((player) => {
    const {firstName: first, lastName: last} = player
    const fullName = `${first} ${last}`
    return <Text>{fullName}</Text>
  })

  return (
    <Box>
      <Text>Show Players</Text>
      {teamPlayers}
    </Box>
  )
}

export default NBAPlayersList
