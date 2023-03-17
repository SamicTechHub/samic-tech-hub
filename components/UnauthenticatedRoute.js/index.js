import {Col, Row} from "antd";
import Title from "antd/lib/typography/Title";
import Router from "next/router";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import jwt from "jsonwebtoken"

const unAuthenticatedRoute = (Component = null, options = {}) => {
  const UnAuthenticatedRoute = () => {
    const {auth} = useSelector((state) => state);
    const [loaded, setLoaded] = useState(false);

    const dispatch = useDispatch()

    const token = auth?.token
    useEffect( () => {
      // if(!token){
      //   dispatch(logOut())
      //   setLoaded(true);
      //   return 0
      // }

      const decodedJWT = jwt.verify(token, process.env.NEXT_PUBLIC_JWT_SECRET, (err, decoded)=>{
        if(err?.name === "TokenExpiredError"){
          // console.log(err)
          return false
        }else if(err){
          // console.log(err)
          return false
        }else{
          // console.log(decoded)
          return true
        }
      })


      if (auth.isLoggedIn && decodedJWT)  {
        Router.push(auth.loggedOutFrom || "/user");
      }
        setLoaded(true);
    }, []);
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
          <Component />
        )}
      </>
    );
  };
  return UnAuthenticatedRoute;
};

export default unAuthenticatedRoute;
