import React from 'react'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'
import { useSelector } from 'react-redux'
import { Navigate, Outlet, useLocation } from 'react-router'




// const AuthLayout = () => {
//     let currUser = useSelector((state)=>state.auth.currUser)
//   return (
// <div>
//     {
//         (!currUser) ? <Signup /> : <Outlet />
//     }

// </div>
//   )
// }

const AuthLayout = () => {
  const currUser = useSelector((state) => state.auth.currUser);
  const location = useLocation();
  

  // If the user is logged in and tries to go to /login or /signup, redirect to home
  if (currUser && (location.pathname === "/login" || location.pathname === "/signup")) {
    return <Navigate to="/" replace />;
  }

  // If user is logged in, show the nested protected routes
  if (currUser) {
    return <Outlet />;
  }

  // If user is NOT logged in, redirect to login (not signup)
  if (!currUser && location.pathname !== "/signup") {
    return <Navigate to="/login" replace />;
  }

  // If not logged in but on signup route, let it load
  return <Outlet />;
};

export default AuthLayout

