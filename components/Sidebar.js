import React, {useState} from 'react'
import style from "../styles/dashboard.module.css"
import {
  EyeFilled,
  PlusCircleFilled,
  ReadFilled,
  PayCircleFilled,
  QuestionCircleFilled,
  CloseCircleOutlined,
  DashboardFilled,
  BookFilled,
  SettingFilled,
} from "@ant-design/icons";
import Link from "next/link";
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

function SideBar({
  display,
  width,
  userImageWidth,
  clicked,
  toggleDisplay,
}) {

  const [user, setUser] = useState("");

  const { route, pathname } = useRouter();

  const active = (path) => {
    if (path.indexOf(pathname) !== -1) {
      return true;
    } else {
      return false;
    }
  };

  // const { auth } = useSelector((state) => state);
  const auth = ""
  const userObj = auth?.user;
  const firstname = auth?.user?.firstName;
  const lastname = auth?.user?.lastName;

  return (
    <div className={`${style.sidebar} ${width}`}>
      <div className={style.sidemenu}>
        <div onClick={toggleDisplay} className={style.closeSidebar}>
          {" "}
          {clicked ? <CloseCircleOutlined /> : ""}{" "}
        </div>
        <div className={style.side_user}>
          <div className={`${style.side_img} ${userImageWidth}`}>
            <Image
              src={userObj?.userImageUrl || "/img/user3.png"}
              alt="avatar"
              layout={"fill"}
              objectFit={"cover"}
              objectPosition={"top"}
              priority
            />
          </div>
          {clicked ? (
            <div className={`${style.user} ${display}`}>
              <small>
                {userObj?.firstName || firstname} {userObj?.lastName || lastname}
              </small>
              <p>{userObj?.role}</p>
            </div>
          ) : (
            ""
          )}
          <div className={style.user}>
            <small>
              {userObj?.firstName || firstname} {userObj?.lastName || lastname}
            </small>
            <p>{userObj?.role}</p>
          </div>
        </div>
        <ul className={style.sideLinks}>
          <div className={style.sidebarHeadContainer}>
            <h3 className={`${style.display} ${style.sidebarLink}`}>User</h3>
            <li>
              <Link href={"/user"}>
                <a
                  className={
                    active(["/admin", "/user/verify"]) ? `${style.active}` : ""
                  }
                >
                  <span>
                    <DashboardFilled className={style.sideBarLinkIcon}/>
                  </span>
                  <span className={`${style.sidebarLink} ${display}`}>
                    Dashboard
                  </span>
                </a>
              </Link>
            </li>
            <li>
              <Link href={"/user/profile"}>
                <a
                  className={active(["/user/profile"]) ? `${style.active}` : ""}
                >
                  <span>
                    <SettingFilled className={style.sideBarLinkIcon}/>
                  </span>
                  <span className={`${style.sidebarLink} ${display}`}>
                    Profile
                  </span>
                </a>
              </Link>
            </li>
            <li>
            <Link href={"/user/upgrade"}>
              <a className={active(["/user/upgrade"]) ? `${style.active}` : ""}>
                <span>
                  <PayCircleFilled className={style.sideBarLinkIcon}/>
                </span>
                <span className={`${style.sidebarLink} ${display}`}>
                  Payment
                </span>
              </a>
            </Link>
          </li>

          </div>


          <li>
            <Link href={"/user/post"}>
              <a className={active(["/user/post"]) ? `${style.active}` : ""}>
                <span>
                  <BookFilled className={style.sideBarLinkIcon} />
                </span>
                <span className={`${style.sidebarLink} ${display}`}>Blog</span>
              </a>
            </Link>
          </li>

        </ul>
      </div>
    </div>
  )
}

export default SideBar