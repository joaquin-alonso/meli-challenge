import React from 'react';

import classes from './Spinner.module.scss';

const spinner = () => (
  <div className={classes.spinner}>
    <div className={classes['double-bounce1']} />
    <div className={classes['double-bounce2']} />
  </div>
);

export default spinner;
