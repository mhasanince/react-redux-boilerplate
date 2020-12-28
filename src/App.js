import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { ConnectedRouter } from 'connected-react-router'
import pages from 'pages'
import configureStore, { history } from './store/configureStore'
import 'typeface-montserrat'
import 'typeface-source-serif-pro'

const { persistor, store } = configureStore()

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <ConnectedRouter history={history}>{pages}</ConnectedRouter>
    </PersistGate>
  </Provider>
)

export default App
