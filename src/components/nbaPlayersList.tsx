import React from 'react'

import {useNBAPlayers} from '../resources/customHooks'
import {MotionSimpleGrid} from './motionComponents/motionComponents'
import NBAPlayer from './nbaPlayer'

const NBAPlayersList = ({teamId}: {teamId: string}) => {
  const playersList = useNBAPlayers(teamId)

  const teamPlayers = playersList.map((player) => {
    return <NBAPlayer player={player} />
  })

  return (
    <MotionSimpleGrid
      columns={[1, null, null, 2, 3, 4]}
      gap={5}
      p={5}
      backgroundColor='gray.100'
      justifyItems='center'
    >
      {teamPlayers}
    </MotionSimpleGrid>
  )
}

export default NBAPlayersList
