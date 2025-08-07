import React, { useState } from 'react';
import PlanCards from './planCards';
import BookingForm from './BookingForm';
import Modal from './Modal';

const PrivateOfficePlan = ({ onclose }) => {
  const [showForm, setShowForm] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');

  const handleReserveClick = (planTitle) => {
    setSelectedPlan(planTitle);
    setShowForm(true);
  };

  const handleCloseModal = () => {
    setShowForm(false);
  };

  return (
    <section>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
      <button style={{ height: '40px', backgroundColor: 'red', width: '40px', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }} onClick={onclose}>X</button>

        <PlanCards
          title="Weekly Private Office"
          price="₦40,000 / week"
          description="A secure, enclosed office for your team to collaborate and focus without distractions."
          features={[
            "7 AM - 7 PM daily access",
            "Up to 4 team members",
            "High-speed internet",
          
          ]}
          idealFor={[
            "Small project teams",
            "Client onboarding sessions",
            "Founders hosting collaborators",
          ]}
          buttonText="Reserve"
          onClick={() => handleReserveClick('Weekly Private Office')}
        />

        <PlanCards
          title="Monthly Private Office"
          price="₦150,000 / month"
          description="A dedicated office for your growing team, fully serviced and professionally managed."
          features={[
            "24/7 access",
            "Private office (up to 6 people)",
            "Business address use",
            "Meeting room (6 hrs free)",
          ]}
          idealFor={[
            "Startups with regular clients",
            "Remote teams building a base",
            "Companies expanding locally",
          ]}
          buttonText="Reserve"
          onClick={() => handleReserveClick('Monthly Private Office')}
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
          onClick={() => handleReserveClick('Enterprise / Custom Office')}
        />
      </div>

      {/* Booking Form in Modal */}
      <Modal isOpen={showForm} onClose={handleCloseModal}>
        <BookingForm plan={selectedPlan} onCancel={handleCloseModal} />
      </Modal>
    </section>
  );
};

export default PrivateOfficePlan;
