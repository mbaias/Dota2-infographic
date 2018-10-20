import actions from '../actions/actionsConstants';

const initialState = {
  teams: [],
};

export function getTeams(state = initialState, action) {
  switch (action.type) {
    case actions.getTeams:
      return {
        teams: [...action.teams],
      };
    default:
      return state;
  }
}
