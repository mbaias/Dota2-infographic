import actions from '../actions/actionsConstants';

const initialState = {
  error: null,
  team: {},
};

export const getTeamDetails = (state = initialState, action) => {
  switch (action.type) {
    case actions.getTeamDetails:
      return {
        ...state,
        team: action.team,
      };
    default:
      return state;
  }
};
