import * as React from 'react'
import {Text, Image, Stack, Flex, Heading} from '@chakra-ui/react'
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
    fontWeight: 'bold',
    fontSize: '25px',
    opacity: 0.9,
  }

  const headerStyles: React.CSSProperties = {
    fontWeight: 'bold',
    fontSize: '45px',
  }

  return (
    <MotionSimpleGrid
      columns={1}
      rows={2}
      pb={5}
      templateRows={['auto', null, null, '30vh']}
    >
      <MotionBox
        initial={{y: -500}}
        animate={{y: 0}}
        transition={{ease: 'easeOut', duration: 0.8}}
      >
        <Flex
          align='center'
          justify='center'
          mt={5}
          direction={['column', null, null, 'row']}
          pb={5}
        >
          <Link to='/'>
            <Image
              boxSize={['lg', '17rem']}
              w={[null, null, 'auto']}
              h={['auto', null]}
              objectFit='contain'
              src={image}
              alt={`${name} Logo`}
              pr={5}
            />
          </Link>
          <Stack
            align='center'
            direction={['column']}
            justify='space-evenly'
            h={'50%'}
          >
            <Heading
              pb={[0, null, null, 15]}
              style={headerStyles}
              mt={['1rem', null]}
            >
              {name}
            </Heading>
            <Text pb={[0, null, null, 15]} style={textStyles}>
              {shortName}
            </Text>
            <Text
              pb={[0, null, null, 15]}
              style={textStyles}
            >{`${conference}ern Conference`}</Text>
            <Text
              pb={[0, null, null, 15]}
              style={textStyles}
            >{`${division} Division`}</Text>
          </Stack>
        </Flex>
      </MotionBox>

      <NBAPlayersList teamId={teamId} />
    </MotionSimpleGrid>
  )
}

export default TeamInformation
