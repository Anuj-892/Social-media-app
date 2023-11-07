import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import LeftBar from './components/LeftBar/LeftBar'
import RightBar from './components/RightBar/RightBar'

const Layout = () => {
  return (
    <div>
      <Navbar/>
      <main>
        <div style={{display:'flex'}}>
          <LeftBar/>
           <div style={{flex:6}}>
             <Outlet/>
           </div>
          <RightBar/>
        </div>
      </main>
    </div>
  )
}

export default Layout