import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Loging from "../Pages/Login/Login";

const PrivateRouter = ({ check }) => {
  console.log(check);

  return <div>{check ? <Outlet /> : <Navigate to="login" />}</div>;
};

export default PrivateRouter;
