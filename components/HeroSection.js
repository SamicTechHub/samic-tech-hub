import styles from '../styles/herosection.module.css';
import { useState, useEffect } from 'react';
import Button from './Button';
import SharedWorkSpace from './SharedWorkSpace';
import Link from 'next/link';
import Image from 'next/image'


export default function HeroSection() {

  const [showPlans, setShowPlans] = useState(false);
   useEffect(() => {
    !function (w, d, t) {
      w.TiktokAnalyticsObject = t;
      var ttq = w[t] = w[t] || [];
      ttq.methods = ["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"];
      ttq.setAndDefer = function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}; 
      for (var i = 0; i < ttq.methods.length; i++) ttq.setAndDefer(ttq, ttq.methods[i]);

      ttq.load('D7BPU8JC77U3K3SH65BG'); 
      ttq.page();
    }(window, document, 'ttq');
  }, []);

  return (
    <section className={styles.wrapper}>
      <div className={styles.heroImage}></div>

      <div className={styles.coworkingBanner}>
        <p className={styles.tagline}>SAMIC TECH HUB COWORKING SPACE</p>
        <h1 className={styles.heading}>
          Productive Co-working Space in Ibadan, Moniya
        </h1>
        <p className={styles.subtext}>
          A vibrant space at Samic Tech Hub designed for productivity, collaboration,
          innovation, and comfort. Everything you need to get your best work done!
        </p>
             <div className={styles.heroImagemobile}>
          <Image src="/img/herobg2.png" alt="Hero Image" width={300} height={300} className={styles.heroImageM} />
          </div>
      
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