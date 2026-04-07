import styles from '../styles/whatwedo.module.css';
import Link from 'next/link';
import Image from 'next/image'
import Button from './Button';
import SharedWorkSpace from './SharedWorkSpace';  
import { useState } from 'react';

export default function WhatWeDo() {
  const [showPlans, setShowPlans] = useState(false);
  return (
    <section className={styles.section}>
      <div className={styles.imageCol}>
        <Image
          loading="lazy" 
          src="/img/vector.png"
          alt="Person working at desk"
          className={styles.illustration}
          width={500}
          height={400}
        />
      </div>
      <div className={styles.textCol}>
        <h2 className={styles.heading}>What we do?</h2>
        <p className={styles.body}>
          We believe in the power of collaboration, creativity, and continuous
          growth. Whether you&apos;re here to build, learn, innovate, or connect,
          this environment is designed to support your journey. Feel free to
          explore the tools and resources around you.
        </p>
        {/* <Link href="/book" className={styles.ctaBtn}>BOOK A SPACE</Link> */}
            {/* <Button onClick={() => setShowPlans(true)}  className = {styles.whatWeDoBtn}>BOOK A SPACE</Button> */}
            <Button onClick={() => setShowPlans(true)} >Book Now</Button>
      </div>
      {showPlans && (
                  <div className={styles.overlay} onClick={() => setShowPlans(false)}>
                    <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                      <button className={styles.backBtn} onClick={() => setShowPlans(false)}>← Back</button>
                      <SharedWorkSpace /> 
                    </div>
                  </div>
            )}
    </section>
  );
}