// @flow
import React, { Component } from 'react';
import styles from './Episode.css';
import { removeTag } from '../utils/helper';

type Props = {
  episode: Object,
  image: string
};

class Episode extends Component {
  props: Props;

  render() {
    const { episode } = this.props;
    const date = new Date(removeTag(episode.pubDate[0]))
      .toISOString()
      .slice(0, 10);
    const description = typeof episode.description[0] === 'string' ?
      episode.description[0] :
      episode.description[0]._;
    const image = 'itunes:image' in episode ?
      episode['itunes:image'][0].$.href :
      this.props.image;

    return (
      <div className={styles.episode}>
        <div className={styles.episode__thumbnail}>
          <img
            className={styles.episode__image}
            src={removeTag(image)}
            alt="episode artwork"
          />
        </div>
        <div className={styles.episode__info}>
          <h4 className={styles.episode__title}>
            {removeTag(episode.title[0])}
          </h4>
          <small>{date}</small>
          <p className={styles.episode__description}>
            {removeTag(description)}
          </p>
        </div>
      </div>
    );
  }
}

export default Episode;
