import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import styles from './SearchInput.module.scss';
import btnImage1x from '../../assets/images/ic_Search.png';
import btnImage2x from '../../assets/images/ic_Search@2x.png';

class searchInput extends Component {
  state = {
    searchVal: ''
  };

  onInputChangeHandler = e => {
    this.setState({
      searchVal: e.target.value
    });
  };

  onSubmitHandler = e => {
    e.preventDefault();

    if (this.state.searchVal.length) {
      this.props.history.push('/items?q=' + this.state.searchVal);
    }
  };

  render() {
    return (
      <form onSubmit={this.onSubmitHandler} className={styles.searchForm}>
        <input
          type="text"
          placeholder="Nunca dejes de buscar"
          value={this.state.searchVal}
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
