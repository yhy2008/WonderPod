import { SET_AUTOPLAY } from '../actions';

export default function autoplay(state = false, action) {
  switch (action.type) {
    case SET_AUTOPLAY:
      return action.payload;
    default:
      return state;
  }
}
