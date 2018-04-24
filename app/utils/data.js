import _ from 'lodash';

export function getSubscribedFromCache() {
  const podcasts = localStorage.getItem('podcasts');
  return podcasts ? JSON.parse(podcasts) : {};
}

export function subscribeToCache(podcast) {
  const podcasts = getSubscribedFromCache();
  if (!_.isEmpty(podcast)) {
    podcasts[podcast.key] = podcast;
  }
  localStorage.setItem('podcasts', JSON.stringify(podcasts));
}

export function unsubscribeFromCache(podcast) {
  const podcasts = getSubscribedFromCache();
  delete podcasts[podcast.key];
  localStorage.setItem('podcasts', JSON.stringify(podcasts));
}

export function getPlaylistFromCache() {
  const playlist = localStorage.getItem('playlist');
  return playlist ? JSON.parse(playlist) : {};
}

export function addToPlaylistCache(episode) {
  const playlist = getPlaylistFromCache();
  if (!_.isEmpty(episode)) {
    playlist[episode.key] = episode;
  }
  localStorage.setItem('playlist', JSON.stringify(playlist));
}

export function removeFromPlaylistCache(episode) {
  const playlist = getPlaylistFromCache();
  delete playlist[episode.key];
  localStorage.setItem('playlist', JSON.stringify(playlist));
}
