import axios from 'axios';
import actions from './actionsConstants';
import endpoints from '../api/endpoints';

export const getPlayerProfile = accountId => async dispatch => {
  try {
    const { data: playerProfile } = await axios.get(
      `${endpoints.players}/${accountId}`,
    );

    dispatch(getPlayerProfileSuccess(playerProfile));
  } catch (error) {
    console.log(error);
  }
};

const getPlayerProfileSuccess = playerProfile => ({
  type: actions.getPlayer.profile,
  playerProfile,
});
