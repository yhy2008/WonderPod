// @flow
import React, { Component } from 'react';
import styles from './PlayInfo.css';

type Props = {
  episode: Object
};

class PlayInfo extends Component<Props> {
  props: Props;

  render() {
    const { image, title, author } = this.props.episode;
    return (
      <div className={styles.play_info}>
        <img src={image} alt="info" className={styles.play_info__thumbnail} />
        <div className={styles.play_info__description}>
          <div className={styles.play_info__text}>
            <p className="text_omit">{title}</p>
            <p className={`text_omit ${styles.play_info__author}`}>{author}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default PlayInfo;
