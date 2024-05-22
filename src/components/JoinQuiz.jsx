import React from 'react'
import object1 from "../assets/images/o1.png"
import object2 from "../assets/images/o2.png"
import object3 from "../assets/images/o3.png"
import character1 from "../assets/images/c1.png"
import character2 from "../assets/images/c2.png"
import character3 from "../assets/images/c3.png"
import bg from "../assets/images/qbg.png"
const JoinQuiz = () => {
  return (
    <div className='bg-white'>
        <div className='relative flex pr-[5%] bg-[#dbe4ff]'>
        <div className='flex pb-[3%]'>
        <img src={character1} className='w-[20%] mt-[5%] '></img>
        <img src={object1} className='w-[20%] mt-[5%]'></img>
        </div>
        <div className='w-[70%] pt-[5%] mr-[5%]'>
          <h1 className='text-[3vh] min-lg:text-[2vh] font-semibold text-[#334155]'>Join Science Quiz</h1>
          <button className="bg-[#964682] py-[3%] text-[1.8vh] font-semibold border mt-[8%]  w-[70%] mx-auto text-white ">Join Quiz</button>
        </div>
        </div>
        <div className='relative flex pr-[5%] mt-[5%] bg-[#dbe4ff]'>
        <div className='flex pb-[3%]'>
        <img src={character2} className='w-[20%] mt-[5%] '></img>
        <img src={object2} className='w-[20%] mt-[5%]'></img>
        </div>
        <div className='w-[70%] pt-[5%] mr-[5%]'>
          <h1 className='text-[3vh] min-lg:text-[2vh] font-semibold text-[#334155]'>Join Geography Quiz</h1>
          <button className="bg-[#964682] py-[3%] text-[1.8vh] font-semibold border mt-[8%]  w-[70%] mx-auto text-white ">Join Quiz</button>
        </div>
        </div>
        <div className='relative flex pr-[5%] mt-[5%] bg-[#dbe4ff]'>
        <div className='flex pb-[3%]'>
        <img src={character3} className='w-[20%] mt-[5%] '></img>
        <img src={object3} className='w-[20%] mt-[5%]'></img>
        </div>
        <div className='w-[70%] pt-[5%] mr-[5%]'>
          <h1 className='text-[3vh] min-lg:text-[2vh] font-semibold text-[#334155]'>Join History Quiz</h1>
          <button className="bg-[#964682] py-[3%] text-[1.8vh] font-semibold border mt-[8%]  w-[70%] mx-auto text-white ">Join Quiz</button>
        </div>
        </div>
      
    </div>
  )
}

export default JoinQuiz
