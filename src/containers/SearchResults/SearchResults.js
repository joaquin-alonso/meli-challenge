import React, { Component } from 'react';
import { connect } from 'react-redux';
import qs from 'query-string';
import * as actions from '../../store/actions/';

import Wrapper from '../../hoc/Wrapper/Wrapper';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import ProductList from '../../components/ProductList/ProductList';
import Spinner from '../../components/UI/Spinner/Spinner';
import styles from './SearchResults.module.scss';

class SearchResults extends Component {
  componentDidMount() {
    const parsedQuery = qs.parse(this.props.location.search);

    if (parsedQuery.q) {
      this.props.onFetchSearchResults(parsedQuery.q);
    }
  }

  componentDidUpdate(prevProps) {
    const parsedQuery = qs.parse(this.props.location.search);
    const parsedPrevQuery = qs.parse(prevProps.location.search);

    if (parsedQuery.q && parsedQuery.q !== parsedPrevQuery.q) {
      this.props.onFetchSearchResults(parsedQuery.q);
    }
  }

  render() {
    let results = '';

    if (this.props.loading) {
      results = <Spinner />;
    }

    if (this.props.error) {
      results = <h2>Ha ocurrido un error. Por favor inténtalo de nuevo en unos minutos.</h2>;
    }

    if (this.props.searchResults) {
      if (!this.props.searchResults.items.length) {
        results = <h2>No hay publicaciones que coincidan con tu búsqueda.</h2>;
      } else {
        results = (
          <React.Fragment>
            {this.props.searchResults.categories.length ? (
              <div className={styles.breadcrumbWrap}>
                <Breadcrumb categories={this.props.searchResults.categories} />
              </div>
            ) : null}
            <div>
              <ProductList list={this.props.searchResults.items} />
            </div>
          </React.Fragment>
        );
      }
    }
    return (
      <Wrapper>
        <div className={styles.searchResults}>{results}</div>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    searchResults: state.searchResults,
    loading: state.loading,
    error: state.error
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
