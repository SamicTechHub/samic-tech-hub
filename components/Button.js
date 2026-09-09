// components/Button.jsx
import React from "react";
import styles from '../styles/button.module.css';

const Button = ({ children, onClick, className = "", type = "button", disabled = false }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${styles.button} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;