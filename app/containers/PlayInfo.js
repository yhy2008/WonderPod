// @flow
import React, { Component } from 'react';
import { Icon } from '@blueprintjs/core';
import { connect } from 'react-redux';
import { openLink } from '../actions/app';
import styles from './PlayInfo.css';

type Props = {
  episode: Object,
  openLink: Function
};

class PlayInfo extends Component<Props> {
  props: Props;

  onClickMask = (event) => {
    event.preventDefault();
    this.props.openLink(this.props.episode.link);
  }

  render() {
    const { image, title, author } = this.props.episode;
    return (
      <div className={styles.play_info}>
        <a href="#" onClick={this.onClickMask}>
          <div className={styles.play_info__mask}>
            <Icon className={styles.play_info__link_icon} icon="document-open" iconSize={20} />
          </div>
        </a>
        <img src={image} alt="info" className={styles.play_info__thumbnail} />
        <div className={styles.play_info__description}>
          <div className={styles.play_info__text}>
            <p className="text_omit">{title}</p>
            <p className={`text_omit ${styles.play_info__author}`}>{author}</p>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ episode }) {
  return { episode };
}

export default connect(mapStateToProps, { openLink })(PlayInfo);
