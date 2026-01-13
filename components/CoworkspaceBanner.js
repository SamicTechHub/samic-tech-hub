import React, { useState } from "react";
import styles from "../styles/trainingBanner.module.css";

const CoworkspaceBanner = () => {
  const handleClick = () => {
    //  Meta Pixel tracking
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Contact", {
        content_name: "Coworkspace Enquiry",
        method: "WhatsApp",
        page: "coworkspace",
      });
    }

    //  Open WhatsApp
    window.open("https://chat.whatsapp.com/IKuusw8D7WMHx4VTQg79Rc", "_blank");
  };

  return (
    <div
      className={styles.trainingBanner}
      onClick={handleClick}
      role="button"
      tabIndex={0}
    >
      Book our Coworking Space for as low as ₦1500{" "}
      <span>Click here for more enquires.</span>
    </div>
  );
};

export default CoworkspaceBanner;
