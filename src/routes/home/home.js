import React, { Component } from 'react';
import Episode from './components/episode'
import groupBy from 'lodash/groupBy'
import './home.css'

const episodes = [
  {
    id: 1,
    title: '7.08- The Political Question',
    duration: '41 mins',
    publishedDate: 1504527073690,
    image: '/images/b1ccb690-fd97-0130-c6ee-723c91aeae46.jpg',
    url: 'http://traffic.libsyn.com/revolutionspodcast/7.08-_The_Political_Question_Master.mp3',
    podcast: {
      title: 'Revolutions'
    },
    listeningProgress: {
      lastUpdated: 1,
      duration: 1,
      complete: false
    },
  },
  {
    id: 2,
    title: 'Episode 73: A Rampant Rewriter and Overexplainers',
    duration: '39 mins',
    publishedDate: 1504137600000,
    image: '/images/9b506b20-c78c-0133-2e8b-6dc413d6d41d.jpg',
    podcast: {
      title: 'Soft Skills Engineering'
    }
  },
  {
    id: 3,
    title: '081: Knocki with John Boyd',
    duration: '44 mins',
    publishedDate: 1504137620000,
    image: '/images/370cca60-819b-0131-8551-723c91aeae46.jpg',
    podcast: {
      title: 'The Frontside Podcast'
    }
  },
  {
    id: 4,
    title: 'Episode 68: The Tainted Well',
    duration: '33 mins',
    publishedDate: 1504527073690,
    image: '/images/5c0a2540-afba-0132-32cb-0b39892d38e0.jpg',
    podcast: {
      title: 'Lore'
    }
  },
]

class IndexPage extends Component {
  render() {
    let episodeGrouping = groupBy(episodes, (episode) => {
      let pubDate = new Date(episode.publishedDate)
      return `${pubDate.getFullYear()}-${pubDate.getMonth()}-${pubDate.getDay()}`
    })
    let episodeGroups  = Object.keys(episodeGrouping).sort().reverse().map(key => {
      return episodeGrouping[key]
    })
    return (
      <div>
        {episodeGroups.map((episodes, index) => {
          return (
            <section key={index} className="episode-group">
              <h3 className="group-title">{new Date(episodes[0].publishedDate).toLocaleDateString()}</h3>
              {episodes.map(episode => (<Episode episode={episode} key={episode.id} />))}
            </section>
          )
        })}
      </div>
    );
  }
}

export default IndexPage;
