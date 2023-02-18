import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import Link from 'next/link'
import style from "../../styles/Home.module.css"
import Image from 'next/image'
import HeaderW from '../../components/HeaderW'
import TextInputField from "../../components/TextInputField"
import { Spin } from 'antd'
import {
    CaretLeftOutlined, CaretLeftFilled, LoadingOutlined
} from "@ant-design/icons"
import SelectInput from '../../components/SelectInput'
import SubmitBtn from '../../components/SubmitBtn'
import { useRouter } from 'next/router'
import axios from 'axios'
import { BASE_URL } from '../../lib/constants'

function Register() {
  const [formData, setFormData] = useState({})
  const [clicked, setClicked] = useState(false)
  const router = useRouter()


  const antIcon = (
    <LoadingOutlined style={{ fontSize: "24px", color: "white" }} spin />
  );


  const optionsArray = [
    "PHP", "JavaScript", "NodeJS", "ReactJS"
  ]

  const registerUser = (e) => {
    e.preventDefault()
    setClicked(true)

    console.log(formData)
    axios
      .post(`${BASE_URL}/api/user/signup`, formData)
      .then((response)=>{
        console.log(response.data)
        setClicked(false)
      })
      .catch((err)=>{
        console.log(err.response.data.message)
        setClicked(false)
      })
  }

  return (
    <>
        <Head>
            <title>Samic Tech Hub - Register</title>
            <meta name="description" content="The Hub for great Developers" />
            <link rel="icon" href="/img/logoWBg.png" />
        </Head>

      
      {/* Header Section */}

        <HeaderW navAction={"Sign In"} route={"/auth/login"}/>

        <section className={style.regSection}>
            <div className={style.regIllustration}></div>
            <div className={style.regFormContainer}>
                <p onClick={()=>router.push("/")}> <CaretLeftOutlined /> Back</p>

                <h1>Personal Information</h1>
                <p>Let&apos;s get to Know you a little better</p>
                <form>
                    <TextInputField onchange={(e)=>setFormData({...formData, firstName: e.target.value})} inputLabel={"First Name"} placeholder={"Your given name"} type={"text"} />
                    <TextInputField onchange={(e)=>setFormData({...formData, lastName: e.target.value})} inputLabel={"Last Name"} placeholder={"Your Family name"} type={"text"}/>
                    <TextInputField onchange={(e)=>setFormData({...formData, phone_number: e.target.value})} inputLabel={"Phone Number"} placeholder={"+234 808 084 2145"} type={"text"} />
                    <TextInputField onchange={(e)=>setFormData({...formData, email: e.target.value})} inputLabel={"Email Address"} placeholder={"example@gmail.com"} type={"email"} />
                    <TextInputField onchange={(e)=>setFormData({...formData, password: e.target.value})} inputLabel={"Password"} placeholder={"• • • • • • • • • •"} type={"password"} />
                    <SelectInput onchange={(e)=>setFormData({...formData, stack: e.target.value})} options={optionsArray}/>
                    <SubmitBtn clicked={clicked} action={registerUser} actionText={"Apply NOW"} />
                </form>
            </div>
        </section>


    </>
  )
}

export default Register
