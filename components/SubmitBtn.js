import React from 'react'
import style from "../styles/component.module.css"

function SubmitBtn({actionText}) {
  return (
    <div className={style.inputGroup}>
      <button className={style.submitBtn}> {actionText} </button>
    </div>
  )
}

export default SubmitBtn
