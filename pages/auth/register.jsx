
import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Toaster, toast } from "sonner";
import style from "../../styles/Home.module.css";
import HeaderW from "../../components/HeaderW";
import TextInputField from "../../components/TextInputField";
import SelectInput from "../../components/SelectInput";
import { CaretLeftOutlined } from "@ant-design/icons";
import SubmitBtn from "../../components/SubmitBtn";

function Register() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    emailAddress: "",
    password: "",
    preferredTrack: "",
  });

const optionsArray = [
  { value: "FULL_STACK_DEVELOPMENT", label: "Full Stack Development" },
  { value: "FRONTEND_DEVELOPMENT", label: "Frontend Development" },
  { value: "BACKEND_DEVELOPMENT", label: "Backend Development" },
  { value: "UI_UX_DESIGN", label: "UI/UX Design" },
  { value: "PRODUCT_MANAGEMENT", label: "Product Management" },
  { value: "DIGITAL_MARKETING", label: "Digital Marketing" }
];


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Registration successful!");
        router.push("/about"); // ✅ Redirect to home
      } else {
        toast.error(data.error || "Something went wrong.");
      }
    } catch (err) {
      toast.error("Error submitting form.");
    }
  };

  return (
    <>
      <Head>
        <title>Samic Tech Hub - Register</title>
        <meta name="description" content="The Hub for great Developers" />
        <link rel="icon" href="/img/logoWBg.png" />
      </Head>

      <Toaster richColors />
      <HeaderW navAction="Sign In" route="#" />

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
            <CaretLeftOutlined /> Back
          </p>

          <h1>Personal Information</h1>
          <p>Let&apos;s get to know you a little better.</p>

          <form onSubmit={handleSubmit}>
            <TextInputField
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
              inputLabel="First Name"
              placeholder="Your given name"
              type="text"
            />

            <TextInputField
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
              inputLabel="Last Name"
              placeholder="Your family name"
              type="text"
            />

            <TextInputField
              value={formData.phoneNumber}
              onChange={(e) =>
                setFormData({ ...formData, phoneNumber: e.target.value })
              }
              inputLabel="Phone Number"
              placeholder="+234 808 084 2145"
              type="number"
            />

            <TextInputField
              value={formData.emailAddress}
              onChange={(e) =>
                setFormData({ ...formData, emailAddress: e.target.value })
              }
              inputLabel="Email Address"
              placeholder="example@gmail.com"
              type="email"
            />

            <TextInputField
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              inputLabel="Password"
              placeholder="••••••••••"
              type="password"
            />

              <SelectInput
                label="Preferred Track"
                value={formData.preferredTrack}
                onChange={(e) =>
                  setFormData({ ...formData,
                    preferredTrack: optionsArray.filter(
                      (option) => option.value === e.target.value
                    )[0]?.value
                  })
                }
                options={optionsArray}
              />

            {/* <button type="submit" className={style.inputGroup}>
              Apply Now
            </button> */}
            <SubmitBtn actionText={"Apply Now"} />
          </form>
        </div>
      </section>
    </>
  );
}

export default Register;