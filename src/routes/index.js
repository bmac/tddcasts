import React, { Component } from 'react';

const episodes = [
  {
    id: 1,
    title: '7.08- The Political Question',
    duration: '41 mins',
    publishedDate: 1504527073690,
    image: '/images/b1ccb690-fd97-0130-c6ee-723c91aeae46.jpg',
    podcast: {
      title: 'Revolutions'
    }
  },
  {
    id: 2,
    title: 'Episode 73: A Rampant Rewriter and Overexplainers',
    duration: '39 mins',
    publishedDate: 1504137600000,
    image: '/images/200/9b506b20-c78c-0133-2e8b-6dc413d6d41d.jpg',
    podcast: {
      title: 'Soft Skills Engineering'
    }
  },
  {
    id: 3,
    title: '081: Knocki with John Boyd',
    duration: '44 mins',
    publishedDate: 1504137620000,
    image: '/images/200/370cca60-819b-0131-8551-723c91aeae46.jpg',
    podcast: {
      title: 'The Frontside Podcast'
    }
  },
  {
    id: 4,
    title: 'Episode 68: The Tainted Well',
    duration: '33 mins',
    publishedDate: 1504527073690,
    image: '/5c0a2540-afba-0132-32cb-0b39892d38e0.jpg',
    podcast: {
      title: 'Lore'
    }
  },
]

class IndexPage extends Component {
  render() {
    return (
      <div>
        <h4>Today</h4>
        {episodes.map(episode => {
          return (
            <article key={episode.id} className="episode">
              <img className="episode-image" src={episode.image} alt={episode.title} />
              <div className="podcast-title">{episode.podcast.title}</div>
              <div className="episode-title">{episode.title}</div>
              <div className="episode-duration">{episode.duration}</div>
              <button className="play-episode">Play</button>
            </article>
          )
        }
        )}
      </div>
    );
  }
}

export default IndexPage;
