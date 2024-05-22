import React from 'react'
import logo from '../assets/images/logo.png'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className='px-[5%] pt-[2%] pb-[2%] flex justify-between'>
      <img src={logo} className='w-[10%]'></img>
      <div className='flex w-[60%] pt-2 justify-between font-semibold text-[2.5vh] max-md:text-[1.5vh] max-sm:text-[1vh]'>
      <NavLink to='/' style={({ isActive }) => ({
  color: isActive?'#663259':'#8E8FA5'
})}><div className=''>Home</div></NavLink>
        <div>|</div>
        <div className='text-[#8E8FA5]'>About Us</div>
        <div>|</div>
        <NavLink to='/subscriptions' style={({ isActive }) => ({
  color: isActive?'#663259':'#8E8FA5'
})}><div className=''>Subscription</div></NavLink>
        <div>|</div>
        <div className='text-[#75768E]'>Privacy Policy</div>
        <div>|</div>
        <div className='text-[#75768E]'>Terms & conditions</div>
      </div>
    </nav>
  )
}

export default Navbar;
