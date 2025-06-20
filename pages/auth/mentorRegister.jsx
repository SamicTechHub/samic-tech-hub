
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
    currentJobTitle:"",
    companyName: "",
    experience: "",
    expertise: "",
    linkedin: "",
    yourWhy: "",
    commitment: ""


  });



const optionsExprienceArray =[
 { value: "ONE_TO_THREE_YEARS", label: "1 - 3 Years" },
 { value: "FOUR_TO_SIX_YEARS", label: "4 - 6 Years" },
 { value: "SEVEN_TO_TEN_YEARS", label: "7 - 10 Years" },
 { value: "TEN_YEARS_AND_ABOVE", label: "10 Years and above" },
]

const optionsExpertiseArray = [
  { value: "FULL_STACK_DEVELOPMENT", label: "Full Stack Development" },
  { value: "FRONTEND_DEVELOPMENT", label: "Frontend Development" },
  { value: "BACKEND_DEVELOPMENT", label: "Backend Development" },
  { value: "UI_UX_DESIGN", label: "UI/UX Design" },
  { value: "PRODUCT_MANAGEMENT", label: "Product Management" },
  { value: "DIGITAL_MARKETING", label: "Digital Marketing" },

];

const optionsCommitmentArray = [
 { value: "ONE_HOUR", label: "1 Hour" },
 { value: "TWO_HOURS", label: "2 Hours" },
 { value: "THREE_HOURS", label: "3 Hours" },
]

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      
      const res = await fetch("/api/mentorRegister", {
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
      {/* <HeaderW navAction="Sign In" route="#" /> */}

      <section className={style.regSection}>
        <div className={style.regIllustration}>
          <h3>Register as a Mentor</h3>
          <p>
           Share your knowledge, guide future talents, and make a lasting impact."
          </p>
          <p>We welcome professionals from all fields to inspire and support young learners</p>
          <ol>
            <li>Fill in your details below to join our community of expert mentors.</li>
              <li>Support and guide emerging talent</li>
                 <li>Share your career experience</li>
                     <li>Make real-world impact</li>

            
          </ol>
          
          <p>
           Help shape the future — become a mentor to guide, inspire, and support rising professionals. Complete the form below to get started.
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
              type="tel"
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
             <TextInputField
              value={formData.currentJobTitle}
              onChange={(e) =>
                setFormData({ ...formData, currentJobTitle: e.target.value })
              }
              inputLabel="Current Job Title"
              placeholder="Product Manager"
              type="text"
            />

              <TextInputField
              value={formData.companyName}
              onChange={(e) =>
                setFormData({ ...formData, companyName: e.target.value })
              }
              inputLabel="Company Name"
              placeholder="Samic Tech Hub"
              type="text"
            />

              <SelectInput
                label="Years of Industry Experience"
                value={formData.experience}
                onChange={(e) =>
                  setFormData({ ...formData,
                    experience: optionsExprienceArray.filter(
                      (option) => option.value === e.target.value
                    )[0]?.value
                  })
                }
                options={optionsExprienceArray}
              />

                <SelectInput
                label="Primary Expertise Area"
                value={formData.expertise}
                onChange={(e) =>
                  setFormData({ ...formData,
                    expertise: optionsExpertiseArray.filter(
                      (option) => option.value === e.target.value
                    )[0]?.value
                  })
                }
                options={optionsExpertiseArray}
              />
              <TextInputField
              value={formData.linkedin}
              onChange={(e) =>
                setFormData({ ...formData, linkedin: e.target.value })
              }
              inputLabel="LinkedIn Profile URL"
              placeholder=""
              type="text"
            />

             <TextInputField
              value={formData.yourWhy}
              onChange={(e) =>
                setFormData({ ...formData, yourWhy: e.target.value })
              }
              inputLabel="Why do you want to be a mentor?"
              placeholder=""
              type="text"
            />

             <SelectInput
                label="Estimated Weekly/Monthly Time Commitment"
                value={formData.commitment}
                onChange={(e) =>
                  setFormData({ ...formData,
                    commitment: optionsCommitmentArray.filter(
                      (option) => option.value === e.target.value
                    )[0]?.value
                  })
                }
                options={optionsCommitmentArray}
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