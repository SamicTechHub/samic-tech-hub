import React from 'react'
import style from "../styles/component.module.css"

function TextInputField({inputLabel: label, placeholder, type, value, onChange}) {
  return (
    <div className={style.inputGroup}>
        <label>{label}</label>
        <input value={value} onChange={onChange} placeholder={placeholder} type={type} />
    </div>
  )
}

export default TextInputField