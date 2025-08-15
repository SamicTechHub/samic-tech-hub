import React, { useState } from 'react';
import PlanCards from './PlanCards';
import BookingForm from './BookingForm';
import Modal from './Modal';

const DedicatedDeskPlan = ({ onclose }) => {
  const [showForm, setShowForm] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');
  const [selectedAmount, setSelectedAmount] = useState('');
  const [selectedPlanName, setSelectedPlanName] = useState('');
      
  

  const handleReserveClick = (planTitle, price, planName) => {
    setSelectedPlan(planTitle);
    setShowForm(true);
    setSelectedAmount(price);
    setSelectedPlanName(planName);
  };

  const handleCloseModal = () => {
    setShowForm(false);
  };

  return (
    <section>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
      <button style={{ height: '40px', backgroundColor: 'red', width: '40px', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }} onClick={onclose}>X</button>

        <PlanCards
          title="Weekly Dedicated Desk"
          price="₦15,000 / week"
          description="Enjoy the consistency of your own desk for a week. Come in, plug in, and start working immediately."
          features={[
            "7 AM - 7 PM daily access",
            "Your own personal desk",
           
          ]}
          idealFor={[
            "Freelancers who prefer consistency",
            "Short-term team projects",
            "Startup founders visiting for a week",
          ]}
          buttonText="Reserve"
          onClick={() => handleReserveClick('Weekly Dedicated Desk', '15000.00', 'Dedicated Desk: Weekly')}
        />

        <PlanCards
          title="Monthly Dedicated Desk"
          price="₦50,000 / month"
          description="Your permanent spot in a shared office environment with all the amenities you need."
          features={[
            "24/7 access",
            "Personal desk & chair",
            "Meeting room (5 hrs free)",
            "Business address use",
            "Community networking events",
          ]}
          idealFor={[
            "Remote workers needing stability",
            "Founders & tech teams",
            "Freelancers building long-term routines",
          ]}
          buttonText="Reserve"
          onClick={() => handleReserveClick('Monthly Dedicated Desk', '50000.00', 'Dedicated Desk: Monthly')}
        />

        <PlanCards
          title="Quarterly Dedicated Desk"
          price="₦135,000 / 3 months"
          description="Lock in your productivity and save more with a quarterly commitment to your own workspace."
          features={[
            "24/7 secured access",
            "Guaranteed dedicated desk",
            "Priority meeting room booking",
            "Access to all member events",
          ]}
          idealFor={[
            "Growing startups",
            "Consultants with steady client work",
            "Freelancers scaling up",
          ]}
          buttonText="Reserve"
          onClick={() => handleReserveClick('Quarterly Dedicated Desk', '135000.00', 'Dedicated Desk: Quarterly')}
        />
      </div>

      {/* Booking Form in Modal */}
      <Modal isOpen={showForm} onClose={handleCloseModal}>
        <BookingForm plan={selectedPlan} onCancel={handleCloseModal} amount={selectedAmount} planName={selectedPlanName} />
      </Modal>
    </section>
  );
};

export default DedicatedDeskPlan;
