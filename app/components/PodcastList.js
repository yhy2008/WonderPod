// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './PodcastList.css';

type Props = {
  podcasts: Array,
  title: string
};

class PodcastList extends Component<Props> {
  props: Props;

  renderList() {
    return this.props.podcasts.map(podcast => (
      <div className={styles.podcasts__card} key={podcast.collectionId}>
        <Link to={`/podcasts/${encodeURIComponent(podcast.feedUrl)}`}>
          <img
            src={podcast.artworkUrl100}
            alt="podcast artwork"
            className={styles.podcasts__card_thumbnail}
          />
        </Link>
        <p className={styles.podcasts__card_title}>{podcast.collectionName}</p>
      </div>
    ));
  }

  render() {
    return (
      <div className={styles.podcasts}>
        <h3>{this.props.title}</h3>
        <div className={styles.podcasts__card_group}>
          {this.renderList()}
        </div>
      </div>
    );
  }
}

export default PodcastList;
