import actions from '../actions/actionsConstants';

const initialState = {
  error: null,
  allHeroes: {},
};

export const getHeroes = (state = initialState, action) => {
  switch (action.type) {
    case actions.getHeroes:
      return {
        ...state,
        allHeroes: action.heroes,
      };
    default:
      return state;
  }
};
