import React, {FunctionComponent} from 'react'
import {Text} from '@chakra-ui/react'

import {Heading, Box} from '@chakra-ui/react'

import {useNBAPlayers} from '../resources/customHooks'
import {MotionBox, MotionSimpleGrid} from './motionComponents/motionComponents'

type NBAPlayersListProps = {
  teamId: string
}

const textStyles: React.CSSProperties = {
  fontWeight: 'bold',
  fontSize: '20px',
  opacity: 0.9,
}

const NBAPlayersList: FunctionComponent<NBAPlayersListProps> = ({teamId}) => {
  const playersList = useNBAPlayers(teamId)

  const teamPlayers = playersList.map((player) => {
    const {
      firstName: first,
      lastName: last,
      leagues: {
        standard: {jersey},
      },
      yearsPro,
      country,
      startNba,
    } = player
    const fullName = `${first} ${last}`
    return (
      <MotionBox
        as='article'
        maxW='sm'
        p='5'
        borderWidth='2px'
        rounded='md'
        boxShadow='lg'
        whileHover={{scale: 1.1}}
        align='center'
        backgroundColor='#fff'
        minWidth={['325px', null, null, '385px']}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{
          opacity: {duration: 1, ease: 'easeIn'},
          scale: {duration: 0.2},
        }}
      >
        <Heading size='lg' my='2' align='center' color='crimson'>
          {fullName}
        </Heading>
        <Text style={textStyles}>{`Jersey Number ${jersey}`}</Text>
        <Text style={textStyles}>{`${yearsPro} Years Pro`}</Text>
        <Text style={textStyles}>{`From ${country}`}</Text>
        <Text style={textStyles}>{`Drafted ${startNba}`}</Text>
      </MotionBox>
    )
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
