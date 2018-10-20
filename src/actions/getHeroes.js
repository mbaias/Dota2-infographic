import axios from 'axios';
import actions from './actionsConstants';
import endpoints from '../api/endpoints';

export const getHeroes = () => async dispatch => {
  try {
    const { data: heroes } = await axios.get(`${endpoints.heroes}`);
    let heroesTemp = {};
    heroes.map(hero => {
      heroesTemp[hero.id] = {
        ...hero,
        icon: `http://cdn.dota2.com/${hero.icon}`,
        img: `http://cdn.dota2.com/${hero.img}`,
      };
    });
    dispatch(getHeroesSuccess(heroesTemp));
  } catch (error) {
    console.log(error);
  }
};

const getHeroesSuccess = heroes => ({
  type: actions.getHeroes,
  heroes,
});
