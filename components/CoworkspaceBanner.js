import React, { useState } from "react";
import styles from "../styles/trainingBanner.module.css";

const CoworkspaceBanner = () => {
  const handleClick = () => {
    //  Meta Pixel tracking
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("trackCustom", "CoworkspaceWhatsAppClick", {
        content_name: "Coworkspace Enquiry",
        method: "WhatsApp",
        page: "coworkspace",
      });
    }
    

    //  Open WhatsApp
    window.open("https://chat.whatsapp.com/IKuusw8D7WMHx4VTQg79Rc", "_blank");
  };

  return (
    <button
  className={styles.trainingBanner}
  onClick={handleClick}
>
  Book our Coworking Space for as low as ₦2000{" "}
  <span>Click here for more enquiries.</span>
</button>

  );
};

export default CoworkspaceBanner;
