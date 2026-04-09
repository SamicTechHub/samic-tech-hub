import React from 'react'
import PlanCards from './PlanCards';
import { useState, useEffect } from 'react';
import BookingForm from './BookingForm';
import Modal from './Modal';
import style from '../styles/card.module.css';
import Image from 'next/image';


const SharedWorkSpace = ({onclose}) => {

    const [showForm, setShowForm] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState('');
    const [selectedAmount, setSelectedAmount] = useState('');
    const [selectedPlanName, setSelectedPlanName] = useState('');


    const handleReserveClick = (planTitle, price, planName) => {
       // 🔥 TikTok tracking
    if (window.ttq) {
        window.ttq.track('Contact', {
            content_name: planTitle,
            value: price,
            description: planName
        });
    }

        setSelectedPlan(planTitle);
        setShowForm(true);
        setSelectedAmount(price);
        setSelectedPlanName(planName);
         // Scroll to top when modal opens

    }

     const handleCloseModal = () => {
            setShowForm(false);
        };
       
  return (
    <>
      <h2 style={{ textAlign: 'center', marginBottom: '24px', fontSize: '2rem', color: '#000000' }}>Premium Package</h2>
      <div className={style.planGrid}>
      {/* <button style={{ height: '40px', backgroundColor: 'red', width: '40px', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }} onClick={onclose}>X</button> */}
      <PlanCards
        icon={<Image src="/img/Symbol.png" alt="Symbol" width={50} height={50} />}
        title="Daily"
        description="NGN2,500"
        features={[
          "24/7 Power Supply",
          "Fast Speed internet",
          "Access 9am - 5pm",
          "Premium Set-up",
          "A/C"
        ]}
        idealFor={[
         
        ]}
          buttonText="Book Now"
          onClick={() => handleReserveClick('Daily Access', '2500.00', 'Premium: Daily Access')}
         
      />

      <PlanCards
        icon={<Image src="/img/Symbol3.png" alt="Symbol" width={50} height={50} />}
        title="Weekly"
         description="NGN12,500"
        features={[
          "24/7 Power Supply",
          "Fast Speed internet",
          "Access 9am - 5pm",
          "Premium Set-up",
          "A/C"
        ]}
        idealFor={[
          
        ]}
         buttonText="Book Now"
          onClick={() => handleReserveClick('Weekly Access', '15000.00', 'Premium: Weekly Access')}
      />

      <PlanCards
      icon={<Image src="/img/Symbol2.png" alt="Symbol" width={50} height={50} />}
        title="Monthly"
         description="NGN50,000"
        features={[
          "24/7 Power Supply",
          "Fast Speed internet",
          "Access 9am - 5pm",
          "Premium Set-up",
          "A/C"
        ]}
        idealFor={[
         
        ]}

         buttonText="Book Now"
          onClick={() => handleReserveClick('Monthly Access', '50000.00', 'Premium: Monthly Access')}
      />
      </div>

     {/* Booking Form in Modal */}
      <Modal isOpen={showForm} onClose={handleCloseModal}>
        <BookingForm plan={selectedPlan} onCancel={handleCloseModal} amount={selectedAmount} planName={selectedPlanName} />
      </Modal>
        <br />
        <br />
        
      <h2 style={{ textAlign: 'center', marginBottom: '24px', fontSize: '2rem', color: '#000000' }}>Standard Package</h2>
      <div className={style.planGrid}>
      {/* <button style={{ height: '40px', backgroundColor: 'red', width: '40px', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }} onClick={onclose}>X</button> */}
      
      <PlanCards
        icon={<Image src="/img/Symbol.png" alt="Symbol" width={50} height={50} />}
        title="Daily"
        description="NGN2,000"
        features={[
          "24/7 Power Supply",
          "Fast Speed internet",
          "Access 9am - 5pm",
          "Premium Set-up",
          "Fan"
        ]}
        idealFor={[
         
        ]}
          buttonText="Book Now"
          onClick={() => handleReserveClick('Daily Access', '2000.00', 'Standard: Daily Access')}
         
      />

        <PlanCards
        icon={<Image src="/img/Symbol.png" alt="Symbol" width={50} height={50} />}
        title="Weekly"
        description="NGN10,000"
        features={[
          "24/7 Power Supply",
          "Fast Speed internet",
          "Access 9am - 5pm",
          "Premium Set-up",
          "Fan"
        ]}
        idealFor={[
         
        ]}
          buttonText="Book Now"
          onClick={() => handleReserveClick('Weekly Access', '10000.00', 'Standard: Weekly Access')}
         
      />

      <PlanCards
        icon={<Image src="/img/Symbol2.png" alt="Symbol" width={50} height={50} />}
        title="Monthly"
        description="NGN40,000"
        // description="A full-time flexible workspace for remote workers, creatives, and startups."
        features={[
          "24/7 Power Supply",
          "Fast Speed internet",
          "Access 9am - 5pm",
          "Premium Set-up",
          "Fan"
        ]}
        idealFor={[
          
        ]}

         buttonText="Book Now"
          onClick={() => handleReserveClick('Monthly Access', '40000.00', 'Standard: Monthly Access')}
      />
      </div>

     {/* Booking Form in Modal */}
      {/* <Modal isOpen={showForm} onClose={handleCloseModal}>
        <BookingForm plan={selectedPlan} onCancel={handleCloseModal} amount={selectedAmount} planName={selectedPlanName} />
      </Modal> */}
    
  </>
      
  )
}

export default SharedWorkSpace