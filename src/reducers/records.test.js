import createStore from '../create-store'
import { selectQuery } from './index'

describe('records reducer test', function() {
let episode = {
        title: '7.08- The Political Question',
        podcastTitle: 'Revolutions',
        publishedDate: '2017-09-01T20:04:06Z',
        duration: 2807.797583,
        currentTime: 0.0
}

  
  it('should return saved queries', function() {
    let store = createStore()

    store.dispatch({
      type: 'UPDATE_RECORDS',
      query: 'recent',
      results: [episode],
    })

    let episodes = selectQuery(store.getState(), 'recent')
    expect(episodes).toEqual([episode])
  })
})
