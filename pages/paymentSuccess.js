import { useEffect, useState } from "react";
import styles from "../styles/paymentSuccess.module.css"
import { BASE_URL } from "../lib/constants";
import axios from "axios";

const PaymentSuccess = () => {
  const [status, setStatus] = useState("loading"); // loading | success | failed
  const [transaction, setTransaction] = useState(null);

 useEffect(() => {
  const reference = new URLSearchParams(window.location.search).get("transactionReference");
  console.log(reference);

  if (reference) {
    setTimeout(() => {
      axios.post(`${BASE_URL}/api/payment/verify-txn`, {
        transactionReference: reference
      }, {
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then((res) => {
        const data = res.data;
        if (data.success && data.data?.paymentStatus === "PAID") {
          setTransaction(data.data);
          setStatus("success");
        } else {
          setStatus("failed");
        }
      })
      .catch((err) => {
        console.error("Verification failed", err.response?.data || err.message);
        setStatus("failed");
      });
    }, 3000); 
  } else {
    setStatus("failed");
  }
}, []);


  if (status === "loading") {
    return <p className={styles.loadingText}>Verifying payment...</p>;
  }

  if (status === "failed") {
    return (
      <div className={`${styles.messageContainer} ${styles.failed}`}>
        <h2 className={styles.title}>Payment Failed</h2>
        <p>We couldn't confirm your transaction.</p>
      </div>
    );
  }

  return (
    <div className={`${styles.messageContainer} ${styles.success}`}>
      <h2 className={styles.title}>Payment Successful!</h2>
      <p className={styles.details}>Thank you for your payment.</p>
      <p className={styles.details}>Reference: {transaction.transactionReference}</p>
      <p className={styles.details}>Amount: ₦{transaction.amountPaid}</p>
      <p className={styles.details}>
        Date: {new Date(transaction.paidOn).toLocaleString()}
      </p>
    </div>
  );
};

export default PaymentSuccess;
