import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import style from "../../styles/Home.module.css";
import Image from "next/image";
import HeaderW from "../../components/HeaderW";
import TextInputField from "../../components/TextInputField";
import { Spin } from "antd";
import {
  CaretLeftOutlined,
  CaretLeftFilled,
  LoadingOutlined,
} from "@ant-design/icons";
import SelectInput from "../../components/SelectInput";
import SubmitBtn from "../../components/SubmitBtn";
import { useRouter } from "next/router";
import axios from "axios";
import { BASE_URL } from "../../lib/constants";

import { Toaster, toast } from "sonner";

function Register() {
  const [formData, setFormData] = useState({});
  const [clicked, setClicked] = useState(false);
  const router = useRouter();

  const antIcon = (
    <LoadingOutlined style={{ fontSize: "24px", color: "white" }} spin />
  );

  const optionsArray = [
    "Full-Stack Development",
    "Front-End Development",
    "Back-End Development",
    "Mobile App Development",
    "UI/UX Development",
    "Digital Marketing",
  ];
  const subStack = {
    "Full-Stack Development": ["MERN Stack"],
    "Front-End Development": ["HTML, CSS & JavaScript", "ReactJS (NextJS)"],
    "Back-End Development": [
      "Python(Django)",
      "JavaScript (NODEJS)",
      "PHP(Laravel)",
    ],
    "Mobile App Development": ["ReactNative", "Flutter", "Kotlin"],
    "UI/UX Development": ["Figma", "AdobeXD", "Sketch"],
    "Digital Marketing": [
      "Social Media Marketing",
      "Email Marketing",
      "SEO & SEM",
      "Web Analytics",
      "Web design using Wordpress",
    ],
  };

  const registerUser = (e) => {
    e.preventDefault();
    setClicked(true);

    axios
      .post(`${BASE_URL}/api/user/signup`, formData)
      .then((response) => {
        setClicked(false);
        toast.success(response.data?.message);
        setTimeout(() => {
          router.push("/");
        }, 3000);
      })
      .catch((err) => {
        toast.error(err.response?.data?.message);
        setClicked(false);
      });
  };

  return (
    <>
      <Head>
        <title>Samic Tech Hub - Register</title>
        <meta name="description" content="The Hub for great Developers" />
        <link rel="icon" href="/img/logoWBg.png" />
      </Head>

      {/* Header Section */}
      <Toaster richColors />

      <HeaderW navAction={"Sign In"} route={"#"} />

      <section className={style.regSection}>
        <div className={style.regIllustration}>
          <h3>Welcome to Samic Tech Hub Registration</h3>
          <p>
            Our registration process is designed to ensure you get the most out
            of our program:
          </p>
          <ol>
            <li>Complete the application form on this page</li>
            <li>Our team will review your application and contact you</li>
            <li>
              Visit our venue for an in-person workshop and detailed briefing
            </li>
          </ol>
          <p>Our program offers numerous benefits and opportunities:</p>
          <ul>
            <li>24/7 high-speed internet access</li>
            <li>Constant and reliable electricity supply</li>
            <li>Quiet, conducive environment for learning and working</li>
            <li>Hands-on workshops and training sessions</li>
            <li>Networking opportunities with industry professionals</li>
            <li>Access to cutting-edge tools and resources</li>
          </ul>
          <p>
            Join us to accelerate your tech career and be part of a thriving
            community of innovators!
          </p>
        </div>
        <div className={style.regFormContainer}>
          <p onClick={() => router.push("/")}>
            {" "}
            <CaretLeftOutlined /> Back
          </p>

          <h1>Personal Information</h1>
          <p>Let&apos;s get to Know you a little better.</p>
          <form>
            <TextInputField
              value={formData?.firstName}
              onchange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
              inputLabel={"First Name"}
              placeholder={"Your given name"}
              type={"text"}
            />
            <TextInputField
              value={formData?.lastName}
              onchange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
              inputLabel={"Last Name"}
              placeholder={"Your Family name"}
              type={"text"}
            />
            <TextInputField
              value={formData?.phone_number}
              onchange={(e) =>
                setFormData({ ...formData, phone_number: e.target.value })
              }
              inputLabel={"Phone Number"}
              placeholder={"+234 808 084 2145"}
              type={"text"}
            />
            <TextInputField
              value={formData?.email}
              onchange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              inputLabel={"Email Address"}
              placeholder={"example@gmail.com"}
              type={"email"}
            />
            <TextInputField
              value={formData?.password}
              onchange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              inputLabel={"Password"}
              placeholder={"• • • • • • • • • •"}
              type={"password"}
            />
            <SelectInput
              label={"Preferred Stack"}
              value={formData?.stack}
              onchange={(e) =>
                setFormData({ ...formData, stack: e.target.value })
              }
              options={optionsArray}
            />
            {formData.stack && (
              <SelectInput
                label={"Choose one Sub-stack"}
                value={formData.subStack}
                onchange={(e) =>
                  setFormData({ ...formData, subStack: e.target.value })
                }
                options={subStack[formData?.stack]}
              />
            )}
            <SubmitBtn
              clicked={clicked}
              action={registerUser}
              actionText={"Apply NOW"}
            />
          </form>
        </div>
      </section>
    </>
  );
}

export default Register;
