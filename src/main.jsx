import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Components/Header'
import SearchSort from './Components/SearchSort'
import Body from './Components/Body'
import Footer from './Components/Footer'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <SearchSort />
    <Body />
    <Footer />
  </React.StrictMode>,
)
