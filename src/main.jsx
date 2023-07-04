import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import SmoothScrollbar from 'smooth-scrollbar'

SmoothScrollbar.init(document.querySelector("#root"))

ReactDOM.createRoot(document.getElementById('root')).render(
 
  <BrowserRouter>
  <App />
  </BrowserRouter>
  
)
