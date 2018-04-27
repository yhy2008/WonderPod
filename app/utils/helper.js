import { parseString } from 'xml2js';
import _ from 'lodash';
import uuidv4 from 'uuid/v4';

export function removeTag(str) {
  return str.replace(/<(?:.|\n)*?>/gm, '');
}

export async function processRSS(xml) {
  const podcast = await new Promise((resolve) => {
    parseString(xml, (err, result) => {
      resolve(result);
    });
  });

  const processedPodcast = {
    image: removeTag(podcast.rss.channel[0]['itunes:image'][0].$.href),
    title: removeTag(podcast.rss.channel[0].title[0]),
    author: removeTag(podcast.rss.channel[0]['itunes:author'][0]),
    description: removeTag(podcast.rss.channel[0]['itunes:summary'][0])
  };

  const items = podcast.rss.channel[0].item.map(item => {
    const image = 'itunes:image' in item ?
      removeTag(item['itunes:image'][0].$.href) :
      processedPodcast.image;
    const description = typeof item.description[0] === 'string' ?
      item.description[0] :
      item.description[0]._;
    const date = new Date(removeTag(item.pubDate[0]))
      .toISOString()
      .slice(0, 10);
    const author = 'itunes.author' in item ?
      removeTag(item['itunes.author'][0]) :
      processedPodcast.author;
    const link = 'link' in item ?
      item.link[0] :
      '#';
    return {
      key: uuidv4(),
      title: removeTag(item.title[0]),
      description: removeTag(description),
      url: removeTag(item.enclosure[0].$.url),
      link,
      image,
      author,
      date
    };
  });
  processedPodcast.items = _.keyBy(items, 'key');

  return processedPodcast;
}

export function processPodcasts(podcasts) {
  const processedPodcasts = podcasts.map(podcast => ({
    key: podcast.collectionId,
    image: podcast.artworkUrl100,
    name: podcast.collectionName,
    feedUrl: podcast.feedUrl
  }));

  return _.keyBy(processedPodcasts, 'key');
}
