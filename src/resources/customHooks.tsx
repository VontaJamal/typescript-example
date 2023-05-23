import * as React from 'react';
import {Team, Player} from '../interfaces/interfaces';
import logos from '../resources/logos';

const {useState, useEffect} = React;
const API_KEY = process.env.REACT_APP_NBA_KEY!;

export function useTeam(teamId: number) {
  const [team, setTeam] = useState<Team>();

  useEffect(() => {
    const getTeam = async (teamId: number) => {
      const url = `https://api-nba-v1.p.rapidapi.com/teams/teamId/${teamId}`;
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key':
            '94f99aec42mshbfb92c0c502d539p1039a7jsn2ae87a62d991',
          'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com',
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        const getLogo = (nbaTeam: Team) => {
          const logo = logos.find(
            (logo) => logo.shortName === nbaTeam.shortName
          );
          nbaTeam.image = logo?.teamLogo;
        };
        getLogo(result.api.teams[0])
        setTeam(result.api.teams[0]);
      } catch (error) {
        console.error(error);
      }
    };

    getTeam(teamId);
  }, [teamId]);
  return team;
}

export function useNBATeams() {
  const [nbaTeams, setNBATeams] = useState<Team[]>(() => {
    const defaultTeams = window.localStorage.getItem('teams');
    if (defaultTeams) return JSON.parse(defaultTeams);
    return [];
  });

  useEffect(() => {
    if (nbaTeams.length > 0) return;
    const getLogo = (nbaTeam: Team) => {
      const logo = logos.find((logo) => logo.shortName === nbaTeam.shortName);
      nbaTeam.image = logo?.teamLogo;
    };

    const getTeams = async () => {
      const teamList: Team[] = (
        await (
          await fetch(
            'https://api-nba-v1.p.rapidapi.com/teams/league/standard',
            {
              headers: {
                'x-rapidapi-key': API_KEY,
                'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com',
              },
            }
          )
        ).json()
      ).api.teams.filter(
        (team: Team) => team.nbaFranchise === '1' && team.allStar === '0'
      );

      teamList.forEach((team) => getLogo(team));
      window.localStorage.setItem('teams', JSON.stringify(teamList));
      setNBATeams(teamList);
    };

    getTeams();
  }, [nbaTeams.length]);

  return nbaTeams;
}

export function useNBAPlayers(teamId: string) {
  const [nbaPlayers, setNBAPlayers] = useState<Player[]>(() => {
    const defaultPlayers = window.localStorage.getItem(`players${teamId}`);
    if (defaultPlayers) return JSON.parse(defaultPlayers);
    return [];
  });

  useEffect(() => {
    if (nbaPlayers.length > 0) return; //* Retrieved from local storage
    const getPlayers = async (teamId: string) => {
      const teamPlayers: Player[] = (
        await (
          await fetch(
            `https://api-nba-v1.p.rapidapi.com/players/teamId/${teamId}`,
            {
              headers: {
                'x-rapidapi-key': API_KEY,
                'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com',
              },
            }
          )
        ).json()
      ).api.players
        .filter(
          (player: Player) =>
            player?.leagues?.standard?.active === '1' && +player.yearsPro > 0
        )
        .sort((playerOne: Player, playerTwo: Player) => {
          const playerOneName = playerOne.lastName.toUpperCase();
          const playerTwoName = playerTwo.lastName.toUpperCase();

          if (playerOneName < playerTwoName) {
            return -1;
          }
          if (playerOneName > playerTwoName) {
            return 1;
          }

          return 0;
        });

      window.localStorage.setItem(
        `players${teamId}`,
        JSON.stringify(teamPlayers)
      );
      setNBAPlayers(teamPlayers);
    };

    getPlayers(teamId);
  }, [teamId, nbaPlayers.length]);
  return nbaPlayers;
}
