import actions from '../actions/actionsConstants';

const initialState = {
  error: null,
  allTeams: [],
  searchedTeams: [],
};

export function getTeams(state = initialState, action) {
  switch (action.type) {
    case actions.getSearchedTeams:
      return {
        ...state,
        searchedTeams: action.searchedTeams,
      };
    case actions.getAllTeams:
      return {
        ...state,
        allTeams: action.teams,
      };
    case actions.clearTeamList:
      return {
        ...state,
        searchedTeams: [],
      };
    default:
      return state;
  }
}
