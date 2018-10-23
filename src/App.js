import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import PropTypes from 'prop-types';
import { Switch, Route, withRouter } from 'react-router-dom';
import Search from './components/Search';
import TeamList from './components/TeamsList';
import TeamDetails from './components/TeamDetails';
import './styles/main.css';

class App extends Component {
  render() {
    return (
      <div className="container">
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
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  location: PropTypes.shape({
    key: PropTypes.string.isRequired,
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default withRouter(hot(module)(App));
