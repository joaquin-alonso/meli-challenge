import React, { Component } from 'react';
import { connect } from 'react-redux';
import qs from 'query-string';
import * as actions from '../../store/actions/';

import Wrapper from '../../hoc/Wrapper/Wrapper';
import Message from '../../components/UI/Message/Message';
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
    let resultsJsx = '';

    if (this.props.loading) {
      resultsJsx = <Spinner />;
    }

    if (this.props.error) {
      resultsJsx = (
        <Message>Ha ocurrido un error. Por favor inténtalo de nuevo en unos minutos.</Message>
      );
    }

    if (this.props.searchResults) {
      if (!this.props.searchResults.items.length) {
        resultsJsx = <Message>No hay publicaciones que coincidan con tu búsqueda.</Message>;
      } else {
        resultsJsx = (
          <div className={styles.searchResults}>
            {this.props.searchResults.categories.length ? (
              <div className={styles.breadcrumbWrap}>
                <Breadcrumb categories={this.props.searchResults.categories} />
              </div>
            ) : null}
            <ProductList list={this.props.searchResults.items.slice(0, 4)} />
          </div>
        );
      }
    }
    return <Wrapper>{resultsJsx}</Wrapper>;
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
    onFetchSearchResults: query => dispatch(actions.fetchSearchResults(query))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResults);
