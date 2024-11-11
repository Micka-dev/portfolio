import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../../Pages/Home/Home'
import About from '../../Pages/About/About'
import Projects from '../../Pages/Projects/Projects'
import Contact from '../../Pages/Contact/Contact'
import Error from '../../Pages/Error/Error'
import ProjectList from '../../Pages/ProjectList/ProjectList'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<ProjectList />} />
      <Route path="/projects/:workId" element={<Projects />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Error />} />
    </Routes>
  )
}

export default Router
