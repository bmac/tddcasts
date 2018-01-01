const initalState = []

export default function reducer(state = initalState, action) {
   switch (action.type) {
     case 'UPDATE_RECORDS':
       return action.results
     default:
       return state
   }
}
