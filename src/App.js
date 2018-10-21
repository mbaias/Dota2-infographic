import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Search from './components/Search';
import TeamList from './components/TeamsList';
import './styles/main.css';

class App extends Component {
  render() {
    return (
      <div className="container">
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
      </div>
    );
  }
}

export default App;
