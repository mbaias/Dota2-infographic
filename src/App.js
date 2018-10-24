import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import PropTypes from 'prop-types';
import { Switch, Route, withRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Search from './components/Search';
import TeamList from './components/TeamsList';
import TeamDetails from './components/TeamDetails';
import './styles/main.css';

class App extends Component {
  render() {
    // const location = this.props.location !== null ? this.props.location : {};
    return (
      <div className="container">
        <Navbar />
        <Switch location={this.props.location}>
          <Route
            exact
            path="/"
            render={() => (
              <>
                <Search />
                <TeamList />
              </>
            )}
          />
          <Route
            key={this.props.location.pathname}
            exact
            path="/team/:teamId"
            component={TeamDetails}
          />
          <Route exact path="/teams" component={TeamList} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  location: PropTypes.shape({
    key: PropTypes.string,
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default withRouter(hot(module)(App));
