import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/';

import Wrapper from '../../hoc/Wrapper/Wrapper';
import Message from '../../components/UI/Message/Message';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import ProductDetail from '../../components/ProductDetail/ProductDetail';
import Spinner from '../../components/UI/Spinner/Spinner';
import styles from './Product.module.scss';

class Product extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;

    if (id) {
      this.props.onFetchProduct(id);
    }
  }

  render() {
    let productJsx = '';

    if (this.props.loading) {
      productJsx = <Spinner />;
    }

    if (this.props.error) {
      if (this.props.error === 404) {
        productJsx = <Message>No hay productos que coincidan con tu búsqueda.</Message>;
      } else {
        productJsx = (
          <Message>Ha ocurrido un error. Por favor inténtalo de nuevo en unos minutos.</Message>
        );
      }
    }

    if (this.props.product) {
      productJsx = (
        <div className={styles.product}>
          {this.props.product.categories.length ? (
            <div className={styles.breadcrumbWrap}>
              <Breadcrumb categories={this.props.product.categories} />
            </div>
          ) : null}
          <ProductDetail data={this.props.product.item} />
        </div>
      );
    }
    return <Wrapper>{productJsx}</Wrapper>;
  }
}

const mapStateToProps = state => {
  return {
    product: state.product,
    loading: state.loading,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchProduct: id => dispatch(actions.fetchProduct(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Product);
