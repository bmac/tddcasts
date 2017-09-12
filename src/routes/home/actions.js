
const host = process.env.REACT_APP_HOST || ''

export const fetchRecentEpisodes = () => dispatch => {
  return fetch(host + '/api/episode/recent?include=podcast,listening_progress', {
    headers: {
      'Accept': 'application/vnd.api+json'
    }
  })
    .then(response => response.json())
    .then(document => {
      dispatch({
        type: 'UPDATE_RECORDS',
        query: 'recent',
        document
      })
    })
}



export const playEpisode = (episode) => {
  return {
    type: 'PLAY_EPISODE',
    episode,
  }
}
