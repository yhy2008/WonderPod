import axios from 'axios';
import Message from '../utils/Message';
import {
  getSubscribedFromCache,
  subscribeToCache,
  unsubscribeFromCache,
  getPlaylistFromCache,
  addToPlaylistCache,
  removeFromPlaylistCache
} from '../utils/data';

export const SEARCH_PODCASTS = 'SEARCH_PODCASTS';
export const PLAY_EPISODE = 'PLAY_EPISODE';
export const GET_SUBSCRIBED = 'GET_SUBSCRIBED';
export const SUBSCRIBE = 'SUBSCRIBE';
export const UNSUBSCRIBE = 'UNSUBSCRIBE';
export const GET_PLAYLIST = 'GET_PLAYLIST';
export const ADD_TO_PLAYLIST = 'ADD_TO_PLAYLIST';
export const REMOVE_FROM_PLAYLIST = 'REMOVE_FROM_PLAYLIST';

const SEARCH_URI = 'https://itunes.apple.com/search?media=podcast&term=';

export function searchPodcasts(term) {
  const request = axios.get(`${SEARCH_URI}${encodeURIComponent(term)}`);
  return (dispatch) => {
    request.then(data => dispatch({
      type: SEARCH_PODCASTS,
      payload: data
    })).catch(err => {
      if (err) {
        Message.show({ message: '网络请求错误' });
      }
    });
  };
}

export function playEpisode(episode) {
  return (dispatch) => {
    dispatch({
      type: PLAY_EPISODE,
      payload: episode
    });
  };
}

export function getSubscribed() {
  const podcasts = getSubscribedFromCache();
  return (dispatch) => {
    dispatch({
      type: GET_SUBSCRIBED,
      payload: podcasts
    });
  };
}

export function subscribe(podcast) {
  subscribeToCache(podcast);
  return (dispatch) => {
    dispatch({
      type: SUBSCRIBE,
      payload: podcast
    });
  };
}

export function unsubscribe(podcast) {
  unsubscribeFromCache(podcast);
  return (dispatch) => {
    dispatch({
      type: UNSUBSCRIBE,
      payload: podcast
    });
  };
}

export function getPlaylist() {
  const playlist = getPlaylistFromCache();
  return (dispatch) => {
    dispatch({
      type: GET_PLAYLIST,
      payload: playlist
    });
  };
}

export function addToPlaylist(episode) {
  addToPlaylistCache(episode);
  return (dispatch) => {
    dispatch({
      type: ADD_TO_PLAYLIST,
      payload: episode
    });
  };
}

export function removeFromPlaylist(episode) {
  removeFromPlaylistCache(episode);
  return (dispatch) => {
    dispatch({
      type: REMOVE_FROM_PLAYLIST,
      payload: episode
    });
  };
}
