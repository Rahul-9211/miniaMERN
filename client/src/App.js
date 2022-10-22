import { Route, Routes } from "react-router-dom";
// import Dashboard from "./pages/Dashboard/Dashboard";
// import Login from "./pages/Auth/Login";
import "./assets/css/dashboard.css"
import "./assets/css/Header.css"
import "./assets/css/login.css"
// import "./assets/css/style.scss"
import "./index.css";
import { useEffect, useState } from "react";
import { authRoutes, userRoutes } from "./allRoutes/route";
import React from "react"
// import Authmiddleware from "./AuthMiddleWare";
import Layout from './pages/Layout/Layout';
const App = () => {


  // state to set authRoutes
  const [authStatus, setAuthStatus] = useState(false)

  // use Effect takes and callBack and depencies 
  useEffect(() => {
    return (() => {
      checkCache()
    })
  }, [])

  // function to check cache of an user previously login
  async function checkCache() {
    const token = localStorage.getItem("token");
    // console.log("server uRl", process.env.REACT_APP_DEFAULTPATH)
    // console.log("Token", token)
    const response = await fetch(`${process.env.REACT_APP_DEFAULTPATH}checkcache`, {
      method: "POST",
      headers: {
        "content-Type": "application/json"
      },
      body: JSON.stringify({
        token
      })
    })
    const data = await response.json();
    // console.log("data", data)
    if (data.status) {
      setAuthStatus(true)
      // console.log("true")
    }
    else {
      console.log("inside else")
    }
  }
  return (
    <React.Fragment>

      <Routes>
        {authStatus ? userRoutes.map((route, index) => (
          <Route
            path={route.path}
            key={index}
            element={
              <Layout
                child={route.component}>
              </Layout>}
          />
        )) : authRoutes.map((route, index) => (
          <Route
            path={route.path}
            key={index}
            element={route.component}
          />
        ))}
      </Routes>


      {/* // working but url having warning changing  */}
      {/* {authStatus ? userRoutes.map((route, index) => {
        // console.log("true")
        return (
          <Authmiddleware
            path={route.path}
            layout={Layout}
            component={route.component}
            key={index}
            isAuthProtected={authStatus}
            exact />)

      }) : authRoutes.map((route, index) => {
        // console.log("false")
        return (
          <Authmiddleware
            path={route.path}
            layout={NonAuthLayout}
            component={route.component}
            key={index}
            isAuthProtected={authStatus}
            exact />)
      })} */}
    </React.Fragment>

  );
};

export default App;
