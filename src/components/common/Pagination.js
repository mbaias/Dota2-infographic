import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/pagination.css';

const propTypes = {
  items: PropTypes.array.isRequired,
  onChangePage: PropTypes.func.isRequired,
  initialPage: PropTypes.number,
  pageSize: PropTypes.number,
};

const defaultProps = {
  initialPage: 1,
  pageSize: 20,
};

class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pager: {} };
  }

  componentDidMount() {
    // set page if items array isn't empty
    if (this.props.items && this.props.items.length) {
      this.setPage(this.props.initialPage);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // reset page if items array has changed
    if (this.props.items !== prevProps.items) {
      this.setPage(this.props.initialPage);
    }
  }

  setPage = page => {
    let { items, pageSize } = this.props;
    let { pager } = this.state;

    if (page < 1 || page > pager.totalPages) {
      return;
    }

    // get new pager object for specified page
    pager = this.getPager(items.length, page, pageSize);

    // get new page of items from items array
    let pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);

    // update state
    this.setState({ pager });

    // call change page function in parent component
    this.props.onChangePage(pageOfItems);
  };

  getPager = (totalItems, currentPage, pageSize) => {
    // default to first page
    currentPage = currentPage || 1;

    // default page size is 10
    pageSize = pageSize || 20;

    // calculate total pages
    let totalPages = Math.ceil(totalItems / pageSize);

    let startPage;
    let endPage;
    if (totalPages <= 6) {
      // less than 10 total pages so show all
      startPage = 1;
      endPage = totalPages;
    } else {
      // more than 10 total pages so calculate start and end pages
      if (currentPage <= 3) {
        startPage = 1;
        endPage = 6;
      } else if (currentPage + 2 >= totalPages) {
        startPage = totalPages - 5;
        endPage = totalPages;
      } else {
        startPage = currentPage - 2;
        endPage = currentPage + 2;
      }
    }

    // calculate start and end item indexes
    let startIndex = (currentPage - 1) * pageSize;
    let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    // create an array of pages to ng-repeat in the pager control
    let pages = [...Array(endPage + 1 - startPage).keys()].map(
      i => startPage + i,
    );

    // return object with all pager properties required by the view
    return {
      totalItems,
      currentPage,
      pageSize,
      totalPages,
      startPage,
      endPage,
      startIndex,
      endIndex,
      pages,
    };
  };

  render() {
    let { pager } = this.state;

    if (!pager.pages || pager.pages.length <= 1) {
      // don't display pager if there is only 1 page
      return null;
    }

    return (
      <ul className="pagination">
        {pager.currentPage !== 1 && (
          <li
            className={
              pager.currentPage === 1 ? 'disabled' : 'pagination__item'
            }
          >
            <a className="pagination__link" onClick={() => this.setPage(1)}>
              First
            </a>
          </li>
        )}
        <li
          className={pager.currentPage === 1 ? 'disabled' : 'pagination__item'}
        >
          <a
            className="pagination__link"
            onClick={() => this.setPage(pager.currentPage - 1)}
          >
            <i className="fas fa-angle-left" />
          </a>
        </li>
        {pager.pages.map((page, index) => (
          <li key={index} className="pagination__item">
            <a
              className={
                pager.currentPage === page
                  ? 'pagination__link active'
                  : 'pagination__link'
              }
              onClick={() => this.setPage(page)}
            >
              {page}
            </a>
          </li>
        ))}
        <li
          className={
            pager.currentPage === pager.totalPages
              ? 'disabled'
              : 'pagination__item'
          }
        >
          <a
            className="pagination__link"
            onClick={() => this.setPage(pager.currentPage + 1)}
          >
            <i className="fas fa-angle-right" />
          </a>
        </li>
        <li
          className={
            pager.currentPage === pager.totalPages
              ? 'disabled'
              : 'pagination__item'
          }
        >
          <a
            className="pagination__link"
            onClick={() => this.setPage(pager.totalPages)}
          >
            Last
          </a>
        </li>
      </ul>
    );
  }
}

Pagination.propTypes = propTypes;
Pagination.defaultProps = defaultProps;
export default Pagination;
