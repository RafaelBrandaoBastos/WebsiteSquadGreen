import React from "react";
import { Routes, Route } from "react-router-dom";
import ErrorPage404 from "../pages/Errors/ErrorPage404/ErrorPage404";
import ErrorPage401 from "../pages/Errors/ErrorPage401/ErrorPage401";
import Login from "../pages/Login/Login";
import Sucess from "../pages/Sucess/Sucess";


export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/sucess" element={ 
           <ErrorPage401 isAllowed={localStorage.getItem("userData.user") != null && localStorage.getItem("userData.password") !=null}/>}/>
      <Route path="*" element={<ErrorPage404 />} />
    </Routes>
  );
}
