import { useState, useEffect } from "react";
import styles from "../styles/pay.module.css";
import HeaderF from "../components/HeaderF";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import axios from "axios";
import SubmitBtn from "../components/SubmitBtn";
import { BASE_URL } from "../lib/constants";

export default function Pay() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [clicked, setClicked] = useState(false);
  const router = useRouter();

  const [formData, setFormData] = useState({
    customerName: "",
    customerEmail: "",
    amount: "",
    paymentForType: "", // reservation or training
    paymentForId: "" // reservationId or trainingId
  });

  const { name, email, amount, type, id } = router.query;

  useEffect(() => {
    if (router.isReady) {
      setFormData((prev) => ({
        ...prev,
        customerName: name || "",
        customerEmail: email || "",
        amount: amount || "",
        paymentForType: type || "", // coming from query param
        paymentForId: id || "" // coming from query param
      }));
    }
  }, [router.isReady]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setClicked(true);
    setIsSubmitting(true);

    try {
      const res = await axios.post(`${BASE_URL}/api/payment/initialize`, formData);
      window.location.href = res.data.checkoutUrl;
    } catch (err) {
      console.error(err);
      alert("Payment failed to initialize");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <HeaderF />
      <div className={styles.card}>
        <h2 className={styles.title}>Make a Payment</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={formData.customerName}
            onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
            required
            className={styles.input}
            readOnly
          />
          <br /><br />

          <input
            type="email"
            placeholder="Email"
            value={formData.customerEmail}
            onChange={(e) => setFormData({ ...formData, customerEmail: e.target.value })}
            required
            className={styles.input}
            readOnly
          />
          <br /><br />

          <input
            type="number"
            placeholder="Amount (NGN)"
            value={formData.amount}
            onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
            required
            className={styles.input}
            readOnly
          />
          <br /><br />

          {/* Hidden fields for backend */}
          <input type="hidden" name="paymentForType" value={formData.paymentForType} />
          <input type="hidden" name="paymentForId" value={formData.paymentForId} />

          <div className={styles.button}>
            <SubmitBtn clicked={clicked} disabled={isSubmitting} actionText={"PAY NOW"} />
          </div>
        </form>
      </div>
    </div>
  );
}


// import { useState, useEffect } from "react";
// import styles from "../styles/pay.module.css"
// import  HeaderF from "../components/HeaderF";
// import Footer from "../components/Footer";
// import { useRouter } from "next/router";
// import TextInputField from "../components/TextInputField";
// import axios from 'axios';
// import SubmitBtn from "../components/SubmitBtn";
// import { BASE_URL } from "../lib/constants";


// export default function Pay() {

//   const [isSubmitting, setIsSubmitting] = useState(false);
// // const actionText = 'PAY Now'

//   const router = useRouter();


//   const [formData, setFormData] = useState({
//     customerName: '',
//     customerEmail: '',
//     amount: '',
//   });
//     const [clicked, setClicked] = useState(false);
  
    
//  const { name, email, amount } = router.query;

// useEffect(() => {
//   if (router.isReady) {
//     setFormData(prev => ({
//       ...prev,
//       customerName: name || '',
//       customerEmail: email || '',
//       amount: amount || '',
//     }));
//   }
// }, [router.isReady]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setClicked(true);
//     setIsSubmitting(true);
//      axios
//     try {
//       const res = await axios.post(`${BASE_URL}/api/payment/initialize`, formData);
//       window.location.href = res.data.checkoutUrl;
        
//     } catch (err) {
//       alert('Payment failed to initialize');
//     }
//     setIsSubmitting(false);
//   };

//   return (
//     <div >
//       <HeaderF />
//       <div className={styles.card}>
//         <h2 className={styles.title}>Make a Payment</h2>      
//           <form className={styles.form} onSubmit={handleSubmit}>
//             <input
//               type="text"
//               placeholder="Your Name"
//               inputLabel="Name"
//               value={formData?.customerName}
//               onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
//               required
//               className={styles.input}
//               readOnly

//             />
//         <br /><br />
//         <input
//           type="email"
//           placeholder="Email"
//           label="Email"
//           value={formData.customerEmail}
//           onChange={(e) => setFormData({ ...formData, customerEmail: e.target.value })}
//           required
//           className={styles.input}
//           readOnly

//         />
//         <br /><br />
//         <input
//           type={"number"}
//           placeholder={"Amount (NGN)"}
//            inputLabel={"Email"}
//           value={formData.amount}
//           onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
//           required
//           className={styles.input}
//           readOnly

//         />
//         <br /><br />
//         <div className={styles.button}>
//            <SubmitBtn 
//               clicked={clicked}
//                disabled={isSubmitting}
              
//               actionText={"PAY NOW"}
// />
//             {/* {isSubmitting ? 'Processing...': ''} */}
//         </div>
       
//           </form>
//       </div>
//     </div>
//   );
// }

