import React from 'react'
import style from "../styles/component.module.css"

function SelectInput({label, placeholder, options, value, onchange}) {
  return (
    <div className={style.inputGroup}>
        <label>{label}</label>
        <select onChange={onchange} value={value} placeholder={placeholder}>
            <option  value="" disabled>{label}</option>
            {
            
                options && options.map((option, index)=>{
        
                    return(
                        <option key={index} value={option}>{option}</option>
                    )
                })
            }
        </select>
    </div>
  )
}

export default SelectInput
