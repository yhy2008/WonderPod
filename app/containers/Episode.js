// @flow
import React, { Component } from 'react';
import { Icon } from '@blueprintjs/core';
import { connect } from 'react-redux';
import {
  setEpisode,
  setPlayTime,
  addToPlaylist,
  setAutoplay
} from '../actions';
import Message from '../utils/Message';
import styles from './Episode.css';

type Props = {
  episode: Object,
  setEpisode: Function,
  addToPlaylist: Function,
  setPlayTime: Function,
  setAutoplay: Function
};

class Episode extends Component {
  props: Props;

  onClickPlay = (event) => {
    event.preventDefault();
    this.props.setAutoplay(true);
    this.props.setPlayTime(0);
    this.props.setEpisode(this.props.episode);
  }

  onClickAdd = (event) => {
    event.preventDefault();
    this.props.addToPlaylist(this.props.episode);
    Message.show({
      intent: 'success',
      message: '已添加至播放列表'
    });
  }

  render() {
    const { episode } = this.props;

    return (
      <div className={styles.episode}>
        <div className={styles.episode__thumbnail}>
          <img
            className={styles.episode__image}
            src={episode.image}
            alt="episode artwork"
          />
        </div>
        <div className={styles.episode__info}>
          <h4 className={styles.episode__title}>
            {episode.title}
          </h4>
          <small>{episode.date}</small>
          <p className={styles.episode__description}>
            {episode.description}
          </p>
        </div>
        <div className={styles.episode__hover}>
          <div className={styles.episode__mask}>
            <div className={styles.episode__buttons}>
              <a href="#" onClick={this.onClickPlay}>
                <Icon className={styles.episode__button} icon="play" iconSize={30} />
              </a>
              <a href="#" onClick={this.onClickAdd}>
                <Icon className={styles.episode__button} icon="add-to-artifact" iconSize={30} />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, {
  setEpisode,
  setPlayTime,
  addToPlaylist,
  setAutoplay
})(Episode);
