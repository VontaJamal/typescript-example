import * as React from 'react'
import {Text, Box, Image, Stack, Flex, Heading} from '@chakra-ui/react'
import {RouteComponentProps, Link} from '@reach/router'
import {Team} from '../interfaces/interfaces'
import NBAPlayersList from './nbaPlayersList'
import {MotionBox, MotionSimpleGrid} from './motionComponents/motionComponents'

interface Props
  extends RouteComponentProps<{location: {state: {team: Team}}}> {}

const TeamInformation = (props: Props) => {
  const {
    teamId,
    image,
    fullName: name,
    shortName,
    leagues: {
      standard: {confName: conference, divName: division},
    },
  } = props?.location?.state.team!

  const textStyles: React.CSSProperties = {
    paddingBottom: 15,
    fontWeight: 'bold',
    fontSize: '20px',
    opacity: 0.9,
  }

  const headerStyles: React.CSSProperties = {
    paddingBottom: 15,
    fontWeight: 'bold',
    // fontSize: '20px',
  }

  console.log('team', props?.location?.state.team!)
  return (
    <MotionSimpleGrid
      columns={1}
      border='3px solid blue'
      rows={2}
      p={5}
      pt={0}
      h={'95vh'}
      templateRows='30vh'
    >
      <MotionBox>
        <Flex align='center' justify='center' h={'100%'}>
          <Image
            boxSize={['lg', '17rem']}
            w={[null, null, 'auto']}
            h={['auto', null]}
            objectFit='contain'
            src={image}
            alt={`${name} Logo`}
            pr={5}
          />
          <Stack
            align='center'
            direction={['row', null, null, 'column']}
            justify='space-evenly'
            h={'50%'}
          >
            <Heading style={headerStyles}>{name}</Heading>
            <Text style={textStyles}>{shortName}</Text>
            <Text style={textStyles}>{`${conference}ern Conference`}</Text>
            <Text style={textStyles}>{`${division} Division`}</Text>
          </Stack>
        </Flex>
      </MotionBox>
      <Link to='/'>Show Teams</Link>

      <NBAPlayersList teamId={teamId} />
    </MotionSimpleGrid>
  )
}

export default TeamInformation
