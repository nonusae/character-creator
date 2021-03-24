import React from 'react';

import styles from './BackgroundOverlay.module.css';

const BackgroundOverlay = ({ children }) => {
  return <div className={styles.backgroundOverlay}>{children}</div>;
};

export default BackgroundOverlay;
