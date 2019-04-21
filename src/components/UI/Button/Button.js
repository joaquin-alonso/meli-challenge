import React from 'react';

import styles from './Button.module.scss';

const Button = props => (
  <button
    className={[styles.button, styles[props.btnType]].join(' ')}
    disabled={props.disabled}
    onClick={props.clicked}
  >
    {props.children}
  </button>
);

export default Button;
