import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Team = ({ team }) => (
  <Link
    to={{
      pathname: `team/${team.team_id}`,
      state: { teamId: team.team_id },
    }}
    key={team.team_id}
    className="team-link"
  >
    <div className="team-info">
      <div className="team-logo">
        <img src={team.logo_url} alt={team.name} className="team-logo__image" />
      </div>
      <p className="team__name">{team.name}</p>
    </div>
    <div className="team-statistics">
      <div className="team-statistics__body">
        <p className="team-statistics__body__name">Rating</p>
        <p className="team-statistics__body__data">{team.rating}</p>
      </div>
      <span className="divider" />
      <div className="team-statistics__body">
        <p className="team-statistics__body__name">Wins</p>
        <p className="team-statistics__body__data">{team.wins}</p>
      </div>
      <span className="divider" />
      <div className="team-statistics__body">
        <p className="team-statistics__body__name">Losses</p>
        <p className="team-statistics__body__data">{team.losses}</p>
      </div>
    </div>
  </Link>
);

Team.propTypes = {
  team: PropTypes.object.isRequired,
};

export default Team;
