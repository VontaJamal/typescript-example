import * as React from 'react'

import {useNBATeams} from '../resources/customHooks'
import NBATeam from './nbaTeamList'
import {MotionSimpleGrid} from './motionComponents/motionComponents'
import {isMobile} from 'react-device-detect'

const NBATeamList = ({
  setTeam,
}: {
  setTeam: React.Dispatch<React.SetStateAction<string>>
}) => {
  const nbaTeams = useNBATeams()

  React.useEffect(() => {
    document.body.classList.add('stopScrolling')
    return () => document.body.classList.remove('stopScrolling')
  })

  const displayTeams = nbaTeams.map((team) => (
    <NBATeam key={team.teamId} team={team} setTeam={setTeam} />
  ))

  return (
    <MotionSimpleGrid
      columns={[2, null, 3, 4, 5]}
      gap={5}
      p={5}
      className={`${isMobile ? '' : 'teamGrid'}`}
      overflowY='scroll'
      h={['75vh', '90vh']}
    >
      {displayTeams}
    </MotionSimpleGrid>
  )
}

export default NBATeamList
