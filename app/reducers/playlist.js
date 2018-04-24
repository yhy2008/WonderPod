import _ from 'lodash';
import { GET_PLAYLIST, ADD_TO_PLAYLIST, REMOVE_FROM_PLAYLIST } from '../actions';

export default function playlist(state = {}, action) {
  switch (action.type) {
    case GET_PLAYLIST:
      return action.payload;
    case ADD_TO_PLAYLIST:
      return { ...state, [action.payload.key]: action.payload };
    case REMOVE_FROM_PLAYLIST:
      return _.omit(state, action.payload.key);
    default:
      return state;
  }
}
