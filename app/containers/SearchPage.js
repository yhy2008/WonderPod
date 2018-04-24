// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PodcastList from '../components/PodcastList';
import { searchPodcasts } from '../actions';

type Props = {
  searchPodcasts: Function,
  podcasts: Object,
  match: Object
};

class SearchPage extends Component<Props> {
  props: Props;

  componentDidMount() {
    this.props.searchPodcasts(this.props.match.params.term);
  }

  componentWillReceiveProps(nextProps) {
    const newTerm = nextProps.match.params.term;
    const oldTerm = this.props.match.params.term;
    if (oldTerm !== newTerm) {
      this.props.searchPodcasts(nextProps.match.params.term);
    }
  }

  render() {
    return (
      <PodcastList podcasts={this.props.podcasts} title="搜索" />
    );
  }
}

function mapStateToProps({ searchedPodcasts }) {
  return { podcasts: searchedPodcasts };
}


export default connect(mapStateToProps, { searchPodcasts })(SearchPage);
