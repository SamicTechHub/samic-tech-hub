import React from 'react';
import styles from '../styles/card.module.css';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modalContainer}>
        {/* <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button> */}
        {children}
      </div>
    </div>
  );
};

export default Modal;


// import { useEffect, useRef } from 'react';
// import styles from '../styles/card.module.css';
// import { createPortal } from 'react-dom';


// const Modal = ({ isOpen, onClose, children }) => {
    
//     const modalRef = useRef(null);

//     useEffect(() => {
//         if (isOpen) {
//             document.body.style.overflow = 'hidden';
//             document.body.style.position = 'fixed';
//             document.body.style.width = '100%';
//             document.body.style.top = `-${window.scrollY}px`;

//             // Scroll to modal position after it renders
//             setTimeout(() => {
//                 if (modalRef.current) {
//                     modalRef.current.scrollIntoView({
//                         behavior: 'smooth',
//                         block: 'nearest',
//                     });
//                 }
//             //     const modalTop = modalRef.current.getBoundingClientRect().top;
//             //     const offset = 10; // how many pixels above the modal you want to stop

//             //     window.scrollBy({
//             //         top: modalTop - offset,
//             //         behavior: 'smooth',
//             //     });
//             // }
//             }, 50); // small delay to ensure modal is mounted first

//         } else {
//             const scrollY = document.body.style.top;
//             document.body.style.overflow = '';
//             document.body.style.position = '';
//             document.body.style.width = '';
//             document.body.style.top = '';
//             window.scrollTo(0, parseInt(scrollY || '0') * -1);
//         }

//         return () => {
//             document.body.style.overflow = '';
//             document.body.style.position = '';
//             document.body.style.width = '';
//             document.body.style.top = '';
//         };
//     }, [isOpen]);

//     if (!isOpen) return null;

//     return createPortal(
//         <div className={styles.overlay}>
//             <div className={styles.modalContainer}>
//                     {/* <button className={styles .closeButton} onClick={onClose}>✕</button> */}
//                     {children}
//             </div>
//         </div>,
//          document.body
//     );
// };

// export default Modal;