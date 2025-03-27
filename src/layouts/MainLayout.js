import React from 'react'
import { Outlet } from 'react-router-dom'
import MobileNav from '../components/navigation/MobileNav/MobileNav'
import Navigation from "../components/navigation/Navigation/Navigation"
import useMediaQuery from '../hooks/useMediaQuery'

const MainLayout = () => {

  const breakPoint = useMediaQuery("(max-width: 768px)");
  return (
    <>
     {breakPoint ? <MobileNav /> : <Navigation />}
    <Outlet />
     </>
         
  
  )
}

export default MainLayout
