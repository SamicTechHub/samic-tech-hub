import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import style from '../styles/course.module.css';
import Link from 'next/link';

const programsData = [
   {
    title: 'Cybersecurity',
    description:'Understand core cybersecurity principles and practices to secure digital systems.',
    image: '/img/Vector2.svg',
    link: '/tracks/backend',
    price: '₦300,000',
  },
  {
    title: 'Full-stack Software Development',
    description:'Build responsive frontend apps and powerful backend systems using modern tools and frameworks.',
    image: '/img/Vector2.svg',
    link: '/tracks/fullStack',
    price: '₦550,000',
  },
  {
    title: 'Digital Marketing',
    description:'Master online marketing, content creation, and campaign strategies for business growth.',
    image: '/img/Vector2.svg',
    link: '/tracks/digitalMarketing',
    price: '₦150,000',
  },
  {
    title: 'UX/UI Design',
    description:'Design user-friendly and beautiful interfaces that solve real problems.',
    image: '/img/Vector2.svg',
    link: '/tracks/uiux',
    price: '₦200,000',
  },
  {
    title: 'Product Management',
    description:'Learn to manage digital products from idea to launch using agile methodologies.',
    image: '/img/Vector2.svg',
    link: '/tracks/productManagement',
    price: '₦200,000',
  },
  {
    title: 'Frontend Development',
    description:'Frontend is where design meets interaction — bringing ideas to life on your screen.',
    image: '/img/Vector2.svg',
    link: '/tracks/frontend',
    price: '₦300,000',
  },
   {
    title: 'Backend Development',
    description:'Backend is the power behind the scenes — making everything work smoothly.',
    image: '/img/Vector2.svg',
    link: '/tracks/backend',
    price: '₦300,000',
  },
  
];

export default function Programs() {
  const router = useRouter();
  const [showAll, setShowAll] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false)

  const initialPrograms = programsData.slice(0, 3);
  const remainingPrograms = programsData.slice(3);

  return (
    <section className={style.ourProgramSection}>
      <div className={style.description}>
        <h2 className={style.sectionTitle}>Our Programs</h2>
        <p>
          We reduce risk through consulting & security product expertise. We are a trusted
          advisor for all cyber security.
        </p>
      </div>

      {/* First Row - Always Visible */}
      <div className={style.programGrid}>
        {initialPrograms.map((program, index) => (
          <div key={index} className={style.programCard}>
            <div className={style.svgContainer}>
              <Image src={program.image} alt={program.title} width={100} height={100} />
            </div>
            <h3>{program.title}</h3>
            <p>{program.description}</p>
            <div className={style.buttonGroup}>
              <button
                onClick={() => router.push(program.link)}
                className={style.primaryBtn}
              >
                Learn More →
              </button>
              <button
                  className={style.priceBtn}
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedPayment(program.title);
                    setShowPaymentModal(true);
                  }}
              >
                {program.price}
              </button>
              
            </div>
          </div>
        ))}
      </div>

      {/* Second Row - Only if View More clicked */}
      {showAll && (
        <div className={style.programGrid}>
          {remainingPrograms.map((program, index) => (
            <div key={index} className={style.programCard}>
               <div className={style.svgContainer}>
              <Image src={program.image} alt={program.title} width={100} height={100} />
            </div>
              <h3>{program.title}</h3>
              <p>{program.description}</p>
              <div className={style.buttonGroup}>
                <button
                  onClick={() => router.push(program.link)}
                  className={style.primaryBtn}
                >
                  Learn More →
                </button>
                 <button
                  className={style.priceBtn}
                  onClick={(e) => {
                    e.preventDefault();
                    
                    setSelectedPayment(program.title);
                    setShowPaymentModal(true);
                  }}
              >
                {program.price}
              </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* View More Button */}
      {!showAll && remainingPrograms.length > 0 && (
        <div style={{ textAlign: 'center', marginTop: 20 }}>
          <button onClick={() => setShowAll(true)} className={style.secondaryBtn}>
            View More Programs ↓
          </button>
        </div>
      )}

      {/* Payment Section */}
      {showPaymentModal && (
          <div className={style.modalOverlay}>
            <div className={style.paymentModal}>
              <h3>Payment for: {selectedPayment}</h3>
              <p>You'll be redirected to our secure payment gateway</p>
              <div className='style.modalButton'>
                <button 
                onClick={()=> setShowPaymentModal(false)} 
                className={style.secondaryBtn}
                >
                  Cancel
                </button>
                <button 
                  onClick={() => router.push('/payment')}
                  className={style.primaryBtn}
                >
                Proceed to Payment
              </button>
              </div>

            </div>
            
          </div>
       
          
       
      )}
    </section>
  
    
  );
}
