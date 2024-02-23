import React from 'react'
import { Outlet } from 'react-router-dom'
// import Header from './Header'
import Navbar from './Components/Nav'

export default function Root() {
  return (
    <div style={{display: 'flex', height: '100vh', flexDirection: 'column'}}>
      {/* <Header /> */}
      <Navbar/>
      <Outlet />
    </div>
  )
}

