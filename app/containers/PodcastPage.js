// @flow
import React, { Component } from 'react';
import { parseString } from 'xml2js';
import axios from 'axios';
import { Icon } from '@blueprintjs/core';
import LazyLoad from 'react-lazyload';
import { withRouter } from 'react-router';
import styles from './PodcastPage.css';
import LoadingPage from '../utils/LoadingPage';
import { removeTag } from '../utils/helper';
import Episode from './Episode';

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
    this.fetchRSS(decodeURIComponent(this.props.match.params.rss));
  }

  fetchRSS = async (feedUrl) => {
    const response = await axios.get(feedUrl);
    const podcast = await new Promise((resolve) => {
      parseString(response.data, (err, result) => {
        resolve(result);
      });
    });
    this.setState({ podcast });
  }

  onBackClick = (event) => {
    event.preventDefault();
    this.props.history.goBack();
  }

  renderEpisodes() {
    const { channel } = this.state.podcast.rss;
    return this.state.podcast.rss.channel[0].item.map(episode => (
      <div className={styles.podcast__episode}>
        <LazyLoad height="100%" overflow throttle={100}>
          <Episode episode={episode} image={channel[0]['itunes:image'][0].$.href} />
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
                      src={removeTag(podcast.rss.channel[0]['itunes:image'][0].$.href)}
                      alt="podcast artwork"
                    />
                  </div>
                  <h3>{removeTag(podcast.rss.channel[0].title[0])}</h3>
                  <small>{removeTag(podcast.rss.channel[0]['itunes:author'][0])}</small>
                  <p className={styles.podcast__description}>{removeTag(podcast.rss.channel[0]['itunes:summary'][0])}</p>
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
