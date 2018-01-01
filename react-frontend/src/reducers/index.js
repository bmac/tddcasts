import { combineReducers } from 'redux'
import records from './records'
import audioPlayer, * as audioPlayerSelectors from './audio-player'

export default combineReducers({
  records,
  audioPlayer,
})


export const selectQuery = (state, query) => state.records

export const selectCurrentEpisode = (state) =>
  audioPlayerSelectors.selectCurrentEpisode(state.audioPlayer)

export const selectIsPlaying = (state) =>
  audioPlayerSelectors.selectIsPlaying(state.audioPlayer)
