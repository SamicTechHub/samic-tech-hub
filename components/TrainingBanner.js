import React from 'react'
import { useEffect, useState } from "react";
import styles from "../styles/trainingBanner.module.css"

const TrainingBanner = () => {
      const [showBanner, setShowBanner] = useState(false);
   
  return (
    <div
      className={styles.trainingBanner}
      onClick={() => window.open("https://forms.gle/Yts4N5nocq36NyKy5", "_blank")}

    >
      {/* <RocketLaunchIcon style={{ fontSize: 15, color: "red" }} /> */}
       Free Tech Training Coming Soon!{" "}
      <span>Click here to register.</span>
    </div>
)
}

export default TrainingBanner