import React, { Component } from 'react';

import styles from './Wrapper.module.scss';

class Wrapper extends Component {
  render() {
    let classes = styles.wrapper;
    if (this.props.extraClasses) {
      classes += ' ' + this.props.extraClasses;
    }
    return <div className={classes}>{this.props.children}</div>;
  }
}

export default Wrapper;
