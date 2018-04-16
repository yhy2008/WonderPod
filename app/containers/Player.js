// @flow
import React, { Component } from 'react';
import { Icon } from '@blueprintjs/core';
import { PlayButton, PrevButton, NextButton, Timer, Progress, VolumeControl } from 'react-soundplayer/components';
import { withCustomAudio } from 'react-soundplayer/addons';
import styles from './Player.css';


type Props = {};

class Player extends Component<Props> {
  props: Props;

  render() {
    const SoundPlayer = withCustomAudio(() => {
      const playButtonClass = `pt-button pt-icon ${styles.player__play_button}`;
      return (
        <div className={styles.player}>
          <div className={styles.player__controls}>
            <div className={styles.player__buttons}>
              <PrevButton className={playButtonClass} />
              <PlayButton className={playButtonClass} />
              <NextButton className={playButtonClass} />
            </div>
          </div>
          <div className={styles.player__progress}>
            <Progress
              className={styles.player__progress_bar}
              innerClassName={styles.player__progress_inner}
            />
            <Timer className={styles.player__timer} />
          </div>
          <div className={styles.player__volume}>
            <div className={styles.player__volume_icon}>
              <Icon
                icon="volume-up"
                iconSize={15}
              />
            </div>
            <VolumeControl
              className={styles.player__volume_control}
              buttonClassName={styles.player__volume_button}
            />
          </div>
        </div>
      );
    });
    return (
      <div className={styles.player}>
        <SoundPlayer
          steamUrl="https://media.simplecast.com/episodes/audio/133050/86.mp3"
        />
      </div>
    );
  }
}

export default Player;
