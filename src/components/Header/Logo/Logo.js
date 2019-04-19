import React from 'react';
import styles from './Logo.module.scss';
import logoImg1x from '../../../assets/images/Logo_ML.png';
import logoImg2x from '../../../assets/images/Logo_ML@2x.png';

const logo = props => (
  <h1 className={styles.logo}>
    <img src={logoImg1x} srcSet={logoImg1x + ' 1x,' + logoImg2x + ' 2x'} alt="Logo Mercado Libre" />
  </h1>
);

export default logo;
