import React from 'react';

import styles from './Breadcrumb.module.scss';

const breadcrumb = props => {
  const categories = props.categories.map((category, i) => (
    <li key={i} className={styles.breadcrumbItem}>
      {category}
    </li>
  ));

  return <ol className={styles.breadcrumb}>{categories}</ol>;
};

export default breadcrumb;
