// @flow
import React, { Component } from 'react';
import axios from 'axios';
import { Icon } from '@blueprintjs/core';
import LazyLoad from 'react-lazyload';
import { withRouter } from 'react-router';
import _ from 'lodash';
import styles from './PodcastPage.css';
import LoadingPage from '../utils/LoadingPage';
import Episode from './Episode';
import { processRSS } from '../utils/helper';

type Props = {
  match: Object,
  history: Object
};

class PodcastPage extends Component {
  props: Props;

  state = {
    podcast: null
  };

  componentDidMount() {
    this.setRSS(this.props.match.params.rss);
  }

  setRSS = async (feedUrl) => {
    const response = await axios.get(decodeURIComponent(feedUrl));
    const podcast = await processRSS(response.data);
    this.setState({ podcast });
  }

  onBackClick = (event) => {
    event.preventDefault();
    this.props.history.goBack();
  }

  renderEpisodes() {
    return _.map(this.state.podcast.items, (episode, key) => (
      <div className={styles.podcast__episode} key={key}>
        <LazyLoad height="100%" overflow throttle={100}>
          <Episode episode={episode} />
        </LazyLoad>
      </div>
    ));
  }

  render() {
    const { podcast } = this.state;
    return (
      <div className={styles.podcast}>
        {
          podcast !== null ?
            (
              <div>
                <div className={styles.podcast__info}>
                  <div className={styles.podcast__thumbnail}>
                    <img
                      className={styles.podcast__image}
                      src={podcast.image}
                      alt="podcast artwork"
                    />
                  </div>
                  <h3>{podcast.title}</h3>
                  <small>{podcast.author}</small>
                  <p className={styles.podcast__description}>{podcast.description}</p>
                </div>
                <div className={styles.podcast__episodes}>
                  {this.renderEpisodes()}
                </div>
              </div>
            ) :
            (
              <LoadingPage />
            )
        }
        <a href="#" onClick={this.onBackClick} className={styles.podcast__back}>
          <Icon icon="arrow-left" iconSize={25} />
        </a>
      </div>
    );
  }
}

export default withRouter(PodcastPage);
