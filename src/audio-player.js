import React from 'react'
import { connect } from 'react-redux'
import { selectCurrentEpisode } from './reducers'
import { Line } from 'rc-progress';
import './audio-player.css'

export class AudioPlayer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isPlaying: this.props.autoplay,
    }
    this.playEpisode = this.playEpisode.bind(this)
    this.pauseEpisode = this.pauseEpisode.bind(this)
    this.updateProgress = this.updateProgress.bind(this)
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
        this.audio.currentTime = 120
        window.requestAnimationFrame(this.updateProgress)
      }
    }
  }

  playPercent() {
    let audio = this.audio
    return ((audio.currentTime / audio.duration) * 100) || 0
  }

  updateProgress() {
    console.log('updateProgress', this.playPercent())
    if (this.state.isPlaying) {
      this.forceUpdate()
      window.requestAnimationFrame(this.updateProgress)
    }
  }

  playEpisode() {
    this.audio.play()
    this.setState({
      isPlaying: true,
    })
    window.requestAnimationFrame(this.updateProgress)
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
          <svg width="25px" height="25px" viewBox="60 22 15 16" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="PauseBtn-2" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(60.000000, 22.000000)"><path d="M0,0.991339547 C0,0.443837833 0.447459618,0 1.00111708,0 L3.66554959,0 C4.21845128,0 4.66666667,0.457197498 4.66666667,0.991339547 L4.66666667,14.8562795 C4.66666667,15.4037812 4.21920705,15.847619 3.66554959,15.847619 L1.00111708,15.847619 C0.448215384,15.847619 0,15.3904215 0,14.8562795 L0,0.991339547 Z" id="Rectangle-Left" fill="currentColor"></path><path d="M9.33333333,0.991339547 C9.33333333,0.443837833 9.78079295,0 10.3344504,0 L12.9988829,0 C13.5517846,0 14,0.457197498 14,0.991339547 L14,14.8562795 C14,15.4037812 13.5525404,15.847619 12.9988829,15.847619 L10.3344504,15.847619 C9.78154872,15.847619 9.33333333,15.3904215 9.33333333,14.8562795 L9.33333333,0.991339547 Z" id="Rectangle-Right" fill="currentColor"></path></g></svg>
        </button>
      )
    }
    return (
      <button type="button" className="play-button" onClick={this.playEpisode}>
        <svg width="25px" height="25px" viewBox="60 21 15 18" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="PlayBtn-2" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(60.000000, 22.000000)"><path d="M13.6891593,7.74261351 C14.1009891,7.98522993 14.1062298,8.37550147 13.6891593,8.62120529 L0.745683654,16.2464437 C0.333853944,16.4890602 1.60258951e-15,16.3460052 1.60258951e-15,15.9107611 L0,0.453057719 C0,0.0250488936 0.328613225,-0.128328748 0.745683654,0.117375075" id="Triangle" fill="currentColor"></path></g></svg>
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
        <div className="controls ib">
          {this.renderPlayButton()}
        </div>
        <div className="meta-info ib">
          <div className="podcast-title">{episode.podcastTitle}</div>
          <div className="episode-title">{episode.title}</div>
        </div>
        <Line percent={this.playPercent()} strokeWidth=".25" strokeColor="#f5dd5d" trailColor="#417690" />
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
    episode: selectCurrentEpisode(state),
  }
}

export default connect(mapStateToProps)(AudioPlayer)
