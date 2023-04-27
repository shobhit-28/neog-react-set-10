import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { MailDataHandler } from './contexts/mailContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <MailDataHandler>
        <App />
      </MailDataHandler>
    </BrowserRouter>
  </React.StrictMode>,
)
