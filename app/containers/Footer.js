// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import PlayInfo from './PlayInfo';
import Player from './Player';
import { getEpisode, getPlayTime } from '../actions';
import styles from './Footer.css';

type Props = {
  episode: Object,
  getEpisode: Function,
  getPlayTime: Function
};

class Footer extends Component<Props> {
  props: Props;

  componentDidMount() {
    this.props.getEpisode();
    this.props.getPlayTime();
  }

  render() {
    return _.isEmpty(this.props.episode) ?
      null :
      (
        <div className={styles.footer}>
          <div className={styles.footer__play_info}>
            <PlayInfo />
          </div>
          <div className={styles.footer__player}>
            <Player />
          </div>
        </div>
      );
  }
}

function mapStateToProps({ episode }) {
  return { episode };
}
export default connect(mapStateToProps, { getEpisode, getPlayTime })(Footer);
