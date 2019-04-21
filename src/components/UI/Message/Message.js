import React from 'react';

import styles from './Message.module.scss';

const Message = props => <h2 className={styles.message}>{props.children}</h2>;

export default Message;
