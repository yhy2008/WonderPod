import React from 'react';
import { Icon } from '@blueprintjs/core';
import styles from './LoadingPage.css';

export default () => {
  return (
    <Icon className={styles.loading__icon} icon="graph" iconSize={50} />
  );
};
