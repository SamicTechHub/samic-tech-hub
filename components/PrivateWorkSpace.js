import React, { useState } from 'react';
import BookingForm from './BookingForm';
import Modal from './Modal';
import PlanCards from './PlanCards';
import style from '../styles/card.module.css';
const PrivateWorkSpace = ({ onclose }) => {
  const [showForm, setShowForm] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');
  const [selectedAmount, setSelectedAmount] = useState('')
  const [selectedPlanName, setSelectedPlanName] = useState('');
  

  const handleReserveClick = (planTitle, price, planName) => {
    setSelectedPlan(planTitle);
    setShowForm(true);
    setSelectedAmount(price)
    setSelectedPlanName(planName);

  };

  const handleCloseModal = () => {
    setShowForm(false);
  };

  return (
    <section>
      <div className={style.planGrid} style={{ display: 'grid', gridTemplateColumns:'1fr 1fr 1fr', alignItems: 'center', gap: '20px',  justifyContent: 'center', margin:'auto' }}>

        <PlanCards
          title="Daily"
          price="₦10,000 / day"
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
          onClick={() => handleReserveClick('Weekly Private Office', '60000.00', 'Private Office: weekly')}
        />

        <PlanCards
          title="Weekly"
          price="₦60,000 / week"
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
          onClick={() => handleReserveClick('Monthly Private Office', '300000.00', 'Private Office: Monthly')}
        />

        <PlanCards
          title="Monthly"
          price="₦300,000 / month"
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
          onClick={() => handleReserveClick('Enterprise / Custom Office', ', Private Office: Custom')}
        />
      </div>

      {/* Booking Form in Modal */}
      <Modal isOpen={showForm} onClose={handleCloseModal}>
        <BookingForm plan={selectedPlan} onCancel={handleCloseModal} amount={selectedAmount} planName={selectedPlanName} />
      </Modal>
    </section>
  );
};

export default PrivateWorkSpace;
