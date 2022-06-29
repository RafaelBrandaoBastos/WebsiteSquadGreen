import React from "react";
import { Routes, Route } from "react-router-dom";
import ErrorPage404 from "../pages/Errors/ErrorPage404/ErrorPage404";
import Login from "../pages/Login/Login";
import Sucess from "../pages/Sucess/Sucess";


export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/sucess" element={<Sucess />} />
      <Route path="*" element={<ErrorPage404 />} />
    </Routes>
  );
}