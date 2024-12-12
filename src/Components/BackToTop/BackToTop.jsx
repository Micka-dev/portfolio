import React, { useState, useEffect } from 'react'
import './BackToTop.scss'

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.scrollY > 20) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <>
      {isVisible && (
        <button
          id="backToTop"
          title="Retour en haut de la page"
          aria-label="Retour en haut de la page"
          onClick={scrollToTop}
        >
          <i className="fa fa-arrow-up" aria-hidden="true"></i>
        </button>
      )}
    </>
  )
}

export default BackToTop
