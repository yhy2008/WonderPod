// @flow
import React, { Component } from 'react';
import { Button } from '@blueprintjs/core';
import { connect } from 'react-redux';
import { subscribe, unsubscribe } from '../actions';
import styles from './Popup.css';

type Props = {
  podcast: Object,
  podcasts: Object,
  subscribe: Function,
  unsubscribe: Function
};

class Popup extends Component {
  props: Props;

  onSubscribe = () => {
    const { podcast } = this.props;
    this.props.subscribe(podcast);
  }

  onUnsubscribe = () => {
    const { podcast } = this.props;
    this.props.unsubscribe(podcast);
  }

  render() {
    const { podcasts, podcast } = this.props;
    const subscribed = !!podcasts[podcast.key];
    return subscribed ?
      (
        <div className={styles.popup}>
          <Button
            text="取消订阅"
            className="pt-minimal"
            icon="trash"
            onClick={this.onUnsubscribe}
          />
        </div>
      ) :
      (
        <div className={styles.popup}>
          <Button
            text="订阅"
            className="pt-minimal"
            icon="feed"
            onClick={this.onSubscribe}
          />
        </div>
      );
  }
}

function mapStateToProps({ subscribedPodcasts }) {
  return { podcasts: subscribedPodcasts };
}

export default connect(mapStateToProps, { subscribe, unsubscribe })(Popup);
