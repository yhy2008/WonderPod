import axios from 'axios';
import Message from '../utils/Message';

export const SEARCH_PODCASTS = 'SEARCH_PODCASTS';

const SEARCH_URI = 'https://itunes.apple.com/search?media=podcast&term=';

export function searchPodcasts(term) {
  const request = axios.get(`${SEARCH_URI}${term}`);
  return (dispatch) => {
    request.then(data => {
      console.log(1);
      dispatch({
        type: SEARCH_PODCASTS,
        payload: data
      });
    }).catch((err) => {
      if (err) {
        Message.show({ message: '网络请求错误' });
      }
    });
  };
}
