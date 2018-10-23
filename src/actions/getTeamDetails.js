import axios from 'axios';
import endpoints from '../api/endpoints';
import actions from './actionsConstants';

export const getTeamDetails = teamId => async dispatch => {
  try {
    const { data: team } = await axios.get(`${endpoints.teams}/${teamId}`);
    dispatch(getTeamDetailsSuccess(team));
  } catch (error) {
    console.log(error);
  }
};

const getTeamDetailsSuccess = team => ({
  type: actions.getTeamDetails,
  team,
});
