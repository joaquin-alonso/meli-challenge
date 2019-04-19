import React from 'react';

import Wrapper from '../../hoc/Wrapper/Wrapper';
import Logo from './Logo/Logo';
import SearchInput from '../../containers/SearchInput/SearchInput';
import styles from './Header.module.scss';

const header = props => (
  <header className={styles.header}>
    <Wrapper extraClasses={styles.headerWrapper}>
      <div className={styles.logoWrapper}>
        <Logo />
      </div>
      <SearchInput />
    </Wrapper>
  </header>
);

export default React.memo(header);
