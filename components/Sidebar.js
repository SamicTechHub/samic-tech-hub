import React, {useState} from 'react'
import style from "../styles/component.module.css"

function GetName() {
  const [name, setName] = useState("")

  const who = (name) => {
    const dev = name ? name : null;
    return dev
  }

  setName(who("Dev Femzy"))

  return (
    <div className={style.nameContainer}>
      {name}
    </div>
  )
}

export default GetName
