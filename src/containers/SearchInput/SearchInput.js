import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import qs from 'query-string';

import styles from './SearchInput.module.scss';
import btnImage1x from '../../assets/images/ic_Search.png';
import btnImage2x from '../../assets/images/ic_Search@2x.png';

class searchInput extends Component {
  state = {
    searchQuery: ''
  };

  componentDidMount() {
    // Check for a initial query in the url
    const parsedQuery = qs.parse(this.props.location.search);

    if (parsedQuery.search && this.searchQuery !== parsedQuery.search) {
      this.setState({ searchQuery: parsedQuery.search });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const parsedQuery = qs.parse(this.props.location.search);
    const parsedPrevQuery = qs.parse(prevProps.location.search);

    // If no more qs, empty the input
    if (parsedQuery.search !== parsedPrevQuery.search) {
      this.setState({ searchQuery: parsedQuery.search || '' });
    }
  }

  onInputChangeHandler = e => {
    this.setState({
      searchQuery: e.target.value
    });
  };

  onSubmitHandler = e => {
    e.preventDefault();

    if (this.state.searchQuery.length) {
      this.props.history.push({
        pathname: '/items',
        search: '?search=' + this.state.searchQuery
      });
    }
  };

  render() {
    return (
      <form onSubmit={this.onSubmitHandler} className={styles.searchForm}>
        <input
          type="text"
          placeholder="Nunca dejes de buscar"
          value={this.state.searchQuery}
          onChange={this.onInputChangeHandler}
        />
        <button>
          <img src={btnImage1x} srcSet={btnImage1x + ' 1x,' + btnImage2x + ' 2x'} alt="Buscar" />
        </button>
      </form>
    );
  }
}

export default withRouter(searchInput);
