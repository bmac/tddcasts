import React from 'react'

class AudioPlayer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
    this.playEpisode = this.playEpisode.bind(this)
    this.pauseEpisode = this.pauseEpisode.bind(this)
    this.setupAudio(this.props.episode)
  }

  componentWillReceiveProps({episode}) {
    if (this.props.episode !== episode) {
      this.setupAudio(episode)
    }
  }

  setupAudio(episode) {
    this.audio = document.createElement('audio')
    if (episode) {
      this.audio.src = episode.url
      this.audio.currentTime = this.props.defaultStartTime
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
      <div>
        <div className="podcast-title">{episode.podcast.title}</div>
        <div className="episode-title">{episode.title}</div>
        {this.renderPlayButton()}
      </div>
    )
  }
}

AudioPlayer.defaultProps = {
  updateProgress: function() {},
  defaultStartTime: 110,
}

export default AudioPlayer
