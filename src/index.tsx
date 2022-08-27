import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {GlobalStyle} from './styles/createGlobalStyle'
import {Provider} from 'react-redux'
import {store} from './redux/store'
import './styles/fonts.css'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
