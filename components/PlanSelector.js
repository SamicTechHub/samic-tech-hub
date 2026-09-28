// DeskTypeSelector.jsx
import React, { useState } from 'react';
import SharedWorkSpace from './SharedWorkSpace'
import SharedWorkspace from './SharedWorkSpace';
import DedicatedDeskPlan from './DedicatedDeskPlan';
import PrivateWorkSpace from './PrivateWorkSpace';
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

  if (activePlan === 'shared-workspace') return <SharedWorkSpace onclose={handleBack} />;
  if (activePlan === 'dedicated') return <DedicatedDeskPlan onclose={handleBack} />;
  if (activePlan === 'private-workspace') return <PrivateWorkSpace onclose={handleBack} />;

  return (
    <section className={styles.selectorContainer}>
     
      <div className={styles.cardGrid}>
        <div className={styles.card} onClick={() => setActivePlan('shared-workspace')}>
          <Image src="/img/team2.webp" alt="Hot Desk" width={700} height={500}/>
          <h3>Shared Woorkspace</h3>
          <p>Flexible daily, weekly, and monthly shared desk options.</p>
          <p className={styles.viewPricing}>View Pricing</p>
        </div>

        <div className={styles.card} onClick={() => setActivePlan('dedicated')}>
          <Image src="/img/workprivate.webp" alt="Dedicated Desk" width={700} height={500}/>
          <h3>Dedicated Desk</h3>
          <p>Your personal desk in a shared office environment.</p>
          <p className={styles.viewPricing}>View Pricing</p>
        </div>

        <div className={styles.card} onClick={() => setActivePlan('private-workspace')}>
          <Image src="/img/team.webp" alt="Private Office" width={700} height={500} />
          <h3>Private Workspace</h3>
          <p>Private spaces for small teams or growing companies.</p>
          <p className={styles.viewPricing}>View Pricing</p>
        </div>
      </div>
    </section>
  );
};

export default DeskTypeSelector;
