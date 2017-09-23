const initalState = {
  episode: undefined,
  isPlaying: false,
}

export default function reducer(state = initalState, action) {
   switch (action.type) {
     // case 'PLAY_EPISODE':
     //   return {
     //     isPlaying: true,
     //     episode: action.episode,
     //   }
     default:
       return state
   }
}

export const selectCurrentEpisode = (state) => {
  return state.episode
}

export const selectIsPlaying = (state) => {
  return state.isPlaying
}
