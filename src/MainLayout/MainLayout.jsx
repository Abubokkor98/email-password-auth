import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Component/header'


export default function MainLayout () {
  return (
    <div className='max-w-screen-lg mx-auto'>
        <Header></Header>
        <Outlet></Outlet>
      
    </div>
  )
}
