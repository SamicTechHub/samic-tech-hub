import { useState } from "react";
import styles from "../styles/pay.module.css"
import  HeaderF from "../components/HeaderF";
import Footer from "../components/Footer";
import { useRouter } from "next/router";

const Pay = () => {
    const router = useRouter();
  const [emailAddress, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handlePayment = async () => {
    const res = await fetch("/api/payment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount,
        firstName,
        lastName,
        emailAddress,
      }),
    });
    const result = await res.json();

    if (result.requestSuccessful) {
      window.location.href = result.response.checkoutUrl;
    } else {
      alert("Payment initiation failed");
    }
  };

  return (
    <div>
        <HeaderF />
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>Make a Payment</h2>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className={styles.input}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className={styles.input}
        />
        <input
          type="email"
          placeholder="Email Address"
          value={emailAddress}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
        />
        <input
          type="number"
          placeholder="Amount (₦)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className={styles.input}
        />
        <button onClick={handlePayment} className={styles.button}>
          Pay Now
        </button>
      </div>
     
    </div> 
    {/* <Footer /> */}
    </div>
  );
};

export default Pay;
