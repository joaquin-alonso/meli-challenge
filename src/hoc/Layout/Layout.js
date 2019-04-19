import React, { Component } from 'react';

import Header from '../../components/Header/Header';
import styles from './Layout.module.scss';

class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <main className={styles.main}>{this.props.children}</main>
      </React.Fragment>
    );
  }
}

export default Layout;
