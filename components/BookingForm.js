import { useState, useEffect } from 'react';
import styles from '../styles/space.module.css';
import { BASE_URL } from "../lib/constants";
import { useRouter } from 'next/router';
import axios from 'axios';

export default function BookingForm({ onCancel, plan, amount, planName }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    planName: planName || '',
    amount: amount || '',
    date: '',
    time: ''
  });
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setForm(prev => ({
      ...prev,
      amount: amount || '',
      planName: planName || ''
    }));
  }, [amount, planName]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${BASE_URL}/api/spaces/reservations`, form, {
        headers: { 'Content-Type': 'application/json' }
      });

      if (res.status === 200 || res.status === 201) {
        // grab current form values BEFORE resetting
        const { name, email, amount, planName } = form;

        // navigate to payment with query
        router.push({
          pathname: '/payment',
          query: { name, email, amount, planName }
        });

      } else {
        setMessage('Failed to reserve.');
      }
    } catch (error) {
      console.error(error);
      setMessage('Failed to reserve.');
    }
  };

  return (
    <div className={styles.spaceContainer}>
      <div className={styles.formDiv}>
        <h2>Make a Reservation for {plan}</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            className={styles.input}
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            className={styles.input}
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            className={styles.input}
            type='number'
            placeholder="Amount (NGN)"
            name="amount"
            value={form.amount}
            onChange={handleChange}
            readOnly
          />
          <input
            className={styles.input}
            type='text'
            placeholder="Plan"
            name="planName"
            value={form.planName}
            onChange={handleChange}
            readOnly
          />
          <input
            className={styles.input}
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
          />
          <input
            className={styles.input}
            type="time"
            name="time"
            value={form.time}
            onChange={handleChange}
            required
          />
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
