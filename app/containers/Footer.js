// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import PlayInfo from '../components/PlayInfo';
import Player from './Player';
import styles from './Footer.css';

type Props = {
  episode: Object
};

class Footer extends Component<Props> {
  props: Props;

  state = {
    autoPlay: true,
    playTime: 0,
    episode: {}
  };

  componentDidMount() {
    this.setEpisode();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      autoPlay: true,
      playTime: 0,
      episode: nextProps.episode
    });
  }

  setEpisode() {
    this.setState({ autoPlay: false });
    const episode = localStorage.getItem('episode');
    if (episode) {
      this.setState({ episode: JSON.parse(episode) });
    }
    const playTime = localStorage.getItem('playTime');
    if (episode && playTime) {
      this.setState({ playTime: Number(playTime) });
    }
  }

  render() {
    const { playTime, autoPlay, episode } = this.state;
    return _.isEmpty(episode) ?
      null :
      (
        <div className={styles.footer}>
          <div className={styles.footer__play_info}>
            <PlayInfo episode={episode} />
          </div>
          <div className={styles.footer__player}>
            <Player
              episode={episode}
              playTime={playTime}
              autoPlay={autoPlay}
            />
          </div>
        </div>
      );
  }
}

function mapStateToProps({ episode }) {
  return { episode };
}
export default connect(mapStateToProps)(Footer);
