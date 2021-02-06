import * as React from 'react'
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react'
import {ColorModeSwitcher} from './ColorModeSwitcher'
import {Logo} from './Logo'
import NBATeamList from './components/nbaTeams'

export const App = () => (
  <ChakraProvider theme={theme}>
    <Grid minH='100vh' p={3}>
      <ColorModeSwitcher justifySelf='flex-end' />
      <NBATeamList />
    </Grid>
  </ChakraProvider>
)
