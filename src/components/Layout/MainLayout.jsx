import React from 'react'
import Footer from '../Pages/Footer'
import Header from '../Pages/Header'
import { Outlet } from 'react-router'
import { ToastContainer } from 'react-toastify'

const MainLayout = () => {
  return (

<div>
  <Header />
      
      <Outlet />

      <Footer />

  <ToastContainer position="top-right" autoClose={2000} />
</div>

  













  )
}

export default MainLayout