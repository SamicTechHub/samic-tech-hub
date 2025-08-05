import { useState } from "react";
import styles from "../styles/pay.module.css"
import  HeaderF from "../components/HeaderF";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import TextInputField from "../components/TextInputField";
import axios from 'axios';
import SubmitBtn from "../components/SubmitBtn";
import { BASE_URL } from "../lib/constants";


export default function Pay() {
  const [formData, setFormData] = useState({
    customerName: '',
    customerEmail: '',
    amount: '',
  });
    const [clicked, setClicked] = useState(false);
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setClicked(true);

     axios
    try {
      const res = await axios.post(`${BASE_URL}/api/payment/initialize`, formData);
      window.location.href = res.data.checkoutUrl;
    } catch (err) {
      alert('Payment failed to initialize');
    }
  };

  return (
    <div >
      <HeaderF />
      <div className={styles.card}>
        <h2 className={styles.title}>Make a Payment</h2>      
          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              inputLabel="Name"
              value={formData?.customerName}
              onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
              required
              className={styles.input}
            />
        <br /><br />
        <input
          type="email"
          placeholder="Email"
          label="Email"
          value={formData.customerEmail}
          onChange={(e) => setFormData({ ...formData, customerEmail: e.target.value })}
          required
          className={styles.input}
        />
        <br /><br />
        <input
          type={"number"}
          placeholder={"Amount (NGN)"}
           inputLabel={"Email"}
          value={formData.amount}
          onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
          required
          className={styles.input}
        />
        <br /><br />
        <div className={styles.button}>
           <SubmitBtn 
              clicked={clicked}
              actionText={"PAY NOW"}/>
        </div>
       
          </form>
      </div>
    </div>
  );
}

