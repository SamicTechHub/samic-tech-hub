import React, { useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import style from "../../styles/Home.module.css"
import { CaretLeftOutlined } from "@ant-design/icons"
import HeaderW from '../../components/HeaderW'
import TextInputField from "../../components/TextInputField"
import SubmitBtn from '../../components/SubmitBtn'

function Login() {
  const router = useRouter()
  const [emailAddress, setEmailAddress] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('') // Clear previous errors

    const res = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ emailAddress, password }),
    })

    const data = await res.json()

    if (res.ok) {
      router.push('/')
    } else {
      setError(data.error || 'Login failed')
    }
  }

  return (
    <>
      <Head>
        <title>Samic Tech Hub - Login</title>
        <meta name="description" content="The Hub for great Developers" />
        <link rel="icon" href="/img/logoWBg.png" />
      </Head>

      <HeaderW navAction={"Sign In"} route={"/auth/login"} />

      <section className={style.regSection}>
        <div className={style.regIllustration}></div>
        <div className={style.regFormContainer}>
          <p onClick={() => router.push("/")}>
            <CaretLeftOutlined /> Back
          </p>

          <h1>Welcome Back</h1>
          <p>Sign in to continue your session . . .</p>

          <form onSubmit={handleSubmit}>
            <TextInputField
              inputLabel={"Email Address"}
              placeholder={"example@gmail.com"}
              type={"email"}
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
            />
            <TextInputField
              inputLabel={"Password"}
              placeholder={"• • • • • • • • • •"}
              type={"password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {error && <p style={{ color: 'red' }}>{error}</p>}
            <SubmitBtn actionText={"Sign In"} />
          </form>
        </div>
      </section>
    </>
  )
}

export default Login




// import React, {useState, useEffect} from 'react'
// import Head from 'next/head'
// import Link from 'next/link'
// import style from "../../styles/Home.module.css"
// import Image from 'next/image'
// import HeaderW from '../../components/HeaderW'
// import TextInputField from "../../components/TextInputField"
// import {
//     CaretLeftOutlined, CaretLeftFilled
// } from "@ant-design/icons"
// import SelectInput from '../../components/SelectInput'
// import SubmitBtn from '../../components/SubmitBtn'
// import { useRouter } from 'next/router'

// function Login() {
//   const router = useRouter()
//   return (
//     <>
//         <Head>
//             <title>Samic Tech Hub - Login</title>
//             <meta name="description" content="The Hub for great Developers" />
//             <link rel="icon" href="/img/logoWBg.png" />
//         </Head>

      
//       {/* Header Section */}

//         <HeaderW navAction={"Register"} route={"/auth/register"} />

//         <section className={style.regSection}>
//             <div className={style.regIllustration}></div>
//             <div className={style.regFormContainer}>
//                 <p onClick={()=>router.push("/")}> <CaretLeftOutlined /> Back</p>

//                 <h1>Welcome Back</h1>
//                 <p>Sign in to continue your session . . .</p>
//                 <form>
//                     <TextInputField inputLabel={"Email Address"} placeholder={"example@gmail.com"} type={"email"} />
//                     <TextInputField inputLabel={"Password"} placeholder={"• • • • • • • • • •"} type={"password"} />
//                     <SubmitBtn actionText={"Sign In"} />
//                 </form>
//             </div>
//         </section>


//     </>
//   )
// }

// export default Login
