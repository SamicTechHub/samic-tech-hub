import {Col, Row} from "antd";
import Title from "antd/lib/typography/Title";
import Router, { useRouter } from "next/router";
import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import jwt from "jsonwebtoken"
import { addToken, clearToken, logInRedirect, logOut, logOutFalse } from "../redux/slices/authSlice";
import { generateToken } from "../lib/generateToken";
import { useEffectCleanUp } from "../lib/func";
import { BASE_URL } from "../lib/constants";

const PaymentAuthenticatedRoute = (Component = null, options = {}) => {
  const PaymentAuthenticatedRoute = () => {
    const {auth} = useSelector((state) => state);
    const {asPath} = useRouter()
    const router = useRouter()
    // console.log(auth)
    const [loaded, setLoaded] = useState(false);
    const dispatch = useDispatch()

   useEffect(() => {
  if (!auth.isRegistered) {
    Router.push(options.path || "/auth/register");
    return;
  }

  const token = auth?.token;
  if (!token) {
    Router.push("/auth/register");
    return;
  }

  // Verify with backend
  const verifyToken = async () => {
    try {
      const res = await fetch(`${BASE_URL}/api/auth/verify`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });
      const data = await res.json();

      if (data.valid) {
        setLoaded(true);
      } else {
        dispatch(clearToken());
        dispatch(logOutFalse());
        dispatch(logInRedirect(asPath));
        Router.push("/auth/register");
      }
    } catch (err) {
      dispatch(clearToken());
      dispatch(logOutFalse());
      Router.push("/auth/register");
    }
  };

  verifyToken();
}, []);


    // console.log(auth)
    return (
      <>
        {!loaded ? (
          <Row justify="center" align="middle" style={{height: "100vh"}}>
            <Col xs={24}>
              <Title type={2} style={{textAlign: "center"}}>
                Loading...
              </Title>
            </Col>
          </Row>
        ) : (
          <Component auth={auth} />
        )}
      </>
    );
  };
  return PaymentAuthenticatedRoute;
};

export default PaymentAuthenticatedRoute;