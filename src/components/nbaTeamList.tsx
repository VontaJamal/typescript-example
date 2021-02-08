import * as React from 'react'
import {Team} from '../interfaces/interfaces'
import {Image} from '@chakra-ui/react'

import {MotionBox} from './motionComponents/motionComponents'

const NBATeam = ({
  team,
  setTeam,
}: {
  team: Team
  setTeam: React.Dispatch<React.SetStateAction<string>>
}) => {
  const {full_name: name, image} = team
  return (
    <MotionBox
      alignSelf='center'
      align='center'
      _hover={{cursor: 'pointer'}}
      p={['.3rem', 5]}
      onMouseEnter={() => setTeam(team.name)}
      onMouseLeave={() => setTeam('')}
    >
      <Image
        boxSize={['lg', '15rem']}
        w={[null, null, 'auto']}
        h={['auto', null]}
        // h='auto'
        objectFit='contain'
        src={image}
        alt={`${name} Logo`}
      />
    </MotionBox>
  )
}

export default NBATeam
