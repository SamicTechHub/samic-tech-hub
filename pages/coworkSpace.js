import React from 'react'
import HeaderF from "../components/HeaderF"
import style from '../styles/cowork.module.css'
import Image from 'next/image'
import SettingsRemoteIcon from '@mui/icons-material/SettingsRemote';
import Link from 'next/link';

import HomeWorkIcon from '@mui/icons-material/HomeWork';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import WifiIcon from '@mui/icons-material/Wifi';
import HotelIcon from '@mui/icons-material/Hotel';
import PaymentForm from '../components/paymentForm';
import CardPlan from '../components/cardplan';
import Footer from '../components/Footer';

const CoworkSpace = () => {
  return (
    
      <div> 
        <HeaderF />
      <section className={style.bannerSectionContainerFs}>
        <h1  className={style.heading}>
            CoworkSpace
        </h1>
      </section>
      <section>
        
        <div className={style.sectionOne}>
          <Image 
          src={"/img/workspace2.webp"} width={700} height={400} alt={"workspace photo"}  />
          <div>
            <p className={style.iconPara}><SettingsRemoteIcon style={{ fontSize: '2rem', color: '#f39303' }} /> A Customly made space for you </p>
            <p className={style.heading1}>Welcome to our workspace</p>
            <p className={style.paragraph1}>Here, we believe in the power of collaboration,creativity, and continuous growth. Whether you're here to build, learn, innovate, or connect. This environment is designed to support your journey. Feel free to explore the tools and resources around you.</p>
          </div>
        </div>
      </section>
      <section className={style.linkContainer}>
        <div className={style.linkWrapper}>
          {/* <a
            href='/home' className={style.link} ><span className={style.linkText} >Home</span>/coworkspace
          </a> */}
        </div>
      </section>
     
    
     
      <section className={style.mainContainer} >
        <div className={style.container}>
          <h1>We have a workspace that suits you</h1>
          <p>Experience the perfect blend of comfort, functionality, and luxury while you work. Our coworking space is fully equipped with everything you need to stay productive — from fast, reliable free internet to constant electricity that keeps you powered throughout the day. Need a place to stay? We also offer affordable accommodation options for your convenience, elevating your work life has never been easier.</p>
        </div>
        <div>
          <button onClick={()=>router.push("/auth/mentorRegister") } className={style.button}>Reserve a space  →</button>
          
        </div>
        </section>

      <section>
        <div className={style.sectionOne}>
          <Image 
          src={"/img/workprivate.webp"} width={700} height={600} alt={"workspace photo"}  />
        <div className={style.offer}>
          <h1>What we offer</h1>
          <div className={style.bulletPoints}>
            <div className={style.offerone}>
            <div className={ style.description}>
              <h2  style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><HomeWorkIcon sx={{ color: '#d06d00', fontSize: 30 }} /> Conducive Environment</h2>
              <p>Our workspace offers a truly conducive environment, thoughtfully designed to suit you. </p>
            </div>
          </div>
           <div className={style.bulletPoints}>
            <div className={style.offerone}>
            <div className={ style.description}>
              <h2  style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><ElectricBoltIcon  sx={{ color: '#d06d00', fontSize: 30 }} /> 24 hours electricity</h2>
              <p>Enjoy uninterrupted productivity with our reliable 24-hour electricity supply with no disruptions</p>
            </div>
          </div>
           </div>
          
          </div>
          <div className={style.bulletPoints}>
            <div className={style.offerone}>
            
            <div className={ style.description}>
              <h2  style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><WifiIcon sx={{ color: '#d06d00', fontSize: 30 }} /> 24 hours internet supply</h2>
              <p>Stay connected at all times with our fast and reliable 24-hour internet service </p>
            </div>
          </div>
           <div className={style.bulletPoints}>
            <div className={style.offerone}>
           
            <div className={ style.description}>
              <h2  style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><HotelIcon sx={{ color: '#d06d00', fontSize: 30 }}/> Accomodation</h2>
              <p>Enjoy safe, affordable, home away from home accommodation</p>
            </div>
          </div>
           </div>
          
          </div>
        </div>
        </div>
      </section>
     
      <section >
        
       <div className = {style.planSection}>
         <div className={style.planCards}>
          <h1>Our Plan</h1>
            <CardPlan />
          </div>
           <div>
          </div>
        
       </div>

      </section>
       <Footer />
      </div>
      

      
    
    
  )
}

export default CoworkSpace