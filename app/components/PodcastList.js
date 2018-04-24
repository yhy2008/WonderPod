// @flow
import React, { Component } from 'react';
import _ from 'lodash';
import { Popover } from '@blueprintjs/core';
import { Link } from 'react-router-dom';
import Popup from '../containers/Popup';
import styles from './PodcastList.css';

type Props = {
  podcasts: Object,
  title: string
};

class PodcastList extends Component<Props> {
  props: Props;

  renderList() {
    return _.map(this.props.podcasts, (podcast, key) => (
      <div className={styles.podcasts__card} key={key}>
        <Popover
          content={<Popup podcast={podcast} />}
          position="top"
          interactionKind="hover"
        >
          <Link to={`/podcasts/${encodeURIComponent(podcast.feedUrl)}`}>
            <img
              src={podcast.image}
              alt="podcast artwork"
              className={styles.podcasts__card_thumbnail}
            />
          </Link>
        </Popover>
        <p className={styles.podcasts__card_title}>{podcast.name}</p>
      </div>
    ));
  }

  render() {
    return (
      <div className={styles.podcasts}>
        <h3>{this.props.title}</h3>
        <div className={styles.podcasts__card_group}>
          {this.renderList()}
        </div>
      </div>
    );
  }
}

export default PodcastList;
