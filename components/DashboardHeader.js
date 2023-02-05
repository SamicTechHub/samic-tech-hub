import React from 'react'
import style from "../styles/dashboard.module.css";
import Image from "next/image"
import {useRouter} from "next/router"
import {
    AlignLeftOutlined,
    AlignRightOutlined,
  } from "@ant-design/icons";
  
import { useSelector, useDispatch } from "react-redux";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
// import { logOut } from '../redux/slices/authSlice';

function DashboardHeader({userObj, toggleDisplay, isClicked}) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const router = useRouter()
//   const dispatch = useDispatch();

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

    const logout = () => {
    //  alert(state)
    // dispatch(logOut());
    router.push({
      pathname: "/login",
    });
  };



  return (
    <header className={style.header}>
    <div className={style.navLogo}>
      <label
        htmlFor={"menu_toggle"}
        className={style.menu_toggler}
        onClick={toggleDisplay}
      >
        {isClicked ? <AlignLeftOutlined /> : <AlignRightOutlined />}
      </label>
    </div>

        {/* <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Dashboard
      </Button> */}
      <div style={{cursor: "pointer"}} className={style.header_avatar} onClick={handleClick}>
        <Image
        src={userObj?.userImageUrl || "/img/userImage.png"}
        alt="avatar"
        layout={"fill"}
        objectFit={"cover"}
        objectPosition={"top"}
      />
    </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={()=>router.push("/user/profile")}>Profile</MenuItem>
        {/* <MenuItem onClick={handleClose}>My account</MenuItem> */}
        <MenuItem onClick={logout}>Logout</MenuItem>
      </Menu>
    
  </header>
  )
}

export default DashboardHeader