import { NavLink } from 'react-router-dom'
import './contact.scss'
import React, { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const [errors, setErrors] = useState({})
  const [formSubmitted, setFormSubmitted] = useState(false)

  const validate = () => {
    let formErrors = {}
    if (!formData.firstName) formErrors.firstName = 'Prénom requis'
    if (!formData.lastName) formErrors.lastName = 'Nom requis'
    if (!formData.email) formErrors.email = 'Email requis'
    if (!formData.subject) formErrors.subject = 'Sujet requis'
    if (!formData.message) formErrors.message = 'Message requis'
    setErrors(formErrors)
    return Object.keys(formErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) {
      console.log('Form submitted', formData)
      setFormSubmitted(true)
      resetForm()
    }
  }

  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    })
  }

  return (
    <div className="contact_container">
      <form className="contactForm" onSubmit={handleSubmit}>
        <div className="bloc">
          <div className="bloc_first-part">
            <div className="contactForm_form-group">
              <label className="contactForm_form-label" htmlFor="firstName">
                Prénom <span className="required">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="John"
                value={formData.firstName}
                onChange={handleChange}
                className="contactForm_input-field"
              />
              {errors.firstName && (
                <span className="error">{errors.firstName}</span>
              )}
            </div>
            <div className="contactForm_form-group">
              <label
                className="contactForm_form-label order"
                htmlFor="lastName"
              >
                Nom <span className="required">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Doe"
                value={formData.lastName}
                onChange={handleChange}
                className="contactForm_input-field"
              />
              {errors.lastName && (
                <span className="error">{errors.lastName}</span>
              )}
            </div>
            <div className="contactForm_form-group">
              <label className="contactForm_form-label" htmlFor="phone">
                Téléphone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="06 xx xx xx xx"
                value={formData.phone}
                onChange={handleChange}
                className="contactForm_input-field"
              />
            </div>
          </div>
          <div className="bloc_second-part">
            <div className="contactForm_form-group">
              <label className="contactForm_form-label" htmlFor="email">
                Email <span className="required">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="john.doe@gmail.com"
                value={formData.email}
                onChange={handleChange}
                className="contactForm_input-field"
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div className="contactForm_form-group">
              <label className="contactForm_form-label" htmlFor="business">
                Entreprise
              </label>
              <input
                type="tel"
                id="business"
                name="business"
                placeholder="Capgemini"
                value={formData.business}
                onChange={handleChange}
                className="contactForm_input-field"
              />
            </div>
            <div className="contactForm_form-group">
              <label className="contactForm_form-label" htmlFor="subject">
                Sujet <span className="required">*</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Sujet de votre message"
                value={formData.subject}
                onChange={handleChange}
                className="contactForm_input-field"
              />
              {errors.subject && (
                <span className="error">{errors.subject}</span>
              )}
            </div>
          </div>
        </div>

        <div className="contactForm_form-group">
          <label className="contactForm_form-label" htmlFor="message">
            Message <span className="required">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Travaillons ensemble !"
            value={formData.message}
            onChange={handleChange}
            className="contactForm_input-field"
          />
          {errors.message && <span className="error">{errors.message}</span>}
        </div>
        <div className="box-button">
          <button type="submit" className="submit-button">
            Envoyer
          </button>
        </div>
      </form>
      {formSubmitted && (
        <div className="confirmation-message">
          Votre message a été envoyé avec succès !
        </div>
      )}
      <div className="contact-links_main-container">
        <NavLink className="contact-links_box-container" to="">
          <div className="contact-links_link-container">
            <i className="contact-links_icon fa-solid fa-at"></i>
            mickael.doucere@gmail.com
          </div>
        </NavLink>
        <NavLink className="contact-links_box-container" to="">
          <div className="contact-links_link-container">
            <i className="contact-links_icon fa-brands fa-linkedin"></i>
            Mickaël Douceré
          </div>
        </NavLink>
        <NavLink className="contact-links_box-container" to="">
          <div className="contact-links_link-container">
            <i className="contact-links_icon fa-brands fa-github"></i>
            Micka-dev
          </div>
        </NavLink>
      </div>
    </div>
  )
}

export default Contact
