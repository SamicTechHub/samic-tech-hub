import { useState } from "react";
import styles from "../styles/pay.module.css"
import  HeaderF from "../components/HeaderF";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import TextInputField from "../components/TextInputField";
import SubmitBtn from "../components/SubmitBtn";

const Pay = () => {
    const router = useRouter();
    const [amount, setAmount] = useState("");
    const [cardPayment, setCardPayment] = useState("");
    const [bankPayment, setBankPayment] = useState("");
    const [clicked, setClicked] = useState(false);
    const [formData, setFormData] = useState( {  amount: '',paymentMethod: ''})
      
    
    const handlePayment = (e) => {
    e.preventDefault();
    setClicked(true);
    // console.log(formData);
      }
  // const [emailAddress, setEmail] = useState("");
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");

  return (
    <div>
        <HeaderF />
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>Make a Payment</h2>
        {/* <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className={styles.input}
        /> */}
        {/* <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className={styles.input}
        /> */}
        {/* <input
          type="email"
          placeholder="Email Address"
          value={emailAddress}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
        /> */}
        <TextInputField
          type="number"
          placeholder="Amount (₦)"
          // label ={Amount}
          value={formData?.amount}
          onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
          className={styles.input}
        />

      <div className={styles.paymentMethod}>
        <div className={styles.checkbox}>
       <label>
        <input
           type="radio"
          name="paymentMethod"
          value="card"
          inputLabel="Card Payment"
          checked={formData.paymentMethod === 'card'}
          onChange={(e) =>
            setFormData({ ...formData, paymentMethod: e.target.value })
          }
        />
        Card Payment</label>
       </div>

       <div className={styles.checkbox}>
       <label>
        <input
           type="radio"
          name="paymentMethod"
          value="bank"
          inputLabel="Bank Payment"
          checked={formData.paymentMethod === 'bank'}
          onChange={(e) =>
            setFormData({ ...formData, paymentMethod: e.target.value })
          }
        />
        Bank Payment</label>
       </div>

        </div> 
       
          {/* <SubmitBtn
             clicked={clicked}
             action={handlePayment}
            actionText={"PAY NOW"}
                      
          /> */}
    
      </div>
     
    </div> 
    {/* <Footer /> */}
    </div>
  );
};

export default Pay;
