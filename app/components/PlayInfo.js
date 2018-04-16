// @flow
import React, { Component } from 'react';
import styles from './PlayInfo.css';

type Props = {};

class PlayInfo extends Component<Props> {
  props: Props;

  render() {
    const info = {
      img: 'https://media.simplecast.com/podcast/image/279/small_1413649662-artwork.jpg',
      name: 'Full Stack Radio',
      description: 'Frontend With Nate'
    };
    return (
      <div className={styles.play_info}>
        <img src={info.img} alt="info" className={styles.play_info__thumbnail} />
        <div className={styles.play_info__description}>
          <div className={styles.play_info__text}>
            <p className="text_omit">{info.description}</p>
            <small className="text_omit">{info.name}</small>
          </div>
        </div>
      </div>
    );
  }
}

export default PlayInfo;
