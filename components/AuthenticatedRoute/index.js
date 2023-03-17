import {Col, Row} from "antd";
import Title from "antd/lib/typography/Title";
import Router, { useRouter } from "next/router";
import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import jwt from "jsonwebtoken"
import { addToken, clearToken, logInRedirect, logOut, logOutFalse } from "../../redux/slices/authSlice";
import { generateToken } from "../../lib/generateToken";
import { useEffectCleanUp } from "../../lib/func";

const authenticatedRoute = (Component = null, options = {}) => {
  const AuthenticatedRoute = () => {
    const {auth} = useSelector((state) => state);
    const {asPath} = useRouter()
    const router = useRouter()
    // console.log(auth)
    const [loaded, setLoaded] = useState(false);
    const dispatch = useDispatch()

    useEffect(() => {
      if (!auth.isLoggedIn) {
        Router.push(options.path || "/admin/auth/login");
        return useEffectCleanUp
      }
      const token = auth?.token
      if(!token){
        Router.push("/admin/auth/login")
        return useEffectCleanUp
      }
      // console.log(token)
      jwt.verify(token, process.env.NEXT_PUBLIC_JWT_SECRET, (err, decoded)=>{
        if(err?.name === "TokenExpiredError"){
          dispatch(clearToken())
          dispatch(logOutFalse())
          dispatch(logInRedirect(asPath))
          Router.push("/admin/auth/login")
          return useEffectCleanUp
        }else{
          // decoded is the object containing what was used to make the token, in this case the userID and can be accessed by decoded.id
          // console.log(decoded)
          if(auth.isLoggedIn){
            const generatedToken = generateToken(decoded?.id)
            dispatch(addToken(generatedToken))
          }
        }
      })
      setLoaded(true);
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
  return AuthenticatedRoute;
};

export default authenticatedRoute;