import React from 'react';

import styles from './ProductList.module.scss';
import ProductListItem from './ProductListItem/ProductListItem';

const productList = props => {
  const list = props.list.map(listItem => (
    <li key={listItem.id}>
      <ProductListItem {...listItem} />
    </li>
  ));

  return (
    <div className={styles.productList}>
      <ul>{list}</ul>
    </div>
  );
};

export default productList;
