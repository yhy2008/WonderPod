// @flow
import React, { Component } from 'react';
import { NonIdealState } from '@blueprintjs/core';
import _ from 'lodash';
import { connect } from 'react-redux';
import PodcastList from '../components/PodcastList';
import { getSubscribed } from '../actions';

type Props = {
  podcasts: Object,
  getSubscribed: Function
};

class SubscribePage extends Component<Props> {
  props: Props;

  componentDidMount() {
    this.props.getSubscribed();
  }

  render() {
    const { podcasts } = this.props;
    return _.isEmpty(podcasts) ?
      (
        <NonIdealState
          visual="search"
          title="还没有订阅"
          description="快快订阅吧"
        />
      ) :
      (
        <PodcastList podcasts={podcasts} title="订阅" />
      );
  }
}

function mapStateToProps({ subscribedPodcasts }) {
  return { podcasts: subscribedPodcasts };
}

export default connect(mapStateToProps, { getSubscribed })(SubscribePage);
