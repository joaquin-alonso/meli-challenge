import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/';

import Wrapper from '../../hoc/Wrapper/Wrapper';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import ProductList from '../../components/ProductList/ProductList';
import Spinner from '../../components/UI/Spinner/Spinner';

class SearchResults extends Component {
  state = {
    loading: true
  };

  componentDidMount() {
    console.log('MOUNT');
    // Check for a initial query in the url
    const query = new URLSearchParams(this.props.location.search);
    for (let param of query.entries()) {
      if (param[0] === 'q' && this.props.searchQuery !== param[1]) {
        this.props.onInitialQuery(param[1]);
        this.props.onFetchSearchResults(param[1]);
      }
    }
  }

  componentDidUpdate() {
    console.log('UPDATE');
  }

  render() {
    let results = <h2>No se han encontrado resultados</h2>;

    if (this.props.loading) {
      results = <Spinner />;
    }

    if (this.props.searchResults) {
      results = (
        <React.Fragment>
          <Breadcrumb categories={this.props.searchResults.categories} />
          <ProductList list={this.props.searchResults.items} />
        </React.Fragment>
      );
    }
    return (
      <Wrapper>
        <h2>{this.props.searchQuery}</h2>
        {results}
      </Wrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    searchQuery: state.query,
    searchResults: state.searchResults,
    loading: state.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onInitialQuery: query => dispatch(actions.setQuery(query)),
    onFetchSearchResults: query => dispatch(actions.fetchSearchResults(query))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResults);
