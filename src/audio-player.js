import React from 'react'
import { connect } from 'react-redux'
import { selectIsPlaying, selectCurrentEpisode } from './reducers'

export class AudioPlayer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isPlaying: this.props.autoplay,
    }
    this.playEpisode = this.playEpisode.bind(this)
    this.pauseEpisode = this.pauseEpisode.bind(this)
    this.setupAudio(this.props.episode)
  }

  componentWillReceiveProps({episode}) {
    if (this.props.episode !== episode) {
      this.setupAudio(episode)
    }
  }

  componentWillUnmount() {
    if (this.audio) {
      this.audio.pause()
      this.audio = null
    }
  }

  setupAudio(episode) {
    this.audio = this.audio || this.props.audio
    if (episode) {
      this.audio.src = episode.url

      if (this.props.autoplay) {
        this.audio.play()
      }
    }
  }

  playEpisode() {
    this.audio.play()
    this.setState({
      isPlaying: true,
    })
  }

  pauseEpisode() {
    this.audio.pause()
    this.setState({
      isPlaying: false,
    })
    this.props.updateProgress(this.audio.currentTime)
  }

  renderPlayButton() {
    if (this.state.isPlaying) {
      return (
        <button type="button" className="pause-button" onClick={this.pauseEpisode}>
          Pause
        </button>
      )
    }
    return (
      <button type="button" className="play-button" onClick={this.playEpisode}>
        Play
      </button>
    )
  }

  render() {
    const {episode} = this.props
    if (!episode) {
      return null
    }
    return (
      <div className="audio-player">
        <div className="podcast-title">{episode.podcastTitle}</div>
        <div className="episode-title">{episode.title}</div>
        {this.renderPlayButton()}
      </div>
    )
  }
}

AudioPlayer.defaultProps = {
  updateProgress: function() {},
  get audio() {
    return document.createElement('audio')
  }
}

const mapStateToProps = (state) => {
  return {
    autoplay: selectIsPlaying(state),
    episode: selectCurrentEpisode(state),
  }
}

export default connect(mapStateToProps)(AudioPlayer)
