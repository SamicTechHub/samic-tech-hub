import React, { useState } from 'react';
import BookingForm from './BookingForm';
import Modal from './Modal';
import PlanCards from './PlanCards';

const TeamDesk = ({ onclose }) => {
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
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
      <button style={{ height: '40px', backgroundColor: 'red', width: '40px', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }} onClick={onclose}>X</button>

        <PlanCards
          title="Weekly Team Desk"
          price="₦60,000 / week"
          description="A secure, enclosed office for your team to collaborate and focus without distractions."
          features={[
            "9 AM - 5 PM daily access",
            "Up to 4 team members",
            "High-speed internet",
          
          ]}
          idealFor={[
            "Small project teams",
            "Client onboarding sessions",
            "Founders hosting collaborators",
          ]}
          buttonText="Reserve"
          onClick={() => handleReserveClick('Weekly Private Office', '60000.00', 'Private Office: weekly')}
        />

        <PlanCards
          title="Monthly Team Desk"
          price="₦300,000 / month"
          description="A dedicated office for your growing team, fully serviced and professionally managed."
          features={[
            "24/7 access",
            "Private office (up to 6 people)",
            "Business address use",
          ]}
          idealFor={[
            "Startups with regular clients",
            "Remote teams building a base",
            "Companies expanding locally",
          ]}
          buttonText="Reserve"
          onClick={() => handleReserveClick('Monthly Private Office', '300000.00', 'Private Office: Monthly')}
        />

        <PlanCards
          title="Enterprise / Custom Office"
          price="Custom pricing"
          description="Tailored office setup for large teams or long-term projects. Let's build your ideal space."
          features={[
            "Long-term lease flexibility",
            "IT & security setup",
            
          ]}
          idealFor={[
            "Established businesses",
            "NGOs, agencies, and startups",
            "Teams of 10+ people",
          ]}
          buttonText="Contact Us"
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

export default TeamDesk;
