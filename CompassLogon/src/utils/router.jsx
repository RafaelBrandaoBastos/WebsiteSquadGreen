import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login/Login";
import Sucess from "../pages/Sucess/Sucess";


export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/sucess" element={<Sucess />} />
    </Routes>
  );
}