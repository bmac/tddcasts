import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectQuery } from '../../reducer'
import { fetchRecentEpisodes } from './actions'
import Episode from './components/episode'
import groupBy from 'lodash/groupBy'
import './home.css'

export class IndexPage extends Component {
  componentDidMount() {
    this.props.fetchRecentEpisodes()
  }
  render() {
    let episodeGrouping = groupBy(this.props.episodes, (episode) => {
      let pubDate = new Date(episode.published_date)
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
              <h3 className="group-title">{new Date(episodes[0].published_date).toLocaleDateString()}</h3>
              {episodes.map(episode => (<Episode episode={episode} key={episode.id} />))}
            </section>
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    episodes: selectQuery(state, 'recent-episodes'),
  }
}

const mapDispatchToProps = {
  fetchRecentEpisodes
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage)
