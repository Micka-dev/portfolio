import React, { useState } from 'react'

import './gallery.scss'

import ArrowRight from '../../Assets/Arrow/ArrowRight.svg'
import ArrowLeft from '../../Assets/Arrow/ArrowLeft.svg'

function Gallery({ pictures }) {
  const [currentPicture, setCurrentPicture] = useState(0)
  console.log('pictures', pictures)

  const nextSlide = () => {
    setCurrentPicture((currentPicture + 1) % pictures.length)
  }

  const previousSlide = () => {
    const newCurrentPicture = currentPicture - 1
    if (newCurrentPicture < 0) {
      setCurrentPicture(pictures.length - 1)
      return
    }
    setCurrentPicture(currentPicture - 1)
  }

  const handleKeyPress = (event, action) => {
    if (event.key === 'Enter') {
      action()
    }
  }

  return (
    <>
      <div className="carousel-container">
        <div className="works-carousel ">
          {pictures.map((picture, index) =>
            currentPicture === index ? (
              <img
                key={picture}
                src={picture}
                alt=""
                className="works-carousel_slide"
              />
            ) : null
          )}

          {pictures.length === 1 ? null : (
            <span className="slideCounter">
              {currentPicture + 1}/{pictures.length}
            </span>
          )}

          {pictures.length > 1 && (
            <img
              className="btn arrowLeft"
              tabindex="0"
              aria-label="Précédent"
              src={ArrowLeft}
              alt="icon flèche gauche"
              onClick={previousSlide}
              onKeyPress={(event) => handleKeyPress(event, previousSlide)}
            />
          )}

          {pictures.length > 1 && (
            <img
              className="btn arrowRight"
              tabindex="0"
              aria-label="suivant"
              src={ArrowRight}
              alt="icon flèche droite"
              onClick={nextSlide}
              onKeyPress={(event) => handleKeyPress(event, nextSlide)}
            />
          )}
        </div>
      </div>
    </>
  )
}

export default Gallery
