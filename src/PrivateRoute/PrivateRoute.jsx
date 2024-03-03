import React, { useState } from "react";
import { Navigate } from "react-router-dom";
const PrivateRoute = ({ children }) => {
  const [token, setToken] = useState(true);
  if (!token) {
    return <Navigate to={"/login"} />;
  }
  return children;
};

export default PrivateRoute;
