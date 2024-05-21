import React from 'react'
import logo from '../assets/images/logo.png'

const Navbar = () => {
  return (
    <nav className='px-[5%] pt-[2%] pb-[2%] flex justify-between' style={{fontFamily:"Poppins",fontWeight:"600"}}>
      <img src={logo} className='w-[10%]'></img>
      <div className='flex w-[60%] pt-2 justify-between'>
        <div className='text-[#663259]'>Home</div>
        <div>|</div>
        <div className='text-[#8E8FA5]'>About Us</div>
        <div>|</div>
        <div className='text-[#8E8FA5]'>Subscription</div>
        <div>|</div>
        <div className='text-[#75768E]'>Privacy Policy</div>
        <div>|</div>
        <div className='text-[#75768E]'>Terms & conditions</div>
      </div>
    </nav>
  )
}

export default Navbar;
