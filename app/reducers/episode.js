import { PLAY_EPISODE } from '../actions';

export const INITIAL_EPISODE = {};

export default function episode(state = INITIAL_EPISODE, action) {
  switch (action.type) {
    case PLAY_EPISODE:
      return action.payload;
    default:
      return state;
  }
}
