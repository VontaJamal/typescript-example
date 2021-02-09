import * as React from 'react'
import {Grid, Heading, Text, Stack, Box} from '@chakra-ui/react'
import NBATeamList from './nba'
import {RouteComponentProps} from '@reach/router'

const {useState, useEffect} = React

const Main = (props: RouteComponentProps) => {
  const [team, setTeam] = useState<string>('')

  useEffect(() => {
    document.title = team ? `Who on the ${team}?!` : 'Who Plays For Them?!'
  }, [team])

  return (
    <React.Fragment>
      <Box className='gradientBox' />
      <Grid p={3} pt={0} pr={0} pl={0}>
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
    </React.Fragment>
  )
}

export default Main
