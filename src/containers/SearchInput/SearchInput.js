import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/';

import styles from './SearchInput.module.scss';
import btnImage1x from '../../assets/images/ic_Search.png';
import btnImage2x from '../../assets/images/ic_Search@2x.png';

class searchInput extends Component {
  state = {
    searchQuery: ''
  };

  componentDidMount() {
    // Check for a initial query in the url
    const query = new URLSearchParams(this.props.location.search);
    for (let param of query.entries()) {
      if (param[0] === 'q' && this.state.searchQuery !== param[1]) {
        this.setState({ searchQuery: param[1] });
      }
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
      this.props.onSearchSubmit(this.state.searchQuery);

      this.props.history.push({
        pathname: '/items',
        search: '?q=' + this.state.searchQuery
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

const mapDispatchToProps = dispatch => {
  return {
    onSearchSubmit: query => dispatch(actions.setQuery(query))
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(searchInput)
);
