// DeskTypeSelector.jsx
import React, { useState } from 'react';
import HotDeskPlan from './HotDeskPlan';
import DedicatedDeskPlan from './DedicatedDeskPlan';
import PrivateOfficePlan from './PrivateOfficePlan';
import styles from '../styles/selector.module.css'; // for custom styling
import Image from 'next/image';
import dynamic from "next/dynamic";

const DeskTypeSelector = () => {
  const [activePlan, setActivePlan] = useState(null);

  const handleBack = () => {
    setActivePlan(null); // Go back to selection view
  };

// const HotDeskPlan = dynamic(() => import('./HotDeskPlan'));
// const DedicatedDeskPlan = dynamic(() => import('./DedicatedDeskPlan'));
// const PrivateOfficePlan = dynamic(() => import('./PrivateOfficePlan'));

  if (activePlan === 'hotdesk') return <HotDeskPlan onclose={handleBack} />;
  if (activePlan === 'dedicated') return <DedicatedDeskPlan onclose={handleBack} />;
  if (activePlan === 'private') return <PrivateOfficePlan onclose={handleBack} />;

  return (
    <section className={styles.selectorContainer}>
     
      <div className={styles.cardGrid}>
        <div className={styles.card} onClick={() => setActivePlan('hotdesk')}>
          <Image src="/img/team2.webp" alt="Hot Desk" width={700} height={500}/>
          <h3>Hot Desk</h3>
          <p>Flexible daily, weekly, and monthly shared desk options.</p>
          <p className={styles.viewPricing}>View Pricing</p>
        </div>

        <div className={styles.card} onClick={() => setActivePlan('dedicated')}>
          <Image src="/img/workprivate.webp" alt="Dedicated Desk" width={700} height={500}/>
          <h3>Dedicated Desk</h3>
          <p>Your personal desk in a shared office environment.</p>
          <p className={styles.viewPricing}>View Pricing</p>
        </div>

        <div className={styles.card} onClick={() => setActivePlan('private')}>
          <Image src="/img/team.webp" alt="Private Office" width={700} height={500} />
          <h3>Private Office</h3>
          <p>Private spaces for small teams or growing companies.</p>
          <p className={styles.viewPricing}>View Pricing</p>
        </div>
      </div>
    </section>
  );
};

export default DeskTypeSelector;
