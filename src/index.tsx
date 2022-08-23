import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {GlobalStyle} from './styles/createGlobalStyle'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
