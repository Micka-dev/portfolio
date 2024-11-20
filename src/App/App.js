import React from 'react'

import Router from '../Routers/Router/Router.jsx'

import Header from '../Layout/Header/Header.jsx'
import Footer from '../Layout/Footer/Footer.jsx'
import { HashRouter } from 'react-router-dom'

import '../index.css'

function App() {
  return (
    <HashRouter>
      <Header />
      <main className="main-container">
        <Router />
      </main>
      <Footer />
    </HashRouter>
  )
}

export default App
