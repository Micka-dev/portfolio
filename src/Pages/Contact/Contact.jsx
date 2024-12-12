import './contact.scss'
import React, { useState, useEffect } from 'react'
import formDataConfig from '../../Datas/FormData/formData.json'
import FormField from '../../Components/FormField/FormField'
import ContactLink from '../../Components/ContactLink/ContactLink'

import emailjs from '@emailjs/browser'

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    business: '',
    subject: '',
    message: '',
  })

  const [errors, setErrors] = useState({})
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [generalError, setGeneralError] = useState('')
  const [config, setConfig] = useState({})

  useEffect(() => {
    setConfig(formDataConfig)
  }, [])

  const validate = () => {
    let formErrors = {}
    Object.keys(config).forEach((key) => {
      if (
        config[key].required &&
        (!formData[key] || formData[key].trim() === '')
      ) {
        formErrors[key] = `${config[key].label} requis`
      }
    })
    setErrors(formErrors)
    if (Object.keys(formErrors).length > 0) {
      setGeneralError('Veuillez remplir tous les champs obligatoires.')
      return false
    }
    setGeneralError('')
    return true
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    setFormSubmitted(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) {
      console.log('Form submitted', formData)
      sendEmail()
      setFormSubmitted(true)
      resetForm()
    }
  }

  const sendEmail = () => {
    const serviceID = 'service_r8r36g7'
    const templateID = 'template_9201qhy'
    const userID = 'uvc5KOhCqFw8aUa9y'
    emailjs.sendForm(serviceID, templateID, '#contactForm', userID).then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text)
        setFormSubmitted(true)
        resetForm()
      },
      (err) => {
        console.log('FAILED...', err)
      }
    )
  }

  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      business: '',
      subject: '',
      message: '',
    })
  }

  return (
    <main className="contact_container">
      <h1 className="contact_container_title">Contactez moi</h1>
      <p className="contact_container_text">
        Discutons de votre idée, projet ou de tout autre chose !
      </p>
      {Object.keys(config).length > 0 && (
        <form id="contactForm" className="contactForm" onSubmit={handleSubmit}>
          <div className="bloc">
            <div className="bloc_first-part">
              {Object.keys(config)
                .slice(0, 3)
                .map((key) => (
                  <FormField
                    key={key}
                    config={config[key]}
                    formData={formData}
                    handleChange={handleChange}
                    errors={errors}
                  />
                ))}
            </div>
            <div className="bloc_second-part">
              {Object.keys(config)
                .slice(3, 6)
                .map((key) => (
                  <FormField
                    key={key}
                    config={config[key]}
                    formData={formData}
                    handleChange={handleChange}
                    errors={errors}
                  />
                ))}
            </div>
          </div>
          <FormField
            config={config.message}
            formData={formData}
            handleChange={handleChange}
            errors={errors}
          />
          {formSubmitted && (
            <div className="confirmation-message">
              Votre message a été envoyé avec succès !
            </div>
          )}
          {generalError && (
            <div className="error general-error" aria-live="polite">
              {generalError}
            </div>
          )}
          <div className="box-button">
            <button type="submit" className="submit-button">
              Envoyer
            </button>
          </div>
        </form>
      )}
      <div className="contact-links_main-container">
        <ContactLink
          href="mailto:mickael.doucere@gmail.com"
          ariaLabel="M'envoyer un email"
          title="M'envoyer un email"
          iconClass="fa-solid fa-at"
          text="mickael.doucere@gmail.com"
        />
        <ContactLink
          href="https://www.linkedin.com/in/mickael-doucere/"
          ariaLabel="Me retrouver sur LinkedIn"
          title="Me retrouver sur LinkedIn"
          iconClass="fa-brands fa-linkedin"
          text="Mickaël Douceré"
        />
        <ContactLink
          href="https://github.com/Micka-dev"
          ariaLabel="Me retrouver sur GitHub"
          title="Me retrouver sur GitHub"
          iconClass="fa-brands fa-github"
          text="Micka-dev"
        />
      </div>
    </main>
  )
}

export default Contact
