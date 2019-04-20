import React from 'react';

import classes from './Spinner.module.scss';

const spinner = () => (
  <div class={classes.spinner}>
    <div class={classes['double-bounce1']} />
    <div class={classes['double-bounce2']} />
  </div>
);

export default spinner;
