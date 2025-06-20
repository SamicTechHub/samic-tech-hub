import React from 'react'
import style from "../styles/component.module.css"
import {
    MailFilled, PhoneFilled, GooglePlusSquareFilled, FacebookFilled, InstagramFilled, WhatsAppOutlined 
} from "@ant-design/icons"
import Link from 'next/link'
import { WhatsApp } from '@material-ui/icons'

function Footer() {
  return (
    <div className={style.footerContainer}>
      {/* <div className={style.newsletter}>
        <input placeholder='Enter Email Here to Receive Information and Updates about our Programmes' />
        <button className='primaryBtn'>Subscribe Now</button>
      </div> */}

      <div className={style.aboutNav}>
        <div className={style.aboutColumn}>
            <h3>Samic</h3>
            <p>9, Samic Tech Hub, Beside Azeez Hotel, J&P Area, Moniya, Ibadan.</p>
            <div className={style.socials}>
            <a href='#'><FacebookFilled /></a> <a href='#'><InstagramFilled /></a> 
            {/* <a href='#'><WhatsAppOutlined /></a> */}
            </div>
        </div>
        <div className={style.aboutColumn}>
            <h3>Company</h3>
            <Link href="/about">Who we are</Link>
            
        </div>
        <div className={style.aboutColumn}>
            <h3>Programs</h3>
            <p>Web Designing</p>
            <p>UI/UX Design</p>
            <p>Digital Marketing</p>
        </div>
        <div className={style.aboutColumn}>
            <h3>Contact</h3>
            <p><PhoneFilled /> +234 801 234 5678</p>
            <a href="mailto:Info@samictechhub.com"><GooglePlusSquareFilled /> Info@samictechhub.com</a>
        </div>
      </div>
        <div className={style.copyright}>
            <p>© Copyright 2022, All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer
