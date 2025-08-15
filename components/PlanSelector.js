// DeskTypeSelector.jsx
import React, { useState } from 'react';
import HotDeskPlan from './HotDeskPlan';
import DedicatedDeskPlan from './DedicatedDeskPlan';
import PrivateOfficePlan from './PrivateOfficePlan';
import styles from '../styles/selector.module.css'; // for custom styling

const DeskTypeSelector = () => {
  const [activePlan, setActivePlan] = useState(null);

  const handleBack = () => {
    setActivePlan(null); // Go back to selection view
  };

  if (activePlan === 'hotdesk') return <HotDeskPlan onclose={handleBack} />;
  if (activePlan === 'dedicated') return <DedicatedDeskPlan onclose={handleBack} />;
  if (activePlan === 'private') return <PrivateOfficePlan onclose={handleBack} />;

  return (
    <section className={styles.selectorContainer}>
     
      <div className={styles.cardGrid}>
        <div className={styles.card} onClick={() => setActivePlan('hotdesk')}>
          <img src="/img/team2.webp" alt="Hot Desk" />
          <h3>Hot Desk</h3>
          <p>Flexible daily, weekly, and monthly shared desk options.</p>
        </div>

        <div className={styles.card} onClick={() => setActivePlan('dedicated')}>
          <img src="/img/workprivate.webp" alt="Dedicated Desk" />
          <h3>Dedicated Desk</h3>
          <p>Your personal desk in a shared office environment.</p>
        </div>

        <div className={styles.card} onClick={() => setActivePlan('private')}>
          <img src="/img/team.webp" alt="Private Office" />
          <h3>Private Office</h3>
          <p>Private spaces for small teams or growing companies.</p>
        </div>
      </div>
    </section>
  );
};

export default DeskTypeSelector;
