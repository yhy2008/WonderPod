// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import searchedPodcasts from './searched_podcasts';
import subscribedPodcasts from './subscribed_podcasts';
import episode from './episode';
import playlist from './playlist';
import playTime from './play_time';
import autoplay from './autoplay';

const rootReducer = combineReducers({
  router,
  searchedPodcasts,
  subscribedPodcasts,
  episode,
  playlist,
  playTime,
  autoplay
});

export default rootReducer;
