import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import About from './About.jsx'
import './index.css'
import Router from './components/Router/index.jsx'

const routes = [
  {
    path: '/',
    element: <App />
  },
  {
    path: '/about',
    element: <About />
  }
]

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router routes={routes} />
  </React.StrictMode>
)
