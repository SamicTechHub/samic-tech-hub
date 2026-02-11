import React from 'react'
import Head from 'next/head'
// import HeaderF from "../components/HeaderF"
import style from '../styles/cowork.module.css'
import Image from 'next/image'
import { MdSettingsRemote } from "react-icons/md";
import router from 'next/router';
import { MdHomeWork } from "react-icons/md";
import { MdOutlineElectricBolt } from "react-icons/md";
import { FaWifi } from "react-icons/fa6";
import { RiHotelBedFill } from "react-icons/ri";
// import Footer from '../components/FooterSection';
import DeskTypeSelector from "../components/PlanSelector";
// import * as FooterModule from '../components/Footer';
import Footer from "../components/Footer";
// import * as PlanSelectorModule from '../components/PlanSelector';
import { useRef} from 'react';
import HeaderF from '../components/HeaderF';
import CoworkspaceBanner from "../components/CoworkspaceBanner"
import AccordionFAQ from '../components/AccordionFAQ';  
// import CoworkspaceBanner from '../components/CoworkspaceBanner'



const CoworkSpace = () => {

  
 const planRef = useRef(null);
 const handleReserveClick =() => {
  planRef.current?.scrollIntoView({behaviour: 'smooth'});
 };
  
  return (
    
      <div> 
        <Head>
          <title>Samic Tech Hub – Tech Skills Training, Co-Working Space, Software Studio in Ibadan, Moniya </title>
          <meta name="description" content="Samic Tech Hub offers tech skills training, web development programs in Ibadan, Moniya. A modern co-working space for freelancers, startups, remote workers, learners in Ibadan, Moniya. Our services also include software product studio where you can bring your business ideas to reality in Ibadan, Moniya." />
        </Head>

        <HeaderF />
      <section className={style.bannerSectionContainerFs}>
        <h1  className={style.heading}>
            Coworking Space
        </h1>
         <section>
          <CoworkspaceBanner />
                 {/* <CoworkspaceBanner /> */}
              </section>
      </section>
      <i className={style.headingPhrase}>A Professional Workspace design for You ...</i>
      <section>
        
        <div className={style.sectionOne}>
          <Image 
          src={"/img/workspace2.webp"} width={700} height={400} alt={"workspace photo"}  />
          <div>
            
            <p className={style.iconPara}>
              <MdSettingsRemote style={{ fontSize: '2rem', color: '#f39303' }} /> 
              A Customly made space for you </p>
            <p className={style.heading1}>Welcome to our workingspace</p>
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
          
          <button onClick={handleReserveClick} className={style.button}>Reserve a space  →</button>
          
        </div>
        </section>

      <section>
        <div className={style.sectionOne}>
          <Image 
          src={"/img/workprivate.webp"} width={700} height={600} alt={"workspace photo"} priority className={style.imageShiftDown} />
        <div className={style.offer}>
          <h1>What we offer</h1>
          <div className={style.bulletPoints}>
            <div className={style.offerone}>
            <div className={ style.description}>
              <h2  style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <MdHomeWork style={{ color: '#d06d00', fontSize: 30 }} />
                 Conducive Environment</h2>
              <p>Our workspace offers a truly conducive environment, thoughtfully designed to suit you. </p>
            </div>
          </div>
           <div className={style.bulletPoints}>
            <div className={style.offerone}>
            <div className={ style.description}>
              <h2  style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <MdOutlineElectricBolt  style={{ color: 'd06d00', fontSize: 30 }} />
                 24 hours electricity</h2>
              <p>Enjoy uninterrupted productivity with our reliable 24-hour electricity supply with no disruptions</p>
            </div>
          </div>
           </div>
          
          </div>
          <div className={style.bulletPoints}>
            <div className={style.offerone}>
            
            <div className={ style.description}>
              <h2  style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <FaWifi style={{ color: '#d06d00', fontSize: 30 }} /> 
                24 hours internet supply</h2>
              <p>Stay connected at all times with our fast and reliable 24-hour internet service </p>
            </div>
          </div>
           <div className={style.bulletPoints}>
            <div className={style.offerone}>
           
            <div className={ style.description}>
              <h2  style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <RiHotelBedFill style={{ color: '#d06d00', fontSize: 30 }}/>
                 Accomodation</h2>
              <p>Enjoy safe, affordable, home away from home accommodation</p>
            </div>
          </div>
           </div>
          
          </div>
        </div>
        </div>
      </section>
     
      <section >
        
       <div ref={planRef} className = {style.planSection}>
         <div className={style.planCards}>
          <h1>Our Plan</h1>
            <DeskTypeSelector />
          </div>
           <div>
          </div>
        
       </div>

      </section>
      <section>
        <AccordionFAQ />
      </section>
      {/* <section>
        <div>
          <h1>Our Location</h1>
          <Map />
        </div>
      </section> */}

       <Footer />
      </div>
      

      
    
    
  )
}

export default CoworkSpace
