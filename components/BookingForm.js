
import { useState } from 'react';
import styles from '../styles/space.module.css';
import Image from 'next/image';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '', email: '', date: '', spaceId: '', notes: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/api/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    if (res.ok) alert('Booking successful!');
    else alert('Booking failed.');
  };

  return (
    <div className={styles.spaceContainer}>
      
      <div>
         <Image
      src={"/img/workspace2.webp"} width={700} height={600} alt={"workspace photo"}  />
      </div>
     <div className={styles.formDiv}>
      <h1>Book a space</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
      <input className= {styles.input} type="text" placeholder="Name" required onChange={e => setFormData({ ...formData, name: e.target.value })} />
      <input className= {styles.input} type="email" placeholder="Email" required onChange={e => setFormData({ ...formData, email: e.target.value })} />
      <input className= {styles.input} type="date" required onChange={e => setFormData({ ...formData, date: e.target.value })} />
      <input className= {styles.input} type="text" placeholder="Space ID" required onChange={e => setFormData({ ...formData, spaceId: e.target.value })} />
      <textarea className={styles.textarea} placeholder="Notes" onChange={e => setFormData({ ...formData, notes: e.target.value })}></textarea>
      <button className={styles.button} type="submit">Book Now</button>
    </form>
     </div>
     
    </div>
   
  );
}
