import * as React from 'react'
import {Team} from '../interfaces/interfaces'
import {Image, LinkBox} from '@chakra-ui/react'
import {Link} from '@reach/router'

import {MotionBox} from './motionComponents/motionComponents'

const NBATeam = ({
  team,
  setTeam,
}: {
  team: Team
  setTeam: React.Dispatch<React.SetStateAction<string>>
}) => {
  const {nickname: name, image} = team
  return (
    <LinkBox>
      <Link to='/teamInfo' state={{team}}>
        <MotionBox
          alignSelf='center'
          align='center'
          _hover={{cursor: 'pointer'}}
          p={['.3rem', 5]}
          onMouseEnter={() => setTeam(name)}
          onMouseLeave={() => setTeam('')}
        >
          <Image
            boxSize={['lg', '15rem']}
            w={[null, null, 'auto']}
            h={['auto', null]}
            objectFit='contain'
            src={image}
            alt={`${name} Logo`}
          />
        </MotionBox>
      </Link>
    </LinkBox>
  )
}

export default NBATeam
