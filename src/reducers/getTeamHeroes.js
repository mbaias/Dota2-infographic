import actions from '../actions/actionsConstants';

const initialState = {
  error: null,
  teamHeroes: [],
};

export const getTeamHeroes = (state = initialState, action) => {
  switch (action.type) {
    case actions.getTeam.getTeamHeroes:
      return {
        ...state,
        teamHeroes: action.teamHeroes,
      };
    default:
      return state;
  }
};
