import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAllTeams, clearTeamList } from '../../actions/getTeams';
import Team from './Team';
import Pagination from '../common/Pagination';
import '../../styles/team_list.css';

class Teams extends Component {
  constructor(props) {
    super(props);

    this.state = {
      teamsPerPage: [],
    };
  }

  componentDidMount() {
    const { location, getAllTeams, clearTeamList, searchedTeams } = this.props;
    if (searchedTeams.length >= 1) {
      clearTeamList();
    }
    if (location.pathname === '/teams') {
      getAllTeams();
    }
  }

  onChangePage = teamsPerPage => {
    this.setState({
      teamsPerPage,
    });
  };

  renderHeader = () => {
    if (this.props.location.pathname === '/teams') {
      return (
        <h2 className="table-header">
          <i className="fas fa-play table-header__icon" />
          Team Matches
        </h2>
      );
    }
  };

  render() {
    const { teamsPerPage } = this.state;
    const { allTeams, searchedTeams, location } = this.props;
    const teams = location.pathname === '/teams' ? allTeams : searchedTeams;
    console.log(allTeams, searchedTeams);

    return (
      <React.Fragment>
        {this.renderHeader()}
        {teams.length > 0 && (
          <div className="teams-container">
            {teamsPerPage.map(team => (
              <Team key={team.team_id} team={team} />
            ))}
          </div>
        )}
        <Pagination
          items={teams}
          onChangePage={this.onChangePage}
          pageSize={10}
        />
      </React.Fragment>
    );
  }
}

Teams.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  allTeams: PropTypes.array.isRequired,
  searchedTeams: PropTypes.array.isRequired,
  getAllTeams: PropTypes.func.isRequired,
  clearTeamList: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  allTeams: state.getTeams.allTeams,
  searchedTeams: state.getTeams.searchedTeams,
});

const mapDispatchToProps = dispatch => ({
  getAllTeams: () => dispatch(getAllTeams()),
  clearTeamList: () => dispatch(clearTeamList()),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Teams),
);
