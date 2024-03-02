import React from 'react'

import { Outlet, Navigate } from "react-router-dom";

export const PrivateRoute = () => {
  const token = localStorage.getItem('userInfo')
  console.log(token)
  return token? <Outlet /> : <Navigate to="/signin" />;
};


// const PrivateRoute = () => {
//   return (
//     <div>PrivateRoute</div>
//   )
// }

export default PrivateRoute