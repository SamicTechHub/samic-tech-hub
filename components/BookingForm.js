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

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const res = await axios.post(`${BASE_URL}/api/spaces/reservations`, form, {
  //       headers: { 'Content-Type': 'application/json' }
  //     });

  //     if (res.status === 200 || res.status === 201) {
  //       // grab current form values BEFORE resetting
  //       const { name, email, amount, planName } = form;

  //       // navigate to payment with query
  //       router.push({
  //         pathname: '/payment',
  //         query: { name, email, amount, planName }
  //       });

  //     } else {
  //       setMessage('Failed to reserve.');
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     setMessage('Failed to reserve.');
  //   }
  // };
    
  const [bookingsMode, setBookingsMode] = useState("whatsapp");
  
    const bookingMode = "whatsapp"; // change to "payment" later

    const sendToWhatsApp = (data) => {
    const { name, email, amount, planName, date, time } = data;

    const message = `
    Hello, I want to book a workspace.

    Name: ${name}
    Email: ${email}
    Plan: ${planName}
    Amount: ₦${amount}
    Date: ${date}
    Time: ${time}
      `;

      const encodedMessage = encodeURIComponent(message.trim());

      const phoneNumber = "2349062843490";

      const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

      window.open(whatsappURL, "_blank");
    };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post(`${BASE_URL}/api/spaces/reservations`, form, {
      headers: { 'Content-Type': 'application/json' }
    });

    if (res.status === 200 || res.status === 201) {
      const bookingData = { ...form };

      //  SWITCH LOGIC
      if (bookingMode === "whatsapp") {
        sendToWhatsApp(bookingData);
      } else {
        const { name, email, amount, planName } = bookingData;

        router.push({
          pathname: '/payment',
          query: { name, email, amount, planName }
        });
      }

      // optional: reset form
      setForm({
        name: '',
        email: '',
        planName: planName || '',
        amount: amount || '',
        date: '',
        time: ''
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
        {/* <div>
          <button type="button" onClick={() => setBookingsMode("whatsapp")}>
            Chat on WhatsApp
          </button>
          <button type="button" onClick={() => setBookingsMode("payment")}>
            Pay Now
          </button>
        </div> */}
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
