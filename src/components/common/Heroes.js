import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pagination from './Pagination';

class Heroes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      heroesPerPage: [],
    };
  }

  onChangePage = heroesPerPage => {
    this.setState({
      heroesPerPage,
    });
  };

  render() {
    const { playedHeroes, allHeroes } = this.props;
    const { heroesPerPage } = this.state;
    return (
      <div>
        <h1>Hello</h1>
        {playedHeroes.length > 1 &&
          Object.keys(allHeroes).length > 1 &&
          heroesPerPage.map(hero => {
            let id = parseInt(hero.hero_id, 10);
            return (
              <React.Fragment key={hero.hero_id}>
                <p>{allHeroes[id].localized_name}</p>
                <img src={allHeroes[id].img} alt="" />
              </React.Fragment>
            );
          })}
        <Pagination items={playedHeroes} onChangePage={this.onChangePage} />
      </div>
    );
  }
}

Heroes.propTypes = {
  allHeroes: PropTypes.object.isRequired,
  playedHeroes: PropTypes.array.isRequired,
};

export default Heroes;
