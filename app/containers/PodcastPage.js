// @flow
import React, { Component } from 'react';
import { parseString } from 'xml2js';
import axios from 'axios';
import styles from './PodcastPage.css';
import LoadingPage from '../utils/LoadingPage';
import { removeTag } from '../utils/helper';
import Episode from './Episode';

type Props = {
  feedUrl: string
};

class PodcastPage extends Component {
  props: Props;

  state = {
    podcast: null
  };

  async componentWillMount() {
    const response = await axios.get(this.props.feedUrl);
    const podcast = await new Promise((resolve) => {
      parseString(response.data, (err, result) => {
        resolve(result);
      });
    });
    console.log(podcast);
    this.setState({ podcast });
  }

  renderEpisodes() {
    return this.state.podcast.rss.channel[0].item.map(episode => {
      return (
        <div className={styles.podcast__episode}>
          <Episode episode={episode} />
        </div>
      );
    });
  }

  render() {
    const { podcast } = this.state;
    return podcast !== null ?
      (
        <div className={styles.podcast}>
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
      );
  }
}

export default PodcastPage;
