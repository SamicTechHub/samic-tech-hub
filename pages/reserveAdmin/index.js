import React, { useEffect, useState } from 'react';
import DashboardWrapper from '../../components/DashboardWrapper';
import style from "../../styles/dashboard.module.css";
import Head from 'next/head';
import authenticatedRoute from '../../components/AuthenticatedRoute';
import { useSelector } from 'react-redux';
import Table from '../../components/Table';
import axios from "axios";
import { BASE_URL } from '../../lib/constants';

function Dashboard() {
  const [users, setUsers] = useState([]);
  const { auth } = useSelector((state) => state);
  const userObj = auth?.user;

  useEffect(() => {
    axios
      .get(`${BASE_URL}/spaces/reserve`)
      .then((response) => {
        setUsers(response.data?.user || []); // fallback to empty array
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const deleteRegisteredUser = () => {};
  const editUser = () => {};
  const viewUser = () => {};

  const tableTitle = [
    { title: '#', field: 'tableData.id', width: "2", render: rowData => rowData.tableData.id + 1 },
    { title: "Name", field: "name" },
    { title: "Email", field: "email" },
    { title: "Amount", field: "amount" },
    { title: "Plan Name", field: "planName", render: rowData => (rowData.planName)?.toUpperCase() },
    { title: "Date", field: "date" },
    { title: "Time", field: "time" },
    { title: "Joined on", field: "createdAt", type: "datetime" },
  ];

  return (
    <>
      <Head>
        <title>Admin - Samic Tech Hub</title>
        <meta name="description" content="The Hub for great Developers" />
        <link rel="icon" href="/img/logoWBg.png" />
      </Head>

      <DashboardWrapper userObj={userObj}>
        <h2>Welcome here {userObj?.username}</h2>

        <div className={style.cards}>
          <div className={style.card}>
            <h2>Total Users</h2>
            <p>{users.length}</p>
          </div>
        </div>

        <div className={style.container}>
          <h2>Users Table</h2>
          <Table
            title={"Registered Users"}
            tableTitle={tableTitle}
            tableData={users}
            deletePost={deleteRegisteredUser}
            view={viewUser}
            showModal={editUser}
          />
        </div>
      </DashboardWrapper>
    </>
  );
}

export default Dashboard;
