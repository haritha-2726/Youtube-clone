import React from 'react'
import { Outlet } from 'react-router-dom'
// import Maincomponent from './Maincomponent'
import SideBar from './SideBar'

const Body = () => {
  return (
    <div className='flex'>
       <SideBar/>
        <Outlet/>
    </div>
  )
}

export default Body
