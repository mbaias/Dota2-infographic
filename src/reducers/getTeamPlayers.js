import actions from '../actions/actionsConstants';

const initialState = {
  error: null,
  currentPlayers: [],
  formerPlayers: [],
};

export const getTeamPlayers = (state = initialState, action) => {
  switch (action.type) {
    case actions.getTeam.getTeamPlayers:
      return {
        currentPlayers: [...action.currentPlayers],
        formerPlayers: [...action.formerPlayers],
      };
    default:
      return state;
  }
};
