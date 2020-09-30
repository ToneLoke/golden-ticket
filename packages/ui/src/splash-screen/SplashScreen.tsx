import React from 'react';

import classNames from 'classnames';

import SplashLogo from './color-logo_1080.png';

import styles from './SplashLoader.scss';

const SplashLoaderComponent = () => (
  <div className={styles.container}>
    <div className={styles.splash}>
      <div className={styles.logo}>
        <img alt="Pluto TV" src={SplashLogo} />
      </div>
      <div className={styles.slider}>
        <div className={styles.line}></div>
        <div className={classNames(styles.subline, styles.inc)}></div>
        <div className={classNames(styles.subline, styles.dec)}></div>
      </div>
      <div className={classNames(styles.tagline)}>
        <p>Drop in. It&apos;s free.</p>
      </div>
    </div>
  </div>
);
SplashLoaderComponent.displayName = 'SplashAppLoader';
export const SplashLoader = React.memo(SplashLoaderComponent);
