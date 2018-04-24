import { processPodcasts } from '../utils/helper';
import { SEARCH_PODCASTS } from '../actions';

export default function searchedPodcasts(state = {}, action) {
  switch (action.type) {
    case SEARCH_PODCASTS:
      return processPodcasts(action.payload.data.results);
    default:
      return state;
  }
}
