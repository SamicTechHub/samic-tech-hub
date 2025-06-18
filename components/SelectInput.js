import React from 'react'
import style from "../styles/component.module.css"

function SelectInput({label, placeholder, options, value, onChange}) {
  return (
    <div className={style.inputGroup}>
        <label>{label}</label>
        <select onChange={onChange} value={value} placeholder={placeholder}>
            <option>{label}</option>
            {
            
                options && options.map((option, index)=>{
        
                    return(
                        <option key={index} value={option.value}>{option.label}</option>
                    )
                })
            }
        </select>
    </div>
  )
}

export default SelectInput
