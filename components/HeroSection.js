import styles from '../styles/herosection.module.css';
import { useState } from 'react';
import Button from './Button';
import SharedWorkSpace from './SharedWorkSpace';
import Link from 'next/link';
import Image from 'next/image'


export default function HeroSection() {

  const [showPlans, setShowPlans] = useState(false);

  return (
    <section className={styles.wrapper}>
      <div className={styles.heroImage}>
        
      </div>

      <div className={styles.coworkingBanner}>
        <p className={styles.tagline}>SAMIC TECH HUB COWORKING SPACE</p>
        <h1 className={styles.heading}>
          Productive Co-working Space in Ibadan, Moniya
        </h1>
        <p className={styles.subtext}>
          A vibrant space at Samic Tech Hub designed for productivity, collaboration,
          innovation, and comfort. Everything you need to get your best work done!
        </p>
         {/* <Button onClick={() => window.location.href = '/book'}>Click Me</Button> */}
              <Button onClick={() => setShowPlans(true)} >Book Now</Button>
      </div>
      {showPlans && (
            <div className={styles.planWrapper} onClick={() => setShowPlans(false)}>
              <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <button className={styles.backBtn} onClick={() => setShowPlans(false)}>← Back</button>
                <SharedWorkSpace /> 
              </div>
            </div>
      )}
    </section>
  );
}