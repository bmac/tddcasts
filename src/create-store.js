import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'

import rootReducer from './reducer'

export default (initialState) => {
  
  return createStore(
    rootReducer,
    applyMiddleware(thunk)
  )
}
