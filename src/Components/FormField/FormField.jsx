import './formField.scss'
import React from 'react'

const FormField = ({ config, formData, handleChange, errors }) => (
  <div className="contactForm_form-group">
    <label className="contactForm_form-label" htmlFor={config.name}>
      {config.label} {config.required && <span className="required">*</span>}
    </label>
    {config.type === 'textarea' ? (
      <textarea
        id={config.name}
        name={config.name}
        placeholder={config.placeholder}
        value={formData[config.name]}
        onChange={handleChange}
        className="contactForm_input-field"
        aria-describedby={
          errors[config.name] ? `${config.name}-error` : undefined
        }
        aria-invalid={errors[config.name] ? 'true' : 'false'}
      />
    ) : (
      <input
        type={config.type}
        id={config.name}
        name={config.name}
        placeholder={config.placeholder}
        value={formData[config.name]}
        onChange={handleChange}
        className="contactForm_input-field"
        aria-describedby={
          errors[config.name] ? `${config.name}-error` : undefined
        }
        aria-invalid={errors[config.name] ? 'true' : 'false'}
      />
    )}
    {errors[config.name] && (
      <span className="error">{errors[config.name]}</span>
    )}
  </div>
)

export default FormField
