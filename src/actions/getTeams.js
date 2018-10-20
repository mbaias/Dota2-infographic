import axios from 'axios';
import actions from './actionsConstants';
import endpoints from '../api/endpoints';

const findTeamByName = (searchItem, teams) => {
  let searchedTeam = [];
  teams.map(team => {
    if (team.name.toLowerCase().includes(searchItem.toLowerCase())) {
      searchedTeam.push(team);
    }
  });

  return searchedTeam;
};

export const getTeams = searchItem => async dispatch => {
  try {
    const { data: teams } = await axios.get(endpoints.teams);
    let searchedTeam = findTeamByName(searchItem, teams);
    dispatch(getTeamsSuccess(searchedTeam));
  } catch (error) {
    console.log(error);
  }
};

const getTeamsSuccess = teams => ({
  type: actions.getTeams,
  teams,
});
