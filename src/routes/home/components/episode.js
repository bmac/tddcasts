import React from 'react';
import { formatDuration } from '../../../formatters'
import { connect } from 'react-redux'

export const Episode = ({episode, playEpisode}) => (
  <article className="episode">
    <img src={episode.image} />
    <div className="podcast">{episode.podcast}</div>
    <div className="title">{episode.title}</div>
    <button
      className="play-episode"
      onClick={() => playEpisode(episode) }
      >Play</button>
  </article>
)


Episode.defaultProps = {
  playEpisode: function() {}
  
}
export default connect()(Episode);
