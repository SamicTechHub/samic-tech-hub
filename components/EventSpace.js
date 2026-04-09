import React from 'react'
import PlanCards from './PlanCards';
import { useState, useEffect } from 'react';
import BookingForm from './BookingForm';
import Modal from './Modal';
import style from '../styles/card.module.css';
import Image from 'next/image';


const EventSpace = ({onclose}) => {

    const [showForm, setShowForm] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState('');
    const [selectedAmount, setSelectedAmount] = useState('');
    const [selectedPlanName, setSelectedPlanName] = useState('');


    const handleReserveClick = (planTitle, price, planName) => {
        setSelectedPlan(planTitle);
        setShowForm(true);
        setSelectedAmount(price);
        setSelectedPlanName(planName);
// Scroll to top when modal opens
    window.scrollTo({ top: 0, behavior: 'smooth' });

    }

     const handleCloseModal = () => {
            setShowForm(false);
        };
  return (
    <>
      <h2 style={{ textAlign: 'center', marginBottom: '24px', fontSize: '2rem', color: '#000000' }}>Event Space</h2>
      <div className={style.planGridevent}>
      {/* <button style={{ height: '40px', backgroundColor: 'red', width: '40px', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }} onClick={onclose}>X</button> */}
      <PlanCards
        icon={<Image src="/img/Symbol.png" alt="Symbol" width={50} height={50} />}
        title="Daily"
        description="NGN500,000"
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
          onClick={() => handleReserveClick('Daily Access', '500000.00', 'Event Space')}
         
      />
      </div>

     {/* Booking Form in Modal */}
      <Modal isOpen={showForm} onClose={handleCloseModal}>
        <BookingForm plan={selectedPlan} onCancel={handleCloseModal} amount={selectedAmount} planName={selectedPlanName} />
      </Modal>
     
    
  </>
      
  )
}

export default EventSpace