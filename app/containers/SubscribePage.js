// @flow
import React, { Component } from 'react';
import { NonIdealState } from '@blueprintjs/core';
import { Link } from 'react-router-dom';
import PodcastList from '../components/PodcastList';

type Props = {};

class SubscribePage extends Component<Props> {
  props: Props;

  render() {
    return (
      <NonIdealState
        visual="search"
        title="没有订阅"
        description="快快订阅吧"
        action={<Link to="/search?term=abc">link</Link>}
      />
      // <PodcastList />
    );
  }
}

export default SubscribePage;
