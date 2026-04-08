import React from 'react';
import styles from '../styles/card.module.css'
import { IoCheckmarkDone } from "react-icons/io5";
import Image from 'next/image';
import { useRouter } from 'next/router';


const PlanCards = ({ icon,title, price, description, features, idealFor, buttonText, onClick}) => {
    
  return (
    <div className={styles.card}>
      <p className={styles.calender}>{icon}</p>
      <div className={styles.cardHeader}>
        <h2>{title}</h2>
        <p className={styles.price}>{price}</p>
      </div>
      <p className={styles.description}>{description}</p>

    <ul className={styles.features}>
        {features.map((item, index) => (
            <li key={index} className={styles.featureItem}>
            <IoCheckmarkDone className={styles.icon} />
            <span>{item}</span>
            </li>
        ))}
    </ul>

      <div className={styles.idealFor}>
        <ul>
          {idealFor.map((item, index) => (
            <li key={index} className={styles.featureItem}>
                <IoCheckmarkDone className={styles.icon} />
                <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
  <button className={styles.button} onClick={onClick}>
    {buttonText}
  </button>
</div>

    </div>
  );
};

export default PlanCards;
