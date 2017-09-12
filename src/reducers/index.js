import { combineReducers } from 'redux'
import records, * as recordsSelectors from './records'
import audioPlayer, * as audioPlayerSelectors from './audio-player'

export default combineReducers({
  records,
  audioPlayer,
})


export const selectQuery = (state, query) =>
  recordsSelectors.selectQuery(state.records, query)


export const selectCurrentEpisode = (state) =>
  audioPlayerSelectors.selectCurrentEpisode(state.audioPlayer)

export const selectIsPlaying = (state) =>
  audioPlayerSelectors.selectIsPlaying(state.audioPlayer)
