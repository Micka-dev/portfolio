import React, { useEffect, useState, useRef } from 'react'
import './gallery.scss'
import ArrowRight from '../../Assets/Arrow/ArrowRight.svg'
import ArrowLeft from '../../Assets/Arrow/ArrowLeft.svg'

function Gallery({ pictures }) {
  const [currentPicture, setCurrentPicture] = useState(0)
  const [touchStartX, setTouchStartX] = useState(0)
  const [touchEndX, setTouchEndX] = useState(0)

  const carouselRef = useRef(null)
  const [isFullScreen, setIsFullScreen] = useState(false)

  useEffect(() => {
    setCurrentPicture(0)
  }, [pictures])

  useEffect(() => {
    const handleFullScreenChange = () => {
      setIsFullScreen(!!document.fullscreenElement)
    }
    document.addEventListener('fullscreenchange', handleFullScreenChange)
    return () =>
      document.removeEventListener('fullscreenchange', handleFullScreenChange)
  }, [])

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

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      if (carouselRef.current.requestFullscreen) {
        carouselRef.current.requestFullscreen()
      } else if (carouselRef.current.mozRequestFullScreen) {
        carouselRef.current.mozRequestFullScreen()
      } else if (carouselRef.current.webkitRequestFullscreen) {
        carouselRef.current.webkitRequestFullscreen()
      } else if (carouselRef.current.msRequestFullscreen) {
        carouselRef.current.msRequestFullscreen()
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      }
    }
  }

  return (
    <section className="carousel-container" ref={carouselRef}>
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

      <button
        className="fullscreen-btn"
        onClick={toggleFullScreen}
        aria-label={isFullScreen ? 'Réduire' : 'Plein écran'}
      >
        {isFullScreen ? (
          <i className="fa-solid fa-down-left-and-up-right-to-center"></i>
        ) : (
          <i className="fa-solid fa-up-right-and-down-left-from-center"></i>
        )}
      </button>
    </section>
  )
}

export default Gallery
