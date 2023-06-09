import '@reach/dialog/styles.css'
import './polyfills'

import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'

import App from './App'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const rootElement = document.getElementById('app')!
const root = ReactDOM.createRoot(rootElement)
root.render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>
)
