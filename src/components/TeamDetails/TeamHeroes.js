import React from 'react';
import PropTypes from 'prop-types';

const TeamHeroes = ({ allHeroes, teamHeroes }) => {
  console.log(allHeroes, teamHeroes);
  return (
    <>
      <table className="table">
        <thead className="table__header">
          <tr>
            <th className="table__heading wide">Hero</th>
            <th className="table__heading table__heading--smallest">Games</th>
            <th className="table__heading table__heading--smallest">Wins</th>
          </tr>
        </thead>
        <tbody className="table__body">
          {teamHeroes.length > 1 &&
            Object.keys(allHeroes).length > 1 &&
            teamHeroes.map(hero => (
              <tr className="table__row" key={hero.hero_id}>
                <td className="table__item wide">
                  <div className="table__item__body">
                    <div className="table__img-container">
                      <img
                        className="table__image"
                        src={allHeroes[hero.hero_id].img}
                        alt=""
                      />
                    </div>
                    <span className="table__item__text">
                      {allHeroes[hero.hero_id].localized_name}
                    </span>
                  </div>
                </td>
                <td className="table__item table__item--small">
                  {hero.games_played}
                </td>
                <td className="table__item table__item--small">{hero.wins}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

TeamHeroes.propTypes = {
  allHeroes: PropTypes.object.isRequired,
  teamHeroes: PropTypes.array.isRequired,
};

export default TeamHeroes;
