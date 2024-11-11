import React from 'react'

import Router from '../Routers/Router/Router.jsx'

import Header from '../Layout/Header/Header.jsx'
import Footer from '../Layout/Footer/Footer.jsx'
import { BrowserRouter } from 'react-router-dom'

import '../index.css'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="main-container">
        <Router />
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
