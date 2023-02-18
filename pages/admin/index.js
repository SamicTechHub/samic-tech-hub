import React from 'react'
import DashboardWrapper from '../../components/DashboardWrapper'
import SideBar from '../../components/Sidebar'
import style from "../../styles/dashboard.module.css"
import Head from 'next/head'

function Dashboard() {
  return (
    <>
      <Head>
        <title>Admin - Samic Tech Hub</title>
        <meta name="description" content="The Hub for great Developers" />
        <link rel="icon" href="/img/logoWBg.png" />
      </Head>
      <DashboardWrapper >
        <h2>I&apos;m here</h2>
      </DashboardWrapper>
    </>
  )
}

export default Dashboard
