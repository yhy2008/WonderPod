// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import searchedPodcasts from './podcasts';

const rootReducer = combineReducers({
  router,
  searchedPodcasts
});

export default rootReducer;
