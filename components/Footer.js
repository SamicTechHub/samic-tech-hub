import React from 'react'
import style from "../styles/component.module.css"
import {
    MailFilled, PhoneFilled, GooglePlusSquareFilled, TwitterCircleFilled, FacebookFilled, InstagramFilled, GithubFilled
} from "@ant-design/icons"

function Footer() {
  return (
    <div className={style.footerContainer}>
      <div className={style.newsletter}>
        <input placeholder='Enter Email Here to Receive Information and Updates about our Programmes' />
        <button className='primaryBtn'>Subscribe Now</button>
      </div>

      <div className={style.aboutNav}>
        <div className={style.aboutColumn}>
            <h3>Samic</h3>
            <p>9, Samic Tech Hub, Beside Azeez Hotel, J&P Area, Moniya, Ibadan.</p>
            <div className={style.socials}>
            <TwitterCircleFilled /> <FacebookFilled /> <InstagramFilled /> <GithubFilled /> 

            </div>
        </div>
        <div className={style.aboutColumn}>
            <h3>Company</h3>
            <p>Who we are</p>
            <p>Careers</p>
            <p>Blog</p>
        </div>
        <div className={style.aboutColumn}>
            <h3>Programs</h3>
            <p>Web Designing</p>
            <p>UI/UX Design</p>
            <p>Digital Marketing</p>
        </div>
        <div className={style.aboutColumn}>
            <h3>Contact</h3>
            <p><MailFilled /> Info@samictechhub.com</p>
            <p><PhoneFilled /> +234 801 234 5678</p>
            <p><GooglePlusSquareFilled /> Info@samictechhub.com</p>
        </div>
      </div>
        <div className={style.copyright}>
            <p>© Copyright 2022, All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer
