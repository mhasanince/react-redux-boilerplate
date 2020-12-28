import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

export const DESTROY_SESSION = 'DESTROY_SESSION'

const appReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
  })

const rootReducer = (history) => (state, action) => {
  if (action.type === DESTROY_SESSION) {
    state = undefined
  }

  return appReducer(history)(state, action)
}

export default rootReducer
