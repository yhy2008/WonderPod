/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import SubscribePage from './containers/SubscribePage';
import SearchPage from './containers/SearchPage';
import PodcastPage from './containers/PodcastPage';
import ConfigPage from './containers/ConfigPage';
import PlaylistPage from './containers/PlaylistPage';

export default () => (
  <App>
    <Switch>
      <Route path="/playlist" component={PlaylistPage} />
      <Route path="/podcasts/:rss" component={PodcastPage} />
      <Route path="/search/:term" component={SearchPage} />
      <Route path="/config" component={ConfigPage} />
      <Route path="/" component={SubscribePage} />
    </Switch>
  </App>
);
