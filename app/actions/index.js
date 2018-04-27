import axios from 'axios';
import Message from '../utils/Message';
import {
  getEpisodeFromCache,
  setEpisodeToCache,
  getPlayTimeFromCache,
  setPlayTimeToCache,
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
export const GET_EPISODE = 'GET_EPISODE';
export const SET_EPISODE = 'SET_EPISODE';
export const GET_PLAY_TIME = 'GET_PLAY_TIME';
export const SET_PLAY_TIME = 'SET_PLAY_TIME';
export const SET_AUTOPLAY = 'SET_AUTOPLAY';

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

export function getEpisode() {
  const episode = getEpisodeFromCache();
  return (dispatch) => {
    dispatch({
      type: GET_EPISODE,
      payload: episode
    });
  };
}

export function setEpisode(episode) {
  setEpisodeToCache(episode);
  return (dispatch) => {
    dispatch({
      type: SET_EPISODE,
      payload: episode
    });
  };
}

export function getPlayTime() {
  const playTime = getPlayTimeFromCache();
  return (dispatch) => {
    dispatch({
      type: GET_PLAY_TIME,
      payload: playTime
    });
  };
}

export function setPlayTime(playTime) {
  setPlayTimeToCache(playTime);
  return (dispatch) => {
    dispatch({
      type: SET_PLAY_TIME,
      payload: playTime
    });
  };
}

export function setAutoplay(autoplay) {
  return (dispatch) => {
    dispatch({
      type: SET_AUTOPLAY,
      payload: autoplay
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
