import React from 'react'
import style from "../styles/component.module.css"
import {
    MailFilled, PhoneFilled, GooglePlusSquareFilled, FacebookFilled, InstagramFilled, WhatsAppOutlined 
} from "@ant-design/icons"
import Link from 'next/link'
// import { WhatsApp } from '@material-ui/icons'
const Footer = () => {
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
            <a href='#'><FacebookFilled /></a>
            <a href='#'><InstagramFilled /></a> 
            {/* <a href='#'><WhatsAppOutlined /></a> */}
            </div>
        </div>
        <div className={style.aboutColumn}>
            <h3>Company</h3>
            <Link href="/about">Who we are</Link>
            
        </div>
        <div className={style.aboutColumn}>
            <h3>Programs</h3>
            <Link href="/fullstack">Full Stack Development</Link>
            <Link href="/frontend">Frontend Development</Link>
            <Link href="/backend">PBackend Development</Link>
            <Link href= "/uiux">UI/UX Design</Link>
            <Link href= "/digitalMarketing">Digital Marketing</Link>
            <Link href= "/productManagement">Product management</Link>
        </div>
        <div className={style.aboutColumn}>
            <h3>Contact</h3>
            <a href="tel:+2347063188981">+234 706 318 8981</a>
            <a href="mailto:Info@samictechhub.com"><GooglePlusSquareFilled /> Info@samictechhub.com</a>
        </div>
      </div>
        <div className={style.copyright}>
            <p>© Copyright 2022, All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer;
