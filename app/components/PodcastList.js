// @flow
import React, { Component } from 'react';
import { Icon } from '@blueprintjs/core';
import PodcastPage from '../containers/PodcastPage';
import styles from './PodcastList.css';

type Props = {
  podcasts: Array,
  title: string
};

class PodcastList extends Component<Props> {
  props: Props;

  state = {
    feedUrl: ''
  };

  componentWillMount() {
    this.setState({
      feedUrl: ''
    });
  }

  onClick = (feedUrl) => {
    return (event) => {
      event.preventDefault();
      this.setState({ feedUrl });
    };
  }

  onCloseClick = (event) => {
    event.preventDefault();
    this.setState({ feedUrl: '' });
  }

  renderList() {
    return this.props.podcasts.map(podcast => {
      return (
        <div className={styles.podcasts__card} key={podcast.collectionId}>
          <a href="#" onClick={this.onClick(podcast.feedUrl)}>
            <img
              src={podcast.artworkUrl100}
              alt="podcast artwork"
              className={styles.podcasts__card_thumbnail}
            />
          </a>
          <p className={styles.podcasts__card_title}>{podcast.collectionName}</p>
        </div>
      );
    });
  }

  render() {
    return this.state.feedUrl ?
      (
        <div className={styles.podcasts__podcast}>
          <a href="#" onClick={this.onCloseClick}>
            <Icon
              icon="cross"
              iconSize={30}
              className={styles.podcasts__podcast_close}
            />
          </a>
          <PodcastPage feedUrl={this.state.feedUrl} />
        </div>
      ) :
      (
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
