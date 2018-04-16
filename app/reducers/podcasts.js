import { SEARCH_PODCASTS } from '../actions';

export default function searchedPodcasts(state = [], action) {
  switch (action.type) {
    case SEARCH_PODCASTS:
      return action.payload.data.results;
    default:
      return state;
  }
}
