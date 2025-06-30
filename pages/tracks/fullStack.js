import React from 'react'
import style from '../../styles/tracks.module.css'
import HeaderF from "../../components/HeaderF"
import { useRouter } from 'next/router'
import CourseGrid from '../../components/CourseGrid';


const fullStack = () => {
    const Router = useRouter();
  return (
<>
    <HeaderF/>
    <section className={style.bannerSectionContainer}>
        <h1>
            Full Stack Web Development
        </h1>
        <button 
          className={style.primaryBtn}
                  onClick={(e) => {Router.push('/payment')
                  }}
            >
                Apply Now
            </button>
            <div>
              <p className={style.duration}>Programme length: 6 months</p>
              
            </div>
      
    </section>
    <section>
       <CourseGrid />
    </section>
</>
    
  )
}

export default fullStack