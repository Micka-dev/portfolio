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

  // Fonction pour basculer en mode plein écran et verrouiller l'orientation en paysage
  const toggleFullScreen = async () => {
    if (!carouselRef.current) {
      console.warn('Élément carousel introuvable.')
      return
    }

    if (!document.fullscreenElement) {
      // Demander le mode plein écran
      try {
        if (carouselRef.current.requestFullscreen) {
          await carouselRef.current.requestFullscreen()
        } else if (carouselRef.current.mozRequestFullScreen) {
          await carouselRef.current.mozRequestFullScreen()
        } else if (carouselRef.current.webkitRequestFullscreen) {
          await carouselRef.current.webkitRequestFullscreen()
        } else if (carouselRef.current.msRequestFullscreen) {
          await carouselRef.current.msRequestFullscreen()
        }
        // Tenter de verrouiller l'orientation en paysage
        if (window.screen.orientation && window.screen.orientation.lock) {
          try {
            await window.screen.orientation.lock('landscape')
            console.log('Orientation verrouillée en paysage.')
          } catch (err) {
            console.error("Impossible de verrouiller l'orientation :", err)
          }
        }
      } catch (err) {
        console.error("Erreur lors de l'activation du plein écran :", err)
      }
    } else {
      // Sortir du mode plein écran
      if (document.exitFullscreen) {
        document.exitFullscreen()
      }
      // Il n'est pas toujours nécessaire (ou possible) de déverrouiller l'orientation manuellement
      if (window.screen.orientation && window.screen.orientation.unlock) {
        window.screen.orientation.unlock()
      }
    }
  }

  return (
    <section
      className={`carousel-container ${isFullScreen ? 'fullscreen' : ''}`}
      ref={carouselRef}
    >
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
