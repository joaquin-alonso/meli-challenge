import React from 'react';
import { Link } from 'react-router-dom';

import { formatPriceAmount, formatPriceDecimals } from '../../../shared/utility';
import freeShippingImg1x from '../../../assets/images/ic_shipping.png';
import freeShippingImg2x from '../../../assets/images/ic_shipping@2x.png';
import styles from './ProductListItem.module.scss';

const productListItem = ({ data }) => (
  <Link to={'/items/' + data.id} className={styles.productListItem}>
    <figure className={styles.image}>
      <img src={data.picture} alt={data.title} />
    </figure>
    <div className={styles.description}>
      <p className={styles.price}>
        <span className={styles.priceCurrency}>{data.price.currency}</span>
        <span className={styles.priceAmount}>{formatPriceAmount(data.price.amount)}</span>
        {data.price.decimals ? (
          <span className={styles.priceDecimals}>{formatPriceDecimals(data.price.decimals)}</span>
        ) : null}
        {data.free_shipping ? (
          <img
            className={styles.priceIcon}
            src={freeShippingImg1x}
            srcSet={freeShippingImg1x + ' 1x,' + freeShippingImg2x + ' 2x'}
            alt="Envío Gratis"
          />
        ) : null}
      </p>
      <h4 className={styles.title}>{data.title}</h4>
      <p className={styles.state}>{data.state_name}</p>
    </div>
  </Link>
);

export default productListItem;
