import axios from 'axios';
import endpoints from '../api/endpoints';
import actions from './actionsConstants';

export const getTeamHeroes = teamId => async dispatch => {
  try {
    const { data: teamHeroes } = await axios.get(
      `${endpoints.teams}/${teamId}/heroes`,
    );
    // teamHeroes.map(hero => hero.hero_id)
    dispatch(getTeamHeroesSuccess(teamHeroes));
  } catch (error) {
    console.log(error);
  }
};

const getTeamHeroesSuccess = teamHeroes => ({
  type: actions.getTeam.getTeamHeroes,
  teamHeroes,
});
