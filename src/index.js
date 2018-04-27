import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import storeConfig from './store/storeConfig'

const store = storeConfig();

ReactDOM.render(
  <Provider
    store={store}
  >
    <App />
  </Provider>, document.getElementById('root'))
registerServiceWorker();
