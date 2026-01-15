import React from 'react'
import style from "../styles/component.module.css"
// import {
//     MailFilled, PhoneFilled, GooglePlusSquareFilled, FacebookFilled, InstagramFilled, WhatsAppOutlined 
// } from "@ant-design/icons"
import { FaFacebook, FaInstagram, FaGooglePlusG } from 'react-icons/fa';
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
            <a href='#'><FaFacebook /></a>
            <a href='#'><FaInstagram /></a> 
            {/* <a href='#'><WhatsAppOutlined /></a> */}
            </div>
        </div>
        <div className={style.aboutColumn}>
            <h3>Company</h3>
            <Link href="/about" className={style.link} >Who we are</Link>
            
        </div>
        <div className={style.aboutColumn}>
            <h3>Programs</h3>
            <Link href="/fullstack" className={style.link}>Full Stack Development</Link>
            <Link href="/frontend"className={style.link}>Frontend Development</Link>
            <Link href="/backend" className={style.link}>PBackend Development</Link>
            <Link href= "/uiux" className={style.link}>UI/UX Design</Link>
            <Link href= "/digitalMarketing" className={style.link}>Digital Marketing</Link>
            <Link href= "/productManagement" className={style.link}>Product management</Link>
        </div>
        <div className={style.aboutColumn}>
            <h3>Contact</h3>
            <a href="tel:+2347063188981" className={style.link}>+234 706 318 8981</a>
            <a href="mailto:Info@samictechhub.com" className={style.link}>
              <FaGooglePlusG />
               Info@samictechhub.com</a>
        </div>
      </div>
        <div className={style.copyright}>
            <p>© Copyright 2022, All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer;
