/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import SubscribePage from './containers/SubscribePage';
import SearchPage from './containers/SearchPage';
import PodcastPage from './containers/PodcastPage';

export default () => (
  <App>
    <Switch>
      <Route path="/podcasts/:rss" component={PodcastPage} />
      <Route path="/search/:term" component={SearchPage} />
      <Route path="/" component={SubscribePage} />
    </Switch>
  </App>
);
