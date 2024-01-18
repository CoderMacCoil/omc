import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className=" bg-primary-dark dark:bg-primary-dark transition duration-300 min-h-screen">
    <App />
    </div>
  </React.StrictMode>,
)
