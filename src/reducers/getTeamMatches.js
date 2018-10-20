import actions from '../actions/actionsConstants';

const initialState = {
  error: null,
  matches: [],
};

export const getTeamMatches = (state = initialState, action) => {
  switch (action.type) {
    case actions.getTeamMatches:
      return {
        ...state,
        matches: [...action.matches],
      };
    default:
      return state;
  }
};
