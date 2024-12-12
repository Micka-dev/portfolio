import './contactLink.scss'
import React from 'react'

const ContactLink = ({ href, ariaLabel, title, iconClass, text }) => {
  return (
    <a
      className="contact-links_box-container"
      href={href}
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      title={title}
      target="_blank"
    >
      <div className="contact-links_link-container">
        <i className={`contact-links_icon ${iconClass}`} aria-hidden="true"></i>
        {text}
      </div>
    </a>
  )
}

export default ContactLink
