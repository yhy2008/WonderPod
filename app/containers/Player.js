// @flow
import React, { Component } from 'react';
import SoundPlayer from '../components/SoundPlayer';
import styles from './Player.css';

type Props = {
  episode: Object,
  autoPlay: boolean,
  playTime: number
};

class Player extends Component<Props> {
  props: Props;

  componentWillReceiveProps(nextProps) {
    localStorage.setItem('episode', JSON.stringify(nextProps.episode));
    localStorage.setItem('playTime', 0);
  }

  onReady = (soundCloudAudio) => {
    soundCloudAudio.audio.currentTime = this.props.playTime;
    if (this.props.autoPlay) {
      soundCloudAudio.play();
    }
    soundCloudAudio.on('timeupdate', () => {
      localStorage.setItem('playTime', soundCloudAudio.audio.currentTime);
    });
  }

  render() {
    return (
      <div className={styles.player}>
        <SoundPlayer
          streamUrl={this.props.episode.url}
          preloadType="auto"
          onReady={this.onReady}
          onBackwardClick={this.onBackwardClick}
          onForwardClick={this.onForwardClick}
        />
      </div>
    );
  }
}

export default Player;
