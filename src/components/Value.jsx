import React from 'react'
import valuebg from "../assets/images/valuebg.png"
import value1 from "../assets/images/v1.png"
import value2 from "../assets/images/v2.png"
import value3 from "../assets/images/v3.png"

const Value = () => {
  return (
    <div className='text-[#352B53]' >
        <h1 className='text-center text-xl font-semibold mt-[5%]'>Why Choose Us ?</h1>
        <div className='relative'>
      <img src={valuebg} className="absolute w-full h-[100%] -z-10"></img>
      <div className='flex w-full justify-between px-[5%] pb-[5%] mt-[2%] pt-[5%]'>
        <div className='bg-white border rounded-xl px-[3%] w-[35%] pb-[4%]'>
         <img className='mt-[25%] w-[30%]' src={value1}></img>
         <h1 className='text-[3vh] font-semibold mt-[12%]'>Interactive Learning</h1>
         <p className='mt-[3%] text-[2vh]'>We believe in the power of interaction. Our quizzes are crafted to ensure you not only grasp the concepts but enjoy the learning process.</p>
        </div>
        <div className='bg-white border rounded-xl px-[3%] mx-[8%] w-[35%]'>
         <img className='mt-[25%] w-[30%]' src={value2}></img>
         <h1 className='text-[3vh] font-semibold mt-[12%]'>Tailored to Your Needs</h1>
         <p className='mt-[3%] text-[2vh]'>Say goodbye to generic quizzes. Our platform aligns with your school curriculum, providing targeted assessments to enhance your understanding of subjects.</p>
        </div>
        <div className='bg-white border rounded-xl px-[3%] w-[35%]'>
         <img className='mt-[25%] w-[30%]' src={value3}></img>
         <h1 className='text-[3vh] font-semibold mt-[12%]'>User-Friendly Interface</h1>
         <p className='mt-[3%] text-[2vh]'>Navigating through the quizzes is a breeze. We've designed our platform with simplicity in mind, ensuring a seamless learning experience for users of all ages.</p>
        </div>
      </div>
   
      </div>
    </div>
  )
}

export default Value
