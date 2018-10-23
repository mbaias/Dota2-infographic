import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const TeamMatches = ({ matches }) => {
  console.log(matches);

  const calculateMatchDuration = time => {
    const min = Math.floor(time / 60);
    const sec = time % 60 < 10 ? `0${time % 60}` : time % 60;
    const duration = `${min} : ${sec}`;
    return duration;
  };

  return (
    <>
      <h2 className="team-matches-header">
        <i className="fas fa-play team-matches-header__icon" />
        Team Matches
      </h2>
      <table className="table">
        <thead className="table__header">
          <tr>
            <th className="table__heading">ID</th>
            <th className="table__heading">Duration</th>
            <th className="table__heading">Result</th>
            <th className="table__heading">Opponent</th>
          </tr>
        </thead>
        <tbody className="table__body">
          {matches.map(match => (
            <tr className="table__row" key={match.match_id}>
              <td className="table__item table__item--small">
                <p>{match.match_id}</p>
                <p className="table__item__league-name"> {match.league_name}</p>
              </td>
              <td className="table__item table__item--small">
                {calculateMatchDuration(match.duration)}
              </td>
              {(match.radiant && match.radiant_win) ||
              (!match.radiant && !match.radiant_win) ? (
                <td className="table__item table__item--won">Won Match</td>
              ) : (
                <td className="table__item table__item--lost">Lost Match</td>
              )}
              <td className="table__item">
                <Link
                  to={{
                    pathname: `/team/${match.opposing_team_id}`,
                    state: { teamId: match.opposing_team_id },
                  }}
                  className="table__link"
                >
                  <img
                    className="table__image"
                    src={match.opposing_team_logo}
                    alt=""
                  />
                  <span>
                    {match.opposing_team_name
                      ? match.opposing_team_name
                      : 'Unknown'}
                  </span>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

TeamMatches.propTypes = {
  matches: PropTypes.array.isRequired,
};

export default TeamMatches;
