import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Team from './Team';
import '../../styles/team_list.css';

class Teams extends Component {
  render() {
    const { teams } = this.props;
    return (
      <React.Fragment>
        {teams.length > 0 && (
          <div className="teams-container">
            {teams.map(team => (
              <Team key={team.team_id} team={team} />
            ))}
          </div>
        )}
      </React.Fragment>
    );
  }
}

Teams.propTypes = {
  teams: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  teams: state.getTeams.teams,
});

export default connect(mapStateToProps)(Teams);
