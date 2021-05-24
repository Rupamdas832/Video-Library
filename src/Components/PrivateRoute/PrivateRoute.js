import React from "react";

import { Route, Navigate } from "react-router-dom";

export const PrivateRoute = ({ path, ...props }) => {
  const LoginStatus = JSON.parse(localStorage.getItem("VideoLoginUser"));

  return LoginStatus?.isUserLogin ? (
    <Route {...props} />
  ) : (
    <Navigate replace state={{ from: path }} to="/login" />
  );
};
