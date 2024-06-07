import React from 'react'
import { Outlet } from 'react-router-dom'
import Navber from '../Navber'

const Rootlayout = () => {
  return (
    <>
        <Navber/>
        <Outlet/>
    </>
  )
}

export default Rootlayout