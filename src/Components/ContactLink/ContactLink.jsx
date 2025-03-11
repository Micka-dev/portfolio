import './contactLink.scss'
import React from 'react'

const ContactLink = ({ href, ariaLabel, title, iconClass }) => {
  return (
    <a
      className="contact-links_box-container"
      href={href}
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      title={title}
      target="_blank"
    >
      <div className="contact-links">
        <i className={`contact-links_icon ${iconClass}`} aria-hidden="true"></i>
      </div>
    </a>
  )
}

export default ContactLink
