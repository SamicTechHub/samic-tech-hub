import React, { useState } from 'react'
import style from "../styles/dashboard.module.css";
import Sidebar from './Sidebar';
import DashboardHeader from "./DashboardHeader"
import { useSelector } from 'react-redux';
// import { ToastContainer, toast } from "react-toastify";

function DashboardWrapper({children, userObj}) {
    const [clicked, setClicked] = useState(false)
    const [changeWidth, setChangeWidth] = useState("");
    const [display, setDisplay] = useState(style.changeDisplay);
    const [userImageWidth, setUserImageWidth] = useState("");

    // const { auth } = useSelector((state) => state);


    const toggleDisplay = () => {
        if (changeWidth === "") {
        setChangeWidth(style.changeWidth);
        setDisplay(style.changeDisplay);
        setUserImageWidth(style.userImageWidth);
        setClicked(!clicked);
        } else {
        setClicked(false);
        setChangeWidth("");
        setDisplay("");
        setUserImageWidth("");
        }
    };
  return (
        <div className={style.dashboardBody}>
            {/* <ToastContainer /> */}
            <Sidebar
                width={changeWidth}
                display={display}
                userImageWidth={userImageWidth}
                clicked={clicked}
                toggleDisplay={toggleDisplay}
            />
            <div className={style.main_content}>
                {clicked ? (
                <div onClick={toggleDisplay} className={style.overlayToggle}></div>
                ) : (
                ""
                )}
            <DashboardHeader userObj={userObj} toggleDisplay={toggleDisplay} isClicked={clicked}/>
                <main className={style.main}>
                    {children}
                </main>
            </div>
        
        </div>
  )
}

export default DashboardWrapper
