
import { useState } from 'react';
import styles from '../styles/space.module.css';
import Image from 'next/image';
import { BASE_URL } from "../lib/constants"
import { useRouter } from 'next/router';


export default function BookingForm({onCancel, plan}) {
 const [form, setForm] = useState({ name: '', email: '', coworkspace: '', date: '', time: '' });
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:8081/api/spaces/reservations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setForm({ name: '', email: '', coworkspace: '', date: '', time: '' });
       router.push({
        pathname: '/payment',
        query: {
        name: form.name,
        email: form.email
  }})
    } else {
      setMessage('Failed to reserve. Try again.');
    }
  };
  return (
    <div className={styles.spaceContainer}>
      
      <div>
         <Image
      src={"/img/workspace2.webp"} width={700} height={600} alt={"workspace photo"}  />
      </div>
     <div className={styles.formDiv}>
       <h2>Make a Reservation for {plan}</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input className= {styles.input}  name="name" placeholder="Your Name" value={form.name} onChange={handleChange} />
        <input className= {styles.input}  name="email" placeholder="Email" value={form.email} onChange={handleChange} />
        <input className= {styles.input}  name="coworkspace" placeholder="Coworkspace" value={form.coworkspace} onChange={handleChange} />
        <input className= {styles.input}  type="date" name="date" value={form.date} onChange={handleChange} />
        <input className= {styles.input}  type="time" name="time" value={form.time} onChange={handleChange} />
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

