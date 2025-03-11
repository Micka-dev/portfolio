import React from 'react'
import PropTypes from 'prop-types'
import './techKey.scss'

function TechKey({ tech, delay, variant }) {
  const baseClass = variant ? 'key key2' : 'key'
  const delayClass = variant ? `delay2-${delay}` : `delay-${delay}`

  return (
    <div className={`${baseClass} ${delayClass}`}>
      <img
        className="logo"
        src={process.env.PUBLIC_URL + tech.source}
        alt={tech.name}
        title={tech.name}
      />
    </div>
  )
}

TechKey.propTypes = {
  tech: PropTypes.shape({
    source: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  delay: PropTypes.number.isRequired,
  variant: PropTypes.string, // le variant est optionnel
}

export default TechKey
