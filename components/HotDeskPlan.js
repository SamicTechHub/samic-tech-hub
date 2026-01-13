import React from 'react'
import PlanCards from './PlanCards';
import { useState } from 'react';
import BookingForm from './BookingForm';
import Modal from './Modal';
import { AutofpsSelectRounded } from '@mui/icons-material';


const HotDeskPlan = ({onclose}) => {

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
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
      <button style={{ height: '40px', backgroundColor: 'red', width: '40px', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }} onClick={onclose}>X</button>
      <PlanCards
        title="Daily Access"
        price="₦2,500 / day"
        description="Perfect for freelancers or remote workers needing a workspace for a single day."
        features={[
          "9 AM - 5 PM access",
          "High-speed internet",
          "Ergonomic workspace",
          "Power outlets & charging stations",
        ]}
        idealFor={[
          "Travelers passing through town",
          "Freelancers needing a quiet space"
        ]}
          buttonText="Reserve"
          onClick={() => handleReserveClick('Daily Access', '2500.00', 'Hot Desk: Daily Access')}
         
      />

      <PlanCards
        title="Weekly Access"
        price="₦15,000 / week"
        description="Best for short-term projects or teams needing a week of productivity."
        features={[
           "6-day full access",
          "Reserved desk option",
          "Priority internet bandwidth",
          "Networking with others",
        ]}
        idealFor={[
          "Freelancers on short-term gigs",
          "Startup sprints",
          "Short-term visits",
        ]}
         buttonText="Reserve"
          onClick={() => handleReserveClick('Weekly Access', '15000.00', 'Hot Desk: Weekly Access')}
      />

      <PlanCards
        title="Monthly Access"
        price="₦50,000 / month"
        description="A full-time flexible workspace for remote workers, creatives, and startups."
        features={[
          "30-day unrestricted access",
          "Dedicated desk option",
          "Business address use",
          "Locker storage available",
        ]}
        idealFor={[
          "Remote employees",
          "Online business owners",
          "Long-term freelancers",
        ]}

         buttonText="Reserve"
          onClick={() => handleReserveClick('Monthly Access', '50000.00', 'Hot Desk: Monthly Access')}
      />
    </div>
  

     {/* Booking Form in Modal */}
      <Modal isOpen={showForm} onClose={handleCloseModal}>
        <BookingForm plan={selectedPlan} onCancel={handleCloseModal} amount={selectedAmount} planName={selectedPlanName} />
      </Modal>
      </section>
  )
}

export default HotDeskPlan