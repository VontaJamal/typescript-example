import * as React from 'react'
import {Text} from '@chakra-ui/react'
import {RouteComponentProps, Link} from '@reach/router'
import {Box} from '@chakra-ui/react'

const NBAPlayers = (props: RouteComponentProps) => (
  <Box>
    <Text>Show Players</Text>
    <Link to='/'>Show Teams</Link>
  </Box>
)

export default NBAPlayers
