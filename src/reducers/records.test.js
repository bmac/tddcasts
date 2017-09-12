import createStore from '../create-store'
import { selectQuery } from './index'

describe('records reducer test', function() {

  it('should return saved queries', function() {
    let store = createStore()

    store.dispatch({
      type: 'UPDATE_RECORDS',
      query: 'recent',
      document: {
        data: [{
          type: 'Episode',
          id: '1',
          attributes: {
            title: '7.08- The Political Question',
          },
          relationships: {
            podcast: {
              data: {
                type: 'Podcast',
                id: '1'
              }
            },
          }
        }],
        included: [
          {
            type: 'Podcast',
            id: '1',
            attributes: {
              title: 'Revolutions'
            }
          }
        ]
      }
    })

    expect(selectQuery(store.getState(), 'recent'))
      .toEqual([{
        id: '1',
        title: '7.08- The Political Question',
        podcast: {
          id: '1',
          title: 'Revolutions'
        }
      }])
  })
})
