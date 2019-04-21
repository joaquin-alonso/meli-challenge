import React from 'react';

import { formatPriceAmount, formatPriceDecimals } from '../../utility';
import Button from '../UI/Button/Button';
import styles from './ProductDetail.module.scss';

const ProductDetail = ({ data }) => {
  const conditionMap = {
    new: 'Nuevo',
    used: 'Usado'
  };

  let soldQuantity = '';
  if (data.sold_quantity) {
    soldQuantity = ' - ' + data.sold_quantity + ' vendido';
    if (data.sold_quantity > 1) {
      soldQuantity += 's';
    }
  }

  return (
    <div className={styles.productDetail}>
      <section className={styles.mainCol}>
        <figure className={styles.image}>
          <img src={data.picture} alt={data.title} />
        </figure>

        <div className={styles.description}>
          <h3>Descripción del producto</h3>
          <p>{data.description}</p>
        </div>
      </section>

      <section className={styles.ctaCol}>
        <p className={styles.details}>
          {conditionMap[data.condition]}
          {soldQuantity}
        </p>
        <h1 className={styles.title}>{data.title}</h1>
        <p className={styles.price}>
          <span className={styles.priceCurrency}>{data.price.currency}</span>
          <span className={styles.priceAmount}>{formatPriceAmount(data.price.amount)}</span>
          {data.price.decimals ? (
            <span className={styles.priceDecimals}>{formatPriceDecimals(data.price.decimals)}</span>
          ) : null}
        </p>
        <Button btnType="flashy" clicked={() => alert('Bought!')}>
          Comprar
        </Button>
      </section>
    </div>
  );
};

export default ProductDetail;
