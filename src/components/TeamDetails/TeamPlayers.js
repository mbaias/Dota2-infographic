import React from 'react';
import PropTypes from 'prop-types';
import proPlayerImages from '../proPlayerImages';

const TeamPlayers = ({ players }) => {
  const getPlayerImageUrl = accountId => {
    if (proPlayerImages[accountId]) {
      return `/assets/images/players/${accountId}.png`;
    }
  };
  return (
    <>
      {players.map(player => (
        <div key={player.account_id} className="team-player">
          <div className="team-player__info">
            <img src={getPlayerImageUrl(player.account_id)} alt="" />
          </div>
          <p className="team-player__name">{player.name}</p>
          <p className="team-player-statistics">Games: {player.games_played}</p>
          <p className="team-player-statistics">Wins: {player.wins}</p>
        </div>
      ))}
    </>
  );
};

TeamPlayers.propTypes = {
  players: PropTypes.array.isRequired,
};

export default TeamPlayers;
