import React, { Component } from 'react';

const Episode = ({episode, playEpisode}) => {
  return (
    <article key={episode.id} className="episode">
      <img className="episode-image" src={episode.image} alt={episode.title} />
      <div className="title">
        <div className="podcast-title">{episode.podcast.title}</div>
        <div className="episode-title">{episode.title}</div>
      </div>
      <div className="episode-duration">{episode.duration}</div>
      <button className="play-episode" role="button" onClick={playEpisode.bind(null, episode)}>Play</button>
    </article>
  )
}

Episode.defaultProps = {
  playEpisode: function() {}
}
export default Episode;
