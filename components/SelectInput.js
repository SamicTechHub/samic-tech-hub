import React from 'react'
import style from "../styles/component.module.css"

function SelectInput({label, placeholder, options}) {
  return (
    <div className={style.inputGroup}>
        <label>{label}</label>
        <select placeholder={placeholder}>
            <option>Preferred Stack</option>
            {
                options && options.map((option, index)=>{
                    return(
                        <option key={index}>{option}</option>
                    )
                })
            }
        </select>
    </div>
  )
}

export default SelectInput
