// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import searchedPodcasts from './searched_podcasts';
import subscribedPodcasts from './subscribed_podcasts';
import episode from './episode';
import playlist from './playlist';

const rootReducer = combineReducers({
  router,
  searchedPodcasts,
  subscribedPodcasts,
  episode,
  playlist
});

export default rootReducer;
