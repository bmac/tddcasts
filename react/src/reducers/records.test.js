import createStore from '../create-store'
import { selectQuery } from './index'

describe('records reducer test', function() {

  it('should return saved queries', function() {
    let store = createStore()

    store.dispatch({
      type: 'UPDATE_RECORDS',
      results: [{
        title: '7.08- The Political Question',
        podcastTitle: 'Revolutions',
        publishedDate: '2017-09-01T20:04:06Z',
        duration: 2807.797583,
        currentTime: 0.0
      }]
    })

    expect(selectQuery(store.getState(), 'recent'))
      .toEqual([{
        title: '7.08- The Political Question',
        podcastTitle: 'Revolutions',
        publishedDate: '2017-09-01T20:04:06Z',
        duration: 2807.797583,
        currentTime: 0.0
      }])
  })
})
