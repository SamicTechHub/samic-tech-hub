import React from 'react'
import PlanCards from './planCards';
import { useState } from 'react';
import BookingForm from './BookingForm';
import Modal from './Modal';


const HotDeskPlan = ({onclose}) => {

    const [showForm, setShowForm] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState('');


    const handleReserveClick = (planTitle) => {
        setSelectedPlan(planTitle);
        setShowForm(true);

    }

     const handleCloseModal = () => {
            setShowForm(false);
        };
  return (
    <section>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
      <button style={{ height: '40px', backgroundColor: 'red', width: '40px', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }} onClick={onclose}>X</button>
      <PlanCards
        title="Daily Access"
        price="₦2,000 / day"
        description="Perfect for freelancers or remote workers needing a workspace for a single day."
        features={[
          "8 AM - 6 PM access",
          "High-speed internet",
          "Ergonomic workspace",
          "Free coffee or tea",
          "Access to lounge areas",
          "Power outlets & charging stations",
        ]}
        idealFor={[
          "Travelers passing through town",
          "Freelancers needing a quiet space",
          "Students preparing for exams",
        ]}
          buttonText="Reserve"
          onClick={() => handleReserveClick('Daily Access')}
         
      />

      <PlanCards
        title="Weekly Access"
        price="₦10,000 / week"
        description="Best for short-term projects or teams needing a week of productivity."
        features={[
           "7-day full access",
          "Reserved desk option",
          "Priority internet bandwidth",
          "5 free print/scan pages",
          "Complimentary refreshments",
          "Networking with others",
        ]}
        idealFor={[
          "Freelancers on short-term gigs",
          "Startup sprints",
          "Short-term visits",
        ]}
         buttonText="Reserve"
          onClick={() => handleReserveClick('Weekly Access')}
      />

      <PlanCards
        title="Monthly Access"
        price="₦40,000 / month"
        description="A full-time flexible workspace for remote workers, creatives, and startups."
        features={[
          "30-day unrestricted access",
          "Dedicated desk option",
          "Meeting room (4 hrs free)",
          "Business address use",
          "Locker storage available",
          "Member event access",
        ]}
        idealFor={[
          "Remote employees",
          "Online business owners",
          "Long-term freelancers",
        ]}

         buttonText="Reserve"
          onClick={() => handleReserveClick('Monthly Access')}
      />
    </div>
  

     {/* Booking Form in Modal */}
      <Modal isOpen={showForm} onClose={handleCloseModal}>
        <BookingForm plan={selectedPlan} onCancel={handleCloseModal} />
      </Modal>
      </section>
  )
}

export default HotDeskPlan