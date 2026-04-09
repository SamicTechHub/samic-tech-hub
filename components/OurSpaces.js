'use client';
import styles from '../styles/ourspaces.module.css';
import Link from 'next/link';
import Image from 'next/image'
import SharedWorkSpace from './SharedWorkSpace';
import PrivateWorkSpace from './PrivateWorkSpace';
import { useState } from 'react'
import { useRouter } from 'next/router';
import { Share } from 'lucide-react';
import ContentSpace from './ContentSpace';
import EventSpace from './EventSpace';
import Button from './Button';
// import styles from './OurSpaces.module.css';

// Replace these with your actual plan components
// import SharedSpacePlan from './SharedSpacePlan';
// import PrivateOfficePlan from './PrivateOfficePlan';
// import TeamDesk from './TeamDesk';

export default function OurSpaces() {
  const [activePlan, setActivePlan] = useState(null);
  const router = useRouter();
  const handleBack = () => setActivePlan(null);
  const [showPlans, setShowPlans] = useState(false);

  // Render active plan modals
  if (activePlan === 'sharespace') {
    //  <SharedWorkSpace onclose={handleBack} />;
    return (
      <div className={styles.planWrapper}>
        <button className={styles.backBtn} onClick={handleBack}>← Back</button>
        <p style={{ color: '#fff' }}><SharedWorkSpace onclose={handleBack} /></p>
      </div>
    );
  }
  if (activePlan === 'private') {
    // return <PrivateOfficePlan onclose={handleBack} />;
    return (
      <div className={styles.planWrapper}>
        <button className={styles.backBtn} onClick={handleBack}>← Back</button>
        <p style={{ color: '#fff' }}><PrivateWorkSpace onclose={handleBack} /></p>
      </div>
    );
  }
  if (activePlan === 'content') {
    // return <PrivateOfficePlan onclose={handleBack} />;
    return (
      <div className={styles.planWrapper}>
        <button className={styles.backBtn} onClick={handleBack}>← Back</button>
        <p style={{ color: '#fff' }}><ContentSpace onclose={handleBack} /></p>
      </div>
    );
  }
  if (activePlan === 'event') {
    // return <TeamDesk onclose={handleBack} />;
    return (
      <div className={styles.planWrapper}>
        <button className={styles.backBtn} onClick={handleBack}>← Back</button>
        <p style={{ color: '#fff' }}><EventSpace onclose={handleBack} /></p>
      </div>
    );
  }

  return (
    <section className={styles.section}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <p className={styles.eyebrow}>OUR SPACES</p>
          <h2 className={styles.heading}>Take a Look Inside</h2>
        </div>
        <p className={styles.headerDesc}>
          Whether you&apos;re looking for a quiet spot to work, a professional
          setting for a meeting, or a venue for your next seminar, we have
          the perfect space for you.
        </p>
      </div>

      {/* Space Cards */}
      <div className={styles.spaces}>

        <div>
          <div
          className={`${styles.spaceBlock} ${styles.imageRight}`}
          // onClick={() => setActivePlan('sharespace')}
          // role="button"
          // tabIndex={0}
          // onKeyDown={(e) => e.key === 'Enter' && setActivePlan('sharespace')}
          // aria-label="Open Shared Space plan"
        >
          <div
            className={styles.bgImage}
            style={{ backgroundImage: "url('/img/workphoto1.png')" }}
          >
            <span className={styles.badgeTopLeft}>Shared Space</span>
          </div>

          <div className={styles.card}>
            <div className={styles.cardCapacity}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
              20 persons
            </div>
            <h3 className={styles.cardTitle}>Shared Space</h3>
            <p className={styles.cardDesc}>
              An open, collaborative environment with comfortable seating
              and reliable internet for focus and collaboration.
            </p>
            <p className={styles.cardAvailability}>
              <strong>Available:</strong> Mon – Fri (9am – 5pm)
            </p>
              <hr className={styles.hr}/>
              <Button onClick={() => setShowPlans(true)} >Book Now</Button>
          </div>
        </div>
         {showPlans && (
                    <div className={styles.planWrapper} onClick={() => setShowPlans(false)}>
                      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                        <button className={styles.backBtn} onClick={() => setShowPlans(false)}>← Back</button>
                        <SharedWorkSpace /> 
                      </div>
                    </div>
              )}
        </div>

        {/* conference space — image left, card right-overlapping */}
        <div>
          <div
          className={`${styles.spaceBlock} ${styles.imageLeft}`}
         
        >
          <div
            className={styles.bgImage}
            style={{ backgroundImage: "url('/img/coworkhoto3.png')" }}
          >
            <span className={styles.badgeTopRight}>Conference Office</span>
          </div>

          <div className={styles.card2}>
            <div className={styles.cardCapacity}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
              </svg>
              8 persons
            </div>
            <h3 className={styles.cardTitle}>Conference Space</h3>
            <p className={styles.cardDesc}>
              Host meetings, calls, or presentations in a
              professional space equipped with comfortable
              seating and fast internet.
            </p>
            <p className={styles.cardAvailability}>
              <strong>Available:</strong> Mon – Fri (9am – 5pm)
            </p>
              <hr className={styles.hr}/>

            <div className={styles.price}>
              <p>₦50,000/Day</p>
                
              <Button onClick={() => setShowPlans(true)} >Book Now</Button>

            </div>
          </div>
        </div>
         {showPlans && (
                    <div className={styles.planWrapper} onClick={() => setShowPlans(false)}>
                      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                        <button className={styles.backBtn} onClick={() => setShowPlans(false)}>← Back</button>
                        <PrivateWorkSpace /> 
                      </div>
                    </div>
              )}
        </div>

          {/* Content Space — image right, card left-overlapping */}
        <div>
          <div
          className={`${styles.spaceBlock} ${styles.imageRight}`}
         
        >
          <div
            className={styles.bgImage}
            style={{ backgroundImage: "url('/img/coworkhoto4.png')" }}
          >
            <span className={styles.badgeTopLeft}>Content Creation Space </span>
          </div>

          <div className={styles.card}>
            <div className={styles.cardCapacity}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
              4 persons
            </div>
            <h3 className={styles.cardTitle}>Content Creation Space</h3>
            <p className={styles.cardDesc}>
              A fully equipped Content Creation Space designed for creators, brands, and storytellers ready to bring their ideas to life.

            </p>
            <p className={styles.cardAvailability}>
              <strong>Available:</strong> Mon – Fri (9am – 5pm)
            </p>
            <hr className={styles.hr}/>
            <div className={styles.price}>
              <p>₦5,000/Hour</p>
                
            <Button onClick={() => setShowPlans(true)} >Book Now</Button>
            </div>
          
          </div>
        </div>
         {showPlans && (
                    <div className={styles.planWrapper} onClick={() => setShowPlans(false)}>
                      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                        <button className={styles.backBtn} onClick={() => setShowPlans(false)}>← Back</button>
                        <ContentSpace /> 
                      </div>
                    </div>
              )}
          </div>

          {/* eventspace — image left, card right-overlapping */}
        <div>
          <div
          className={`${styles.spaceBlock} ${styles.imageLeft}`}
          
        >
          <div
            className={styles.bgImage}
            style={{ backgroundImage: "url('/img/coworkhoto5.png')" }}
          >
            <span className={styles.badgeTopRight}>Event Space</span>
          </div>

          <div className={styles.card2}>
            <div className={styles.cardCapacity}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
              </svg>
              20 persons
            </div>
            <h3 className={styles.cardTitle}>Event Space</h3>
            <p className={styles.cardDesc}>
              A versatile Event Space perfect for celebrations, gatherings, and experiences that leave lasting memories.
            </p>
            <p className={styles.cardAvailability}>
              <strong>Available:</strong> Mon – Fri (9am – 5pm)
            </p>
            <hr className={styles.hr}/>
              
            <div className={styles.price}>
              <p>Contact Us</p>
           <Button onClick={() => setShowPlans(true)} >Book Now</Button>
           
            </div>
          </div>
        </div>
        
        {showPlans && (
                    <div className={styles.planWrapper} onClick={() => setShowPlans(false)}>
                      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                        <button className={styles.backBtn} onClick={() => setShowPlans(false)}>← Back</button>
                        <EventSpace /> 
                      </div>
                    </div>
              )}
        </div>
      </div>
    </section>
  );
}
