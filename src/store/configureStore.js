import { applyMiddleware, compose, createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createBrowserHistory } from 'history'
import createRootReducer from './reducers/root.reducer'
import appConfig from '../config/config'

const config = {
  key: 'app',
  storage,
  blacklist: [], // ['user', 'form'],
  debug: true, // to get useful logging
}

const middlewares = []
middlewares.push(thunk)

if (appConfig.name !== 'production') {
  const logger = createLogger({
    collapsed: true,
    duration: true,
  })
  middlewares.push(logger)
}

export const history = createBrowserHistory()
middlewares.push(routerMiddleware(history))

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const persistedReducer = persistReducer(config, createRootReducer(history))
const enhancers = [applyMiddleware(...middlewares)]
const persistConfig = { enhancers }
const store = createStore(
  persistedReducer,
  undefined,
  composeEnhancer(...enhancers)
)
const persistor = persistStore(store, persistConfig)
const configureStore = () => ({ persistor, store })

export default configureStore
