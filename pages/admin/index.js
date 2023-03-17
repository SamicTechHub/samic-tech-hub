import React, { useEffect, useState } from 'react'
import DashboardWrapper from '../../components/DashboardWrapper'
import SideBar from '../../components/Sidebar'
import style from "../../styles/dashboard.module.css"
import Head from 'next/head'
import authenticatedRoute from '../../components/AuthenticatedRoute'
import { useSelector } from 'react-redux'
import Table from '../../components/Table'
import axios from "axios"
import { BASE_URL } from '../../lib/constants'

function Dashboard() {
  const [users, setUsers] = useState([])
  const { auth } = useSelector((state) => state);
  const userObj = auth?.user;


  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/user`)
      .then((response)=>{
        console.log(response.data)
        setUsers(response.data?.user)
      })
      .catch((e)=>{
        console.log(e)
      })
  

  }, [])

  const deleteRegisteredUser = () => {
    // Logic to delete user
  }

  const editUser = () => {
    // Logic to Edit User
  }

  const viewUser = () => {
    // Logic to view a User
  }
  
  
    // The Material Table Detais
  const tableTitle = [
    { title: '#', field: 'tableData.id',width:"2", render:rowData => rowData.tableData.id+1},
    {title: "First Name", field: "firstName"},
    {title: "Last Name", field: "lastName"},
    {title: "Email", field: "email"},
    {title: "Phone Number", field: "phone_number"},
    {title: "Plan", field: "plan", render:rowData => (rowData.plan)?.toUpperCase()},
    {title: "Stack", field: "stack"},
    {title: "Sub-stack", field: "subStack"},
    { title: "Joined on", field: "createdAt", type: "datetime"},
  ]
  return (
    <>
      <Head>
        <title>Admin - Samic Tech Hub</title>
        <meta name="description" content="The Hub for great Developers" />
        <link rel="icon" href="/img/logoWBg.png" />
      </Head>
      <DashboardWrapper userObj={userObj} >
        <h2>Welcome here {userObj?.username}</h2>
        <div className={style.cards}>
          <div className={style.card}>
            <h2>Total Users</h2>
            <p>40</p>
          </div>
        </div>
        <div className={style.container}>
          <h2>Users Table</h2>
          <Table title={"Registered Users"} tableTitle={tableTitle} tableData={users} deletePost={deleteRegisteredUser} view={viewUser} showModal={editUser} />

        </div>

      </DashboardWrapper>
    </>
  )
}

export default authenticatedRoute(Dashboard)
