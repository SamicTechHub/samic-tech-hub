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
            <p>No. 2, Samic Tech Hub, Opposite Azeez Restaurant, Bitemore Junction J&P, Moniya, Ibadan.</p>
            <div className={style.socials}>
            <a href='https://www.facebook.com/share/1D1nM2Pr7X/' target='_blank' rel='noopener noreferrer'><FaFacebook /></a>
            <a href='https://www.instagram.com/samic_techhub?igsh=MW1yZmExZzloZ2hzZw==' target='_blank' rel='noopener noreferrer'><FaInstagram /></a> 
            {/* <a href='#'><WhatsAppOutlined /></a> */}
            </div>
        </div>
        <div className={style.aboutColumn}>
            <h3>Company</h3>
            <Link href="/about" className={style.link} >Who we are</Link>
            
        </div>
        <div className={style.aboutColumn}>
            <h3>Programs</h3>
            <Link href="/tracks/fullstack" className={style.link}>Full Stack Development</Link>
            <Link href="/tracks/frontend"className={style.link}>Frontend Development</Link>
            <Link href="/tracks/backend" className={style.link}>Backend Development</Link>
            <Link href= "/tracks/uiux" className={style.link}>UI/UX Design</Link>
            <Link href= "/tracks/digitalMarketing" className={style.link}>Digital Marketing</Link>
            <Link href= "/tracks/productManagement" className={style.link}>Product management</Link>
        </div>
        <div className={style.aboutColumn}>
            <h3>Contact</h3>
            <a href="tel:+2347063188981" className={style.link}>+234 906 284 3490</a>
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
