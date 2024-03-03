import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Products from "../Components/Products";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SingleProductPage from "../Components/SigleProductPage";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route
        path="/restaurants"
        element={
          <PrivateRoute>
            <Products />
          </PrivateRoute>
        }
      ></Route>
      <Route path="/single/:id" element={<SingleProductPage/>}></Route>
    </Routes>
  );
};

export default AllRoutes;
