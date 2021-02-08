import * as React from 'react'
import {ChakraProvider, Box, extendTheme} from '@chakra-ui/react'

import './app.css'
import Fonts from './resources/fonts'
import {Router} from '@reach/router'
import NBAPlayers from './components/nbaPlayersList'
import Main from './components/main'

const theme = extendTheme({
  fonts: {
    heading: 'Black Ops One',
  },
})

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Box className='gradientBox' />
      <Router>
        <Main path='/' />
        <NBAPlayers path='/players' />
      </Router>
    </ChakraProvider>
  )
}
