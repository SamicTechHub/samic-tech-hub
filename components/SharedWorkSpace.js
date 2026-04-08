import React from 'react'
import PlanCards from './PlanCards';
import { useState } from 'react';
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
        setSelectedPlan(planTitle);
        setShowForm(true);
        setSelectedAmount(price);
        setSelectedPlanName(planName);


    }

     const handleCloseModal = () => {
            setShowForm(false);
        };
  return (
    <section>
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
        
        <div>
      <h2 style={{ textAlign: 'center', marginBottom: '24px', fontSize: '2rem', color: '#000000' }}>Standard Package</h2>
      <div className={style.planGrid}>
      {/* <button style={{ height: '40px', backgroundColor: 'red', width: '40px', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }} onClick={onclose}>X</button> */}
      
      
      <PlanCards
        icon={<Image src="/img/Symbol.png" alt="Symbol" width={50} height={50} />}      
        title="Daily"
        price="NGN2,000"
        // description="Perfect for freelancers or remote workers needing a workspace for a single day."
        features={[
          "9 AM - 5 PM access",
          "High-speed internet",
          "Ergonomic workspace",
          "Power outlets & charging stations",
        ]}
        idealFor={[
         
        ]}
          buttonText="Book Now"
          onClick={() => handleReserveClick('Daily Access', '2000.00', 'Standard: Daily Access')}
         
      />

      <PlanCards
      icon={<Image src="/img/Symbol3.png" alt="Symbol" width={50} height={50} />}
        title="Weekly"
        price="NGN10,000"
        // description="Best for short-term projects or teams needing a week of productivity."
        features={[
           "6-day full access",
          "Reserved desk option",
          "Priority internet bandwidth",
          "Networking with others",
        ]}
        idealFor={[
          
        ]}
         buttonText="Book Now"
          onClick={() => handleReserveClick('Weekly Access', '10000.00', 'Standard: Weekly Access')}
      />

      <PlanCards
        icon={<Image src="/img/Symbol2.png" alt="Symbol" width={50} height={50} />}
        title="Monthly"
        price="NGN40,000"
        // description="A full-time flexible workspace for remote workers, creatives, and startups."
        features={[
          "30-day unrestricted access",
          "Dedicated desk option",
          "Business address use",
          "Locker storage available",
        ]}
        idealFor={[
          
        ]}

         buttonText="Book Now"
          onClick={() => handleReserveClick('Monthly Access', '40000.00', 'Standard: Monthly Access')}
      />
    </div>
  

     {/* Booking Form in Modal */}
      <Modal isOpen={showForm} onClose={handleCloseModal}>
        <BookingForm plan={selectedPlan} onCancel={handleCloseModal} amount={selectedAmount} planName={selectedPlanName} />
      </Modal>
        </div>
      </section>
      
  )
}

export default SharedWorkSpace