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
import axios from 'axios'
import { BASE_URL } from '../../../lib/constants'
import { Toaster, toast } from 'sonner'
import { clearUserInfo, login } from '../../../redux/slices/authSlice'
import { useDispatch } from 'react-redux'


function AdminLogin() {
  const [formData, setFormData] = useState({
    username: "", password: ""
  })
  const [clicked, setClicked] = useState(false)
  const router = useRouter()
  const dispatch = useDispatch()
  
  const adminLogin = (e) => {
    e.preventDefault()
    setClicked(true)

    axios
      .post(`${BASE_URL}/api/user/adminlogin`, formData)
      .then((response)=>{
        setClicked(false)
        toast.success(response.data?.message)
        dispatch(login(response.data?.user))
        router.push("/admin")
      })
      .catch((err)=>{
        toast.error(err.response?.data?.message)
        setClicked(false)
      })
  }
  return (
    <>
        <Head>
            <title>Samic Tech Hub - Login</title>
            <meta name="description" content="The Hub for great Developers" />
            <link rel="icon" href="/img/logoWBg.png" />
        </Head>

        <Toaster richColors />

      
      {/* Header Section */}

        <HeaderW navAction={"Register"} route={"#"} />

        <section className={style.regSection}>
            <div className={style.regIllustration}></div>
            <div className={style.regFormContainer}>
                <p onClick={()=>router.push("/")}> <CaretLeftOutlined /> Back</p>

                <h1>Welcome Back Admin</h1>
                <p>Sign in to continue your session . . .</p>
                <form>
                    <TextInputField value={formData.username} onchange={(e)=>setFormData({...formData, username: e.target.value})} inputLabel={"Email Address"} placeholder={"example@gmail.com"} type={"email"} />
                    <TextInputField value={formData.password} onchange={(e)=>setFormData({...formData, password: e.target.value})} inputLabel={"Password"} placeholder={"• • • • • • • • • •"} type={"password"} />
                    <SubmitBtn actionText={"Sign In"} clicked={clicked} action={adminLogin} />
                </form>
            </div>
        </section>


    </>
  )
}

export default AdminLogin
