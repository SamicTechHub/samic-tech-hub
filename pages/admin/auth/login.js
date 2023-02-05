import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import Link from 'next/link'
import style from "../../../styles/Home.module.css"
import Image from 'next/image'
import HeaderW from '../../../components/HeaderW'
import TextInputField from "../../../components/TextInputField"
import {
    CaretLeftOutlined, CaretLeftFilled
} from "@ant-design/icons"
import SelectInput from '../../../components/SelectInput'
import SubmitBtn from '../../../components/SubmitBtn'
import { useRouter } from 'next/router'

function AdminLogin() {
  const router = useRouter()
  return (
    <>
        <Head>
            <title>Samic Tech Hub - Login</title>
            <meta name="description" content="The Hub for great Developers" />
            <link rel="icon" href="/img/logoWBg.png" />
        </Head>

      
      {/* Header Section */}

        <HeaderW navAction={"Register"} route={"/auth/register"} />

        <section className={style.regSection}>
            <div className={style.regIllustration}></div>
            <div className={style.regFormContainer}>
                <p onClick={()=>router.push("/")}> <CaretLeftOutlined /> Back</p>

                <h1>Welcome Back Admin</h1>
                <p>Sign in to continue your session . . .</p>
                <form>
                    <TextInputField inputLabel={"Email Address"} placeholder={"example@gmail.com"} type={"email"} />
                    <TextInputField inputLabel={"Password"} placeholder={"• • • • • • • • • •"} type={"password"} />
                    <SubmitBtn actionText={"Sign In"} />
                </form>
            </div>
        </section>


    </>
  )
}

export default AdminLogin
