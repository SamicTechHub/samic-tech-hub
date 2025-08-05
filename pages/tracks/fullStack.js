import React from 'react'
import style from '../../styles/tracks.module.css'
import HeaderF from "../../components/HeaderF"
import { useRouter} from 'next/router'
import { useState } from 'react'
import CourseGrid from '../../components/FullStackGrid';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import Footer from '../../components/Footer'
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import AddLocationIcon from '@mui/icons-material/AddLocation';

const fullStack = () => {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
    const Router = useRouter();
  return (
<>
    <HeaderF/>
    <section className={style.bannerSectionContainerFs}>
        <h1  className={style.heading}>
            Full Stack Web Development
        </h1>
       
       
          <div className={style.detailSection}> 
          <div className={style.details}>
            <p className={style.duration}><AccessTimeFilledIcon style={{ fontSize: '2rem', color: '#27beab' }}  /> Programme length: 6 months</p>
            <p className={style.duration}><LocalOfferIcon style={{ fontSize: '2rem', color: '#27beab'}} /> Application Fee: 250,000</p>
            <p className={style.duration}><AddLocationIcon style={{ fontSize: '2rem', color: '#27beab'}} /> Location: Samic Tech Hub</p>
          </div>
          <div>
            <button 
              className={style.pryBtn}
              onClick={(e) => setShowPaymentModal(true)}>
              Apply Now
            </button>
            </div>

              {showPaymentModal && (
              <div className={style.modalOverlay}>
                <div className={style.paymentModal}>
                  <h3>Payment for Full Stack Development</h3>
                  <p>You'll be redirected to our secure payment gateway</p>
                  <div className={style.modalButton}>
                    <button 
                    onClick={()=> setShowPaymentModal(false)} 
                    className={style.secondaryBtn}
                    >
                      Cancel
                    </button>
                    <button 
                      onClick={() => Router.push('/payment')}
                      className={style.primaryBtn}
                    >
                    Apply now
                  </button>
                  </div>

                </div>
                
              </div>
          
              
          
          )}
        </div>   
      
      </section>
       
    
      <section>
       <CourseGrid />
    </section>
     <div className={style.button}>
          <button 
          className={style.BtnPry}
                  onClick={(e) => {Router.push('/tracks/course')
                  }}
            >
                Back to courses
            </button>
    </div>
    <Footer />

</>
    
  )
}

export default fullStack