import createStore from '../create-store'
import { selectIsPlaying, selectCurrentEpisode } from './index'

describe('audio player reducer test', function() {

  it('should play an episode', function() {
    let store = createStore()
    let episode = {}
 
    store.dispatch({
      type: 'PLAY_EPISODE',
      episode,
    })

    expect(selectIsPlaying(store.getState())).toBe(true)
    expect(selectCurrentEpisode(store.getState())).toBe(episode)
  })

  it('should pause playing', function() {
    let store = createStore()
    store.dispatch({
      type: 'PLAY_EPISODE',
    })

    store.dispatch({
      type: 'PAUSE',
    })

    expect(selectIsPlaying(store.getState())).toBe(false)
  })

  it('should resume playing', function() {
    let store = createStore()

    store.dispatch({
      type: 'RESUME',
    })

    expect(selectIsPlaying(store.getState())).toBe(true)
  })
})
