import React from 'react'

const Field = ({ type_label, text_label, type, id, name, placeholder, handleChange, value }) => {
  return (
    <div className="form-group mb-3">
        <label htmlFor={type_label} className='form-label'>{text_label}</label>
        <input type={type} id={id} name={name} className='form-control' placeholder={placeholder} value={value} onChange={handleChange} />
    </div>
  )
}

export default Field;