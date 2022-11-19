import React from 'react'
import style from "../styles/component.module.css"

function TextInputField({inputLabel: label, placeholder, type}) {
  return (
    <div className={style.inputGroup}>
        <label>{label}</label>
        <input placeholder={placeholder} type={type} />
    </div>
  )
}

export default TextInputField
