import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { range } from 'lodash';
import { getSearchedTeams } from '../../actions/getTeams';
import '../../styles/search.css';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchItem: '',
    };
  }

  handleSubmit = e => {
    const { searchItem } = this.state;
    e.preventDefault();

    if (searchItem.length >= 3) {
      this.props.getSearchedTeams(searchItem);
    }
  };

  handleChange = e => {
    const { target } = e;
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    console.log(range(1, 10));
    const { searchItem } = this.state;
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit} className="search-form">
          <input
            onChange={this.handleChange}
            type="text"
            value={searchItem}
            name="searchItem"
            placeholder="Search for a team..."
            className="search-form__input"
          />
          <button type="submit" className="search-form__submit">
            LOOK UP
          </button>
        </form>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getSearchedTeams: searchItem => {
    dispatch(getSearchedTeams(searchItem));
  },
});

Search.propTypes = {
  getSearchedTeams: PropTypes.func.isRequired,
};

export default connect(
  null,
  mapDispatchToProps,
)(Search);
