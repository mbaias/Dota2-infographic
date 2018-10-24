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

export const getSearchedTeams = searchItem => async dispatch => {
  try {
    const { data: teams } = await axios.get(endpoints.teams);
    let searchedTeam = findTeamByName(searchItem, teams);
    dispatch(getSearchedTeamsSuccess(searchedTeam));
  } catch (error) {
    console.log(error);
  }
};

export const getAllTeams = () => async dispatch => {
  try {
    const { data: teams } = await axios.get(endpoints.teams);
    dispatch(getAllTeamsSuccess(teams));
  } catch (error) {
    console.log(error);
  }
};

const getSearchedTeamsSuccess = searchedTeams => ({
  type: actions.getSearchedTeams,
  searchedTeams,
});

const getAllTeamsSuccess = teams => ({
  type: actions.getAllTeams,
  teams,
});

export const clearTeamList = () => ({
  type: actions.clearTeamList,
});
