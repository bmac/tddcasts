
const host = process.env.REACT_APP_HOST || ''

export const fetchRecentEpisodes = () => dispatch => {
  return fetch(host + '/api/episode/')
    .then(response => response.json())
    .then(document => {
      dispatch({
        type: 'UPDATE_RECORDS',
        results: document.results,
      })
    })
}



export const playEpisode = (episode) => {
  return {
    type: 'PLAY_EPISODE',
    episode,
  }
}
