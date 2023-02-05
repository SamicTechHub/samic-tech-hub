import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import Link from 'next/link'
import style from "../../styles/Home.module.css"
import Image from 'next/image'
import HeaderW from '../../components/HeaderW'
import TextInputField from "../../components/TextInputField"
import {
    CaretLeftOutlined, CaretLeftFilled
} from "@ant-design/icons"
import SelectInput from '../../components/SelectInput'
import SubmitBtn from '../../components/SubmitBtn'
import { useRouter } from 'next/router'

function Register() {
  const router = useRouter()
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
                    <TextInputField inputLabel={"First Name"} placeholder={"Your given name"} type={"text"} />
                    <TextInputField inputLabel={"Last Name"} placeholder={"Your Family name"} type={"text"}/>
                    <TextInputField inputLabel={"Email Address"} placeholder={"example@gmail.com"} type={"email"} />
                    <TextInputField inputLabel={"Phone Number"} placeholder={"+234 808 084 2145"} type={"email"} />
                    <SelectInput />
                    <SubmitBtn actionText={"Apply NOW"} />
                </form>
            </div>
        </section>


    </>
  )
}

export default Register
