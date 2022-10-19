import Image from 'next/image'
import React from 'react'
import style from "../styles/component.module.css"

function ProfileTestimonial({name, message, userImage}) {
  return (
    <div className={style.profileTestimonialContainer}>
      <div className={style.profileImage}>
        <Image src={userImage} alt={"Zainab"} layout={"fill"} objectFit={"cover"} />
      </div>
      <div className={style.texts}>
        <h4>{name}</h4>
        <p>{message}</p>
      </div>
    </div>
  )
}

export default ProfileTestimonial
