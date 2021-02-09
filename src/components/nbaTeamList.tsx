import * as React from 'react'
import {Team} from '../interfaces/interfaces'
import {Image, LinkBox, Flex} from '@chakra-ui/react'
import {Link} from '@reach/router'

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
        <Flex
          placeContent='center'
          _hover={{cursor: 'pointer'}}
          pl={[3, null, 5]}
          pr={[3, null, 5]}
          mb={[3, null]}
          onMouseEnter={() => setTeam(name)}
          onMouseLeave={() => setTeam('')}
          h={'100%'}
        >
          <Image
            boxSize={['2xs', null, '15rem']}
            w={[null, null, 'auto']}
            objectFit='contain'
            src={image}
            alt={`${name} Logo`}
          />
        </Flex>
      </Link>
    </LinkBox>
  )
}

export default NBATeam
