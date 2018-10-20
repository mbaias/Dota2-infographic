import axios from 'axios';
import actions from './actionsConstants';
import endpoints from '../api/endpoints';

export const getPlayerHeroes = accountId => async dispatch => {
  try {
    const { data: playerHeroes } = await axios.get(
      `${endpoints.players}/${accountId}/heroes`,
    );
    dispatch(getPlayerHeroesSuccess(playerHeroes));
  } catch (error) {
    console.log(error);
  }
};

const getPlayerHeroesSuccess = playerHeroes => ({
  type: actions.getPlayer.heroes,
  playerHeroes,
});
