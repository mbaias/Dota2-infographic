import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTeamMatches } from '../../actions/getTeamMatches';
import { getTeamPlayers } from '../../actions/getTeamPlayers';
import { getTeamDetails } from '../../actions/getTeamDetails';
import { getTeamHeroes } from '../../actions/getTeamHeroes';
import { getHeroes } from '../../actions/getHeroes';
import Pagination from '../common/Pagination';
import TeamMatches from './TeamMatches';
import TeamPlayers from './TeamPlayers';
import TeamHeroes from './TeamHeroes';
import '../../styles/team_details.css';

class TeamDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      matchesPerPage: [],
      heroesPerPage: [],
    };
  }

  componentDidMount() {
    const {
      getTeamPlayers,
      getTeamMatches,
      getTeamDetails,
      getTeamHeroes,
      getHeroes,
      location,
    } = this.props;
    getTeamDetails(location.state.teamId);
    getTeamPlayers(location.state.teamId);
    getTeamMatches(location.state.teamId);
    getTeamHeroes(location.state.teamId);
    getHeroes();
  }

  onChangeMatchesPage = matchesPerPage => {
    this.setState({
      matchesPerPage,
    });
  };

  onChangeHeroesPage = heroesPerPage => {
    this.setState({
      heroesPerPage,
    });
  };

  render() {
    const { matchesPerPage, heroesPerPage } = this.state;
    const { matches, teamPlayers, team, teamHeroes, allHeroes } = this.props;
    return (
      <main className="team-details">
        <section className="team-details-info-container">
          <div className="team-details-info">
            <img
              className="team-details-info__logo"
              src={team.logo_url}
              alt=""
            />
            <div className="team-statistics">
              <div className="team-statistics__body">
                <p className="team-statistics__body__name">Rating</p>
                <p className="team-statistics__body__data">{team.rating}</p>
              </div>
              <div className="team-statistics__body">
                <p className="team-statistics__body__name">Wins</p>
                <p className="team-statistics__body__data">{team.wins}</p>
              </div>
              <div className="team-statistics__body">
                <p className="team-statistics__body__name">Losses</p>
                <p className="team-statistics__body__data">{team.losses}</p>
              </div>
            </div>
          </div>
        </section>
        <section className="team-players-container">
          <TeamPlayers players={teamPlayers} />
        </section>
        <section className="team-matches-container">
          <h2 className="team-matches-header">
            <i className="fas fa-play team-matches-header__icon" />
            Team Matches
          </h2>
          <TeamMatches matches={matchesPerPage} />
          <Pagination
            items={matches}
            onChangePage={this.onChangeMatchesPage}
            pageSize={15}
          />
        </section>
        <section className="team-heroes-container">
          <h2 className="team-matches-header">
            <i className="fas fa-play team-matches-header__icon" />
            Team Heroes
          </h2>
          <TeamHeroes teamHeroes={heroesPerPage} allHeroes={allHeroes} />
          <Pagination
            items={teamHeroes}
            onChangePage={this.onChangeHeroesPage}
            pageSize={10}
          />
        </section>
      </main>
    );
  }
}

TeamDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      teamId: PropTypes.number.isRequired,
    }),
  }).isRequired,
  team: PropTypes.object.isRequired,
  teamPlayers: PropTypes.array.isRequired,
  matches: PropTypes.array.isRequired,
  teamHeroes: PropTypes.array.isRequired,
  allHeroes: PropTypes.object.isRequired,
  getTeamMatches: PropTypes.func.isRequired,
  getTeamPlayers: PropTypes.func.isRequired,
  getTeamDetails: PropTypes.func.isRequired,
  getTeamHeroes: PropTypes.func.isRequired,
  getHeroes: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  teamPlayers: state.getTeamPlayers.currentPlayers,
  matches: state.getTeamMatches.matches,
  team: state.getTeamDetails.team,
  teamHeroes: state.getTeamHeroes.teamHeroes,
  allHeroes: state.getHeroes.allHeroes,
});

const mapDispatchToProps = dispatch => ({
  getTeamPlayers: teamId => dispatch(getTeamPlayers(teamId)),
  getTeamMatches: teamId => dispatch(getTeamMatches(teamId)),
  getTeamDetails: teamId => dispatch(getTeamDetails(teamId)),
  getTeamHeroes: teamId => dispatch(getTeamHeroes(teamId)),
  getHeroes: () => dispatch(getHeroes()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TeamDetails);
