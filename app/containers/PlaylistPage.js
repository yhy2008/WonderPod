// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Icon } from '@blueprintjs/core';
import _ from 'lodash';
import { getPlaylist, removeFromPlaylist, playEpisode } from '../actions';
import styles from './PlaylistPage.css';

type Props = {
  playlist: Object,
  getPlaylist: Function,
  removeFromPlaylist: Function,
  playEpisode: Function
};

class PlaylistPage extends Component {
  props: Props

  componentDidMount() {
    this.props.getPlaylist();
  }

  onPlayClick = (episode) => (event) => {
    event.preventDefault();
    this.props.playEpisode(episode);
    this.props.removeFromPlaylist(episode);
  }

  onRemoveClick = (episode) => (event) => {
    event.preventDefault();
    this.props.removeFromPlaylist(episode);
  }

  renderEpisodes() {
    return _.map(this.props.playlist, (episode, key) => (
      <div className={styles.playlist__episode} key={key}>
        <div className={styles.playlist__episode_thumbnail}>
          <img className={styles.playlist__episode_image} src={episode.image} alt="episode artwork" />
        </div>
        <div className={styles.playlist__episode_description}>
          <span className={styles.playlist__episode_title}>{episode.title}</span>
          <span className={styles.playlist__episode_author}>{episode.author}</span>
        </div>
        <div className={styles.playlist__episode_functions}>
          <div className={styles.playlist__episode_buttons}>
            <a href="#" onClick={this.onRemoveClick(episode)} className={styles.playlist__episode_remove}>
              <Icon className={styles.playlist__episode_button} icon="remove" iconSize={25} />
            </a>
            <a href="#" onClick={this.onPlayClick(episode)} className={styles.playlist__episode_play}>
              <Icon className={styles.playlist__episode_button} icon="play" iconSize={25} />
            </a>
          </div>
        </div>
      </div>
    ));
  }

  render() {
    return (
      <div className={styles.playlist}>
        <h3>播放列表</h3>
        <div>
          {this.renderEpisodes()}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ playlist }) {
  return { playlist };
}

export default connect(mapStateToProps, {
  getPlaylist,
  removeFromPlaylist,
  playEpisode
})(PlaylistPage);
