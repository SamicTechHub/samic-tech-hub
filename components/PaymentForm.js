import { useState } from "react";
import style from '../styles/cowork.module.css'
import  HeaderF from "./HeaderF";
import Footer from "./Footer";
import { useRouter } from "next/router";
import TextInputField from "./TextInputField";
import axios from 'axios';
import SubmitBtn from "./SubmitBtn";
import { BASE_URL } from "../lib/constants";


export default function PaymentForm() {
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
      <div className={style.card}>
        <h2 className={style.title}>Make a Payment</h2> 
          <form className={style.form} onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              inputLabel="Name"
              value={formData?.customerName}
              onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
              required
              className={style.input}
            />
        <br /><br />
        <input
          type="email"
          placeholder="Email"
          label="Email"
          value={formData.customerEmail}
          onChange={(e) => setFormData({ ...formData, customerEmail: e.target.value })}
          required
          className={style.input}
        />
        <br /><br />
        <input
          type={"number"}
          placeholder={"Amount (NGN)"}
           inputLabel={"Email"}
          value={formData.amount}
          onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
          required
          className={style.input}
        />
        <br /><br />
        <div className={style.paymentButton}>
           <SubmitBtn 
              clicked={clicked}
              actionText={"PAY NOW"}/>
        </div>
       
          </form>
      </div>
    </div>
  );
}

