import { GET_PLAY_TIME, SET_PLAY_TIME } from '../actions';

export default function playTime(state = 0, action) {
  switch (action.type) {
    case GET_PLAY_TIME:
      return action.payload;
    case SET_PLAY_TIME:
      return action.payload;
    default:
      return state;
  }
}
