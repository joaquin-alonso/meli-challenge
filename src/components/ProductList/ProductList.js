import React from 'react';

import styles from './ProductList.module.scss';
import ProductListItem from './ProductListItem/ProductListItem';

const productList = props => {
  const list = props.list.map(listItem => (
    <li key={listItem.id}>
      <ProductListItem data={listItem} />
    </li>
  ));

  return (
    <div className={styles.productList}>
      <ol>{list}</ol>
    </div>
  );
};

export default productList;
