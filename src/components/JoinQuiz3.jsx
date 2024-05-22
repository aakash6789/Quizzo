import React from 'react'
import object1 from "../assets/images/o1.png"
import object2 from "../assets/images/o2.png"
import object3 from "../assets/images/o3.png"
import character1 from "../assets/images/c1.png"
import character2 from "../assets/images/c2.png"
import character3 from "../assets/images/c3.png"
import bg from "../assets/images/qbg.png"

const JoinQuiz3 = () => {
  return (
    <div>
       <div className=' relative mt-[80%]'>
        <img src={bg} className="absolute -z-10"></img>
        <img src={character3} className='w-[20%] mt-[5%] absolute'></img>
        <img src={object3} className='w-[20%] mt-[5%] ml-[14%] absolute'></img>
        </div>
    </div>
  )
}

export default JoinQuiz3
