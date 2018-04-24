import _ from 'lodash';
import { GET_SUBSCRIBED, SUBSCRIBE, UNSUBSCRIBE } from '../actions';

export default function subscribedPodcasts(state = {}, action) {
  switch (action.type) {
    case GET_SUBSCRIBED:
      return action.payload;
    case SUBSCRIBE:
      return { ...state, [action.payload.key]: action.payload };
    case UNSUBSCRIBE:
      return _.omit(state, action.payload.key);
    default:
      return state;
  }
}
