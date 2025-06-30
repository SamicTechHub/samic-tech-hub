import { useEffect, useState } from "react";
import styles from "../styles/paymentSuccess.module.css"

const PaymentSuccess = () => {
  const [status, setStatus] = useState("loading"); // loading | success | failed
  const [transaction, setTransaction] = useState(null);

  useEffect(() => {
    const reference = new URLSearchParams(window.location.search).get("paymentReference");

    if (reference) {
      fetch(`/api/verify-payment?reference=${reference}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.paymentStatus === "PAID") {
            setTransaction(data);
            setStatus("success");
          } else {
            setStatus("failed");
          }
        })
        .catch(() => setStatus("failed"));
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
      <p className={styles.details}>Reference: {transaction.paymentReference}</p>
      <p className={styles.details}>Amount: ₦{transaction.amountPaid}</p>
      <p className={styles.details}>
        Date: {new Date(transaction.paidOn).toLocaleString()}
      </p>
    </div>
  );
};

export default PaymentSuccess;
