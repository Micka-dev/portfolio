import React, { useEffect, useState } from 'react'
import './gallery.scss'
import ArrowRight from '../../Assets/Arrow/ArrowRight.svg'
import ArrowLeft from '../../Assets/Arrow/ArrowLeft.svg'

function Gallery({ pictures }) {
  const [currentPicture, setCurrentPicture] = useState(0)
  const [touchStartX, setTouchStartX] = useState(0)
  const [touchEndX, setTouchEndX] = useState(0)

  useEffect(() => {
    setCurrentPicture(0)
  }, [pictures])

  const nextSlide = () => {
    setCurrentPicture((currentPicture + 1) % pictures.length)
  }

  const previousSlide = () => {
    setCurrentPicture((currentPicture - 1 + pictures.length) % pictures.length)
  }

  const handleTouchStart = (e) => {
    setTouchStartX(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    const distance = touchStartX - touchEndX
    if (distance > 50) nextSlide()
    if (distance < -50) previousSlide()
  }

  const handleKeyPress = (event, action) => {
    if (event.key === 'Enter') action()
  }

  return (
    <section className="carousel-container">
      <div className="works-carousel">
        {pictures.map(
          (picture, index) =>
            currentPicture === index && (
              <img
                key={picture}
                src={picture}
                alt={`Captures du site ${index + 1} sur ${pictures.length}`}
                className="works-carousel_slide"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              />
            )
        )}

        {pictures.length > 1 && (
          <div className="slideCounter">
            {pictures.map((_, index) => (
              <span
                key={index}
                className={`indicator ${
                  currentPicture === index ? 'active' : ''
                }`}
                aria-hidden="true"
              />
            ))}
          </div>
        )}

        {pictures.length > 1 && (
          <img
            className="btn arrowLeft"
            tabIndex="0"
            aria-label="Précédent"
            src={ArrowLeft}
            alt="icon flèche gauche"
            onClick={previousSlide}
            onKeyDown={(event) => handleKeyPress(event, previousSlide)}
            aria-hidden="true"
          />
        )}

        {pictures.length > 1 && (
          <img
            className="btn arrowRight"
            tabIndex="0"
            aria-label="Suivant"
            src={ArrowRight}
            alt="icon flèche droite"
            onClick={nextSlide}
            onKeyDown={(event) => handleKeyPress(event, nextSlide)}
            aria-hidden="true"
          />
        )}
      </div>
    </section>
  )
}

export default Gallery
