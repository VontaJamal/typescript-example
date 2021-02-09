import React from 'react'
import {Text, Heading} from '@chakra-ui/react'
import {Player} from '../interfaces/interfaces'
import {MotionBox} from './motionComponents/motionComponents'

const NBAPlayer = ({player}: {player: Player}) => {
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

  const textStyles: React.CSSProperties = {
    fontWeight: 'bold',
    fontSize: '20px',
    opacity: 0.9,
  }

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
      minWidth={['85%', null, null, '385px']}
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
}

export default NBAPlayer
