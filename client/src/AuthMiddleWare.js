import React from "react"
import { Navigate, Route, Routes } from "react-router-dom";
import PropTypes from "prop-types"
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Auth/Login";
// import Apaexlinecolumn from "./pages/charts/Echart";
// import { Route, Redirect } from "react-router-dom"

const Authmiddleware = ({
    // here component is treted as "name : component"
    component: Component,
    layout: Layout,
    isAuthProtected,
    path,
    ...rest
}) => {
    console.log("route component", Component)
    if (isAuthProtected) {
        return (
            <Routes>
                <Route path={path} element={<Layout child={
                    Component}>
                </Layout>} />
    </Routes>

        )
    }
    else {
        return (
            <Routes>
                <Route path={path} element={<Login />} />
    </Routes>

        )
    }
}

// const Authmiddleware = ({
//     component: Component,
//     layout: Layout,
//     isAuthProtected,
//     path , 
//     ...rest
//   }) => (
//   <Route path={path} element={<Login/>}/>
//   )

export default Authmiddleware;
