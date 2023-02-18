import React from 'react'
import style from "../styles/component.module.css"

function TextInputField({inputLabel: label, placeholder, type, value, onchange}) {
  return (
    <div className={style.inputGroup}>
        <label>{label}</label>
        <input value={value} onChange={onchange} placeholder={placeholder} type={type} />
    </div>
  )
}

export default TextInputField
