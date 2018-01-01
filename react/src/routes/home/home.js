import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectQuery, selectCurrentEpisode } from '../../reducers'
import { fetchRecentEpisodes, playEpisode } from './actions'
import Episode from './components/episode'
import groupBy from 'lodash/groupBy'
import './home.css'

export class IndexPage extends Component {
  componentDidMount() {
    this.props.fetchRecentEpisodes()
  }
  render() {
    let episodeGrouping = groupBy(this.props.episodes, (episode) => {
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
              {episodes.map(episode => (<Episode episode={episode} key={episode.id} playEpisode={this.props.playEpisode} isPlaying={episode === this.props.currentEpisode }/>))}
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
    currentEpisode: selectCurrentEpisode(state),
  }
}

const mapDispatchToProps = {
  fetchRecentEpisodes,
  playEpisode,
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage)
