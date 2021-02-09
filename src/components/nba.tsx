import * as React from 'react'

import {useNBATeams} from '../resources/customHooks'
import NBATeam from './nbaTeamList'
import {MotionSimpleGrid} from './motionComponents/motionComponents'

const NBATeamList = ({
  setTeam,
}: {
  setTeam: React.Dispatch<React.SetStateAction<string>>
}) => {
  const nbaTeams = useNBATeams()

  const displayTeams = nbaTeams.map((team) => (
    <NBATeam key={team.teamId} team={team} setTeam={setTeam} />
  ))

  return (
    <MotionSimpleGrid
      columns={[2, null, 3, 4, 5]}
      gap={5}
      p={5}
      className='teamGrid'
      overflowY='scroll'
      h={['70vh', '85vh']}
    >
      {displayTeams}
    </MotionSimpleGrid>
  )
}

export default NBATeamList
