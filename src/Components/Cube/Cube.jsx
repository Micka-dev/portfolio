import React, { useState, useEffect, useRef } from 'react'
import technologies from '../../Datas/Technologies/technologies-outils.json'
import './cube.scss'

const faceNames = ['front', 'back', 'right', 'left', 'top', 'bottom']

function Cube() {
  const itemsPerPage = 6
  const totalPages = Math.ceil(technologies.length / itemsPerPage)

  const [currentPage, setCurrentPage] = useState(0)

  const cubeRef = useRef(null)
  const iterationCount = useRef(0)

  const getCurrentTechs = (page) => {
    const start = page * itemsPerPage
    let currentTechs = technologies.slice(start, start + itemsPerPage)

    if (currentTechs.length < itemsPerPage) {
      const remaining = itemsPerPage - currentTechs.length
      currentTechs = currentTechs.concat(technologies.slice(0, remaining))
    }

    return currentTechs
  }

  const currentTechs = getCurrentTechs(currentPage)

  useEffect(() => {
    const cubeEl = cubeRef.current

    const handleAnimationIteration = () => {
      iterationCount.current += 1
      if (iterationCount.current % 2 === 1) {
        setCurrentPage((prevPage) => (prevPage + 1) % totalPages)
      }
    }

    cubeEl.addEventListener('animationiteration', handleAnimationIteration)

    return () => {
      cubeEl.removeEventListener('animationiteration', handleAnimationIteration)
    }
  }, [totalPages])

  return (
    <div className="cube-container">
      <div className="cube" ref={cubeRef}>
        {faceNames.map((face, index) => {
          const tech = currentTechs[index] || {}
          return (
            <div key={face} className={`face ${face}`}>
              {tech.source ? (
                <img
                  src={process.env.PUBLIC_URL + tech.source}
                  alt={tech.name}
                  title={tech.name}
                />
              ) : null}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Cube
