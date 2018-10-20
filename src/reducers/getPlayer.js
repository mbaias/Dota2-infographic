import actions from '../actions/actionsConstants';

const initialState = {
  error: null,
  playerInfo: {
    profile: {},
    recentMatches: [],
    heroes: [],
  },
};

export const getPlayer = (state = initialState, action) => {
  switch (action.type) {
    case actions.getPlayer.profile:
      return {
        ...state,
        playerInfo: {
          ...state.playerInfo,
          profile: action.playerProfile.profile,
        },
      };
    case actions.getPlayer.recentMatches:
      return {
        ...state,
        playerInfo: {
          ...state.playerInfo,
          recentMatches: action.playerRecentMatches,
        },
      };
    case actions.getPlayer.heroes:
      return {
        ...state,
        playerInfo: {
          ...state.playerInfo,
          heroes: action.playerHeroes,
        },
      };
    default:
      return state;
  }
};
