import axios from 'axios';
import actions from './actionsConstants';
import endpoints from '../api/endpoints';

export const getTeamMatches = teamId => async dispatch => {
  try {
    const { data: teamMatches } = await axios.get(
      `${endpoints.teams}/${teamId}/matches`,
    );
    dispatch(getTeamMatchesSuccess(teamMatches));
  } catch (error) {
    console.log(error);
  }
};

const getTeamMatchesSuccess = matches => ({
  type: actions.getTeam.getTeamMatches,
  matches,
});
