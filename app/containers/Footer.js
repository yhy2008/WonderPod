// @flow
import React, { Component } from 'react';
import PlayInfo from '../components/PlayInfo';
import Player from './Player';
import styles from './Footer.css';

type Props = {};

class Footer extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className={styles.footer}>
        <div className={styles.footer__play_info}>
          <PlayInfo />
        </div>
        <div className={styles.footer__player}>
          <Player />
        </div>
      </div>
    );
  }
}

export default Footer;
