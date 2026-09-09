import styles from '../styles/whatwedo.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Button from './Button';
import SharedWorkSpace from './SharedWorkSpace';  
import { useState, useEffect } from 'react';

export default function WhatWeDo() {
  const [showPlans, setShowPlans] = useState(false);

  
  return (
    <>
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
            growth. Whether you're here to build, learn, innovate, or connect,
            this environment is designed to support your journey.
          </p>

          <div className={styles.buttonContainer}>
            <Button onClick={() => setShowPlans(true)}>
              BOOK A SPACE
            </Button>
          </div>
        </div>
      </section>

 
      {showPlans && (
        <div
          className={styles.planWrapper}
          onClick={() => setShowPlans(false)}
        >
          <div
            className={styles.modal}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.backBtn}
              onClick={() => setShowPlans(false)}
            >
              ← Back
            </button>

            <SharedWorkSpace />
          </div>
        </div>
      )}
    </>
  );
}