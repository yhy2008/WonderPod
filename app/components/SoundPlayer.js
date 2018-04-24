import React from 'react';
import { Icon } from '@blueprintjs/core';
import { PlayButton, Timer, Progress, VolumeControl } from 'react-soundplayer/components';
import withCustomAudio from '../utils/withCustomAudio';
import styles from '../containers/Player.css';

export default withCustomAudio((props) => {
  const playButtonClass = `pt-button pt-icon ${styles.player__play_button}`;
  const onBackwardClick = () => {
    const { soundCloudAudio } = props;
    soundCloudAudio.audio.currentTime -= 15;
  };
  const onForwardClick = () => {
    const { soundCloudAudio } = props;
    soundCloudAudio.audio.currentTime += 15;
  };
  return (
    <div className={styles.player}>
      <div className={styles.player__controls}>
        <div className={styles.player__buttons}>
          <a className={styles.player__button_click} href="#" onClick={onBackwardClick}>
            <Icon
              className={styles.player__control_button}
              icon="fast-backward"
              iconSize={30}
            />
          </a>
          <PlayButton
            className={playButtonClass}
            {...props}
          />
          <a className={styles.player__button_click} href="#" onClick={onForwardClick}>
            <Icon
              className={styles.player__control_button}
              icon="fast-forward"
              iconSize={30}
            />
          </a>
        </div>
      </div>
      <div className={styles.player__progress}>
        <Progress
          className={styles.player__progress_bar}
          innerClassName={styles.player__progress_inner}
          {...props}
        />
        <Timer
          className={styles.player__timer}
          {...props}
        />
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
          {...props}
        />
      </div>
    </div>
  );
});
