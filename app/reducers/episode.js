import { GET_EPISODE, SET_EPISODE } from '../actions';

export const INITIAL_EPISODE = {};

export default function episode(state = INITIAL_EPISODE, action) {
  switch (action.type) {
    case GET_EPISODE:
      return action.payload;
    case SET_EPISODE:
      return action.payload;
    default:
      return state;
  }
}
