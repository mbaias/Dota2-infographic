import { combineReducers } from 'redux';
import { getTeams } from './getTeams';
import { getTeamPlayers } from './getTeamPlayers';
import { getTeamMatches } from './getTeamMatches';
import { getPlayer } from './getPlayer';
import { getHeroes } from './getHeroes';

export default combineReducers({
  getTeams,
  getTeamPlayers,
  getTeamMatches,
  getPlayer,
  getHeroes,
});
