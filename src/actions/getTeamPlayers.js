import axios from 'axios';
import actions from './actionsConstants';
import endpoints from '../api/endpoints';

const checkForCurrentMember = teamPlayers => {
  let currentPlayers = [];
  let formerPlayers = [];

  teamPlayers.map(teamPlayer => {
    teamPlayer.is_current_team_member === true
      ? currentPlayers.push(teamPlayer)
      : formerPlayers.push(teamPlayer);
  });

  return {
    currentPlayers,
    formerPlayers,
  };
};

export const getTeamPlayers = teamId => async dispatch => {
  try {
    const { data: teamPlayers } = await axios.get(
      `${endpoints.teams}/${teamId}/players`,
    );
    const { currentPlayers, formerPlayers } = checkForCurrentMember(
      teamPlayers,
    );
    dispatch(getTeamPlayersSuccess(currentPlayers, formerPlayers));
  } catch (error) {
    console.log(error);
  }
};

const getTeamPlayersSuccess = (currentPlayers, formerPlayers) => ({
  type: actions.getTeamPlayers,
  currentPlayers,
  formerPlayers,
});
