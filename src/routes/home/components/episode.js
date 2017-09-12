import React from 'react';
import { formatDuration } from '../../../formatters'

const Episode = ({episode, playEpisode}) => {
  return (
    <article key={episode.id} className="episode">
      <img className="episode-image" src={episode.image} alt={episode.title} />
      <div className="title">
        <div className="podcast-title">{episode.podcastTitle}</div>
        <div className="episode-title">{episode.title}</div>
      </div>
      <div className="episode-duration">{formatDuration(episode.duration, 'seconds')}</div>
      <button className="play-episode" type="button" onClick={playEpisode.bind(null, episode)}>Play</button>
    </article>
  )
}

Episode.defaultProps = {
  playEpisode: function() {}
}
export default Episode;
