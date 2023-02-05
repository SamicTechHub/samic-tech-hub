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
              src={userObj?.userImageUrl || "/img/userImage.png"}
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
                    <DashboardFilled />
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
                    <SettingFilled />
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
                  <PayCircleFilled />
                </span>
                <span className={`${style.sidebarLink} ${display}`}>
                  Payment
                </span>
              </a>
            </Link>
          </li>

          </div>
          <div className={style.sidebarHeadContainer}>
            <h3 className={`${style.display} ${style.sidebarLink}`}>Forum</h3>
               <li style={{marginTop: ".5rem"}}>
              <Link href={"/user/forum"}>
                <a className={active(["/user/forum","/user/forum/[slug]", "/user/forum/rooms", "/user/forum/rooms/[slug]", "/user/forum/rooms/topic/quiz/[slug]", "/user/forum/rooms/quiz/[slug]", "/user/forum/rooms/topic/article/[slug]", "/user/forum/rooms/article/[slug]",  "/user/forum/rooms/topic/question/[slug]", "/user/forum/rooms/question/[slug]", "/user/forum/rooms/topic/question/ask-question/[slug]", "/user/forum/discusstion/question/ask-question", "/user/forum/rooms/topic/record/[slug]",  "/user/forum/rooms/record/[slug]", "/user/forum/rooms/topic/task/[slug]",  "/user/forum/rooms/task/[slug]", "/user/forum/discussion/question/[slug]", "/user/forum/discussion/question/ask-question", "/user/forum/rooms/topic/[slug]", "/user/forum/rooms/question/edit-question/[slug]"]) ? `${style.active}` : ""}>
                  <span>
                    <ReadFilled />
                  </span>
                  <span className={`${style.sidebarLink} ${display}`}>
                    Forums
                  </span>
                </a>
              </Link>
            </li>
            <li style={{marginTop: ".5rem"}}>
              <Link href={"/host/forum"}>
                <a className={active(["/host/forum", "/host/forum/create", "/host/forum/[slug]", "/host/forum/create-room/[slug]", "/host/forum/room/[slug]", "/host/forum/room/create-topic/[slug]", "/user/forum/register/[slug]", "/host/forum/user/[slug]"]) ? `${style.active}` : ""}>
                  <span>
                    <EyeFilled />
                  </span>
                  <span className={`${style.sidebarLink} ${display}`}>
                    Forum + + +
                  </span>
                </a>
              </Link>
            </li>
       

          </div>

          <div className={style.sidebarHeadContainer}>
            <h3 className={`${style.display} ${style.sidebarLink}`}>Practice</h3>

          <li>
            <Link href={"/host/quiz"}>
              <a
                className={
                  active([
                    "/host/quiz",
                    "/host/quiz/create",
                    "/host/quizzes",
                    "/host/quiz/settings/[slug]",
                    "/host/quiz/[slug]",
                    "/host/quiz/statistics",
                    "/host/quiz/statistics/[slug]",
                    "/host/quiz/question/[slug]",
                    "/host/quiz/question/create/[slug]",
                  ])
                    ? `${style.active}`
                    : ""
                }
              >
                <span>
                  <QuestionCircleFilled />
                </span>
                <span className={`${style.sidebarLink} ${display}`}>Quiz Host</span>
              </a>
            </Link>
          </li>

          <li>
            <Link href={"/user/records"}>
              <a className={active(["/user/records"]) ? `${style.active}` : ""}>
                <span>
                  <ReadFilled />
                </span>
                <span className={`${style.sidebarLink} ${display}`}>
                  Attempt Results
                </span>
              </a>
            </Link>
          </li>

          <li>
            <Link href={"/user/resources"}>
              <a className={active(["/user/resources"]) ? `${style.active}` : ""}>
                <span>
                  <ReadFilled />
                </span>
                <span className={`${style.sidebarLink} ${display}`}>
                  Resources
                </span>
              </a>
            </Link>
          </li>

        </div>
          <li>
            <Link href={"/user/post"}>
              <a className={active(["/user/post"]) ? `${style.active}` : ""}>
                <span>
                  <BookFilled />
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