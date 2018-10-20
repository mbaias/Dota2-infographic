import axios from 'axios';
import actions from './actionsConstants';
import endpoints from '../api/endpoints';

export const getPlayerRecentMatches = accountId => async dispatch => {
  try {
    const { data: playerRecentMatches } = await axios.get(
      `${endpoints.players}/${accountId}/recentMatches`,
    );

    dispatch(getRecentMatchesSuccess(playerRecentMatches));
  } catch (error) {
    console.log(error);
  }
};

const getRecentMatchesSuccess = playerRecentMatches => ({
  type: actions.getPlayer.recentMatches,
  playerRecentMatches,
});
