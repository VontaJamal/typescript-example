import * as React from 'react'
import {
  ChakraProvider,
  Box,
  Grid,
  Heading,
  extendTheme,
  Text,
  Stack,
} from '@chakra-ui/react'
import {ColorModeSwitcher} from './ColorModeSwitcher'
import NBATeamList from './components/nba'
import './app.css'
import Fonts from './resources/fonts'

const theme = extendTheme({
  fonts: {
    heading: 'Black Ops One',
  },
})

const {useState} = React

export const App = () => {
  const [team, setTeam] = useState<string>('')
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Box className='gradientBox' />
      <Grid p={3} pt={0} pr={0} pl={0}>
        <ColorModeSwitcher justifySelf='flex-end' />
        <Heading
          as='h1'
          fontSize={['4xl', null, '6xl']}
          textAlign='center'
          p={5}
          w='100%'
          borderBottomWidth={2}
          borderBottomColor='crimson'
          borderStyle='solid'
          pl={0}
          color='gray.700'
        >
          <Stack
            align='center'
            justify='center'
            direction={['column', null, null, 'row']}
          >
            <Text>Who Plays For Them?!</Text>
            <Text>{`${team ? `-${team}` : ''}`}</Text>
          </Stack>
        </Heading>
        <NBATeamList setTeam={setTeam} />
      </Grid>
    </ChakraProvider>
  )
}
