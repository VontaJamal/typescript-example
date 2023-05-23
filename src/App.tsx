import * as React from 'react'
import {ChakraProvider, extendTheme} from '@chakra-ui/react'

import './app.css'
import Fonts from './resources/fonts'
import {Router} from '@reach/router'
import TeamInfo from './components/teamInfo'
import Main from './components/main'

const theme = extendTheme({
  fonts: {
    heading: 'Black Ops One',
    body: 'Roboto',
  },
})

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />

      <Router>
        <Main path='/' />
        <TeamInfo path='/team/:teamId' />
      </Router>
    </ChakraProvider>
  )
}
