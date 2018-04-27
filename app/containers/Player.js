// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setPlayTimeToCache } from '../utils/data';
import SoundPlayer from '../components/SoundPlayer';
import styles from './Player.css';

type Props = {
  episode: Object,
  playTime: number,
  autoplay: boolean
};

class Player extends Component<Props> {
  props: Props;

  onReady = (soundCloudAudio) => {
    soundCloudAudio.audio.currentTime = this.props.playTime;
    if (this.props.autoplay) {
      soundCloudAudio.play();
    }
    soundCloudAudio.on('timeupdate', () => {
      setPlayTimeToCache(soundCloudAudio.audio.currentTime);
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

function mapStateToProps({ episode, playTime, autoplay }) {
  return { episode, playTime, autoplay };
}

export default connect(mapStateToProps)(Player);
