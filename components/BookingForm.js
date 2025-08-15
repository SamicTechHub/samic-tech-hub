
import { useState, useEffect } from 'react';
import styles from '../styles/space.module.css';
import Image from 'next/image';
import { BASE_URL } from "../lib/constants"
import { useRouter } from 'next/router';


export default function BookingForm({onCancel, plan, amount, planName}) {
 const [form, setForm] = useState({ name: '', email: '', planName:planName ||'', amount:amount ||'', date: '', time: '' });
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  useEffect(() => {
  setForm(prev => ({ ...prev, amount: amount || '', planName:planName || '' }));
}, [amount]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:8081/api/spaces/reservations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setForm({ name: '', email: '', amount: '', planName: '', date: '', time: '' });
       router.push({
        pathname: '/payment',
        query: {
        name: form.name,
        email: form.email,
        amount: form.amount,
        planName: form.planName
  }})
    } else {
      setMessage('Failed to reserve.');
    }
  };
  return (
    <div className={styles.spaceContainer}>
      
      
     <div className={styles.formDiv}>
       <h2>Make a Reservation for {plan}</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input className= {styles.input} name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
        <input className= {styles.input} name="email" placeholder="Email" value={form.email} onChange={handleChange} required/>
        <input className= {styles.input} type='number' placeholder="Amount (NGN)"  name="amount"  value={form.amount} onChange={handleChange}  readOnly/>
        <input className= {styles.input} type='text' placeholder="Plan"  name="planName"  value={form.planName} onChange={handleChange}  readOnly/>
        <input className= {styles.input} type="date" name="date" value={form.date} onChange={handleChange} required/>
        <input className= {styles.input} type="time" name="time" value={form.time} onChange={handleChange} required/>
        <button type="submit" className={styles.button}>Reserve</button>
          <button
            type="button"
            onClick={onCancel}
            className={styles.cancelButton}
          >
          Cancel
        </button>
      </form>
      {message && <p>{message}</p>}
      
     </div>
     
    </div>
   
  );
}

