import React from 'react';
import { Link } from 'react-router-dom';

import freeShippingImg1x from '../../../assets/images/ic_shipping.png';
import freeShippingImg2x from '../../../assets/images/ic_shipping@2x.png';
import styles from './ProductListItem.module.scss';

const productListItem = props => (
  <Link to={'/items/' + props.id} className={styles.productListItem}>
    <div className={styles.image}>
      <img src={props.picture} alt={props.title} />
    </div>
    <div className={styles.description}>
      <p className={styles.price}>
        <span className={styles.priceCurrency}>{props.price.currency}</span>
        <span className={styles.priceAmount}>{props.price.amount}</span>
        {props.price.decimals ? (
          <span className={styles.priceDecimals}>{props.price.decimals}</span>
        ) : null}
        {props.free_shipping ? (
          <img
            className={styles.priceIcon}
            src={freeShippingImg1x}
            srcSet={freeShippingImg1x + ' 1x,' + freeShippingImg2x + ' 2x'}
            alt="Envío Gratis"
          />
        ) : null}
      </p>
      <h4>{props.title}</h4>
      <p className={styles.state}>{props.state_name}</p>
    </div>
  </Link>
);

export default productListItem;
