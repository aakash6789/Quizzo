import React from 'react'
import carr_img from "../assets/images/carrimg.png"
import tick from "../assets/images/tick.png"
import tick_white from "../assets/images/tickw.png"
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
const Subscriptions = () => {
  return (
    <div className='text-[#352B53]' >
    <h1 className='text-center text-xl font-semibold mt-[5%]'>Our values</h1>
    <div className='relative'>
  {/* <img src={valuebg} className="absolute w-full h-[100%] -z-10"></img> */}
  <div className='flex w-full justify-between px-[5%] pb-[5%] mt-[2%] pt-[5%]'>
    <div className='bg-[#A52FCE] text-white border h-[100vh] rounded-xl px-[3%] w-[48%]'>
    
     <h1 className='text-[5vh]  mt-[12%]'>Your carrier</h1>
     <h1 className='text-[5vh] font-semibold mt-[0%]'>Starts here</h1>
     <p className='mt-[10%] text-[2vh]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proide laborum</p>
     <img className='mt-[5%] mx-auto w-[80%]' src={carr_img}></img>
    </div>
    <div className='bg-[#5357BE1F] border rounded-xl px-[3%] mx-[5%] w-[48%]'>
    <div className='mt-[10%] flex'>
    <span className='text-[5vh] font-bold'>Monthly</span>
    <span className='text-[2vh] ml-auto mt-[5%]'>149 only</span>
</div>

     <h1 className='text-[3vh] font-bold mt-[12%]'>Plan includes:</h1>
     <div className='flex mt-[12%] relative'>
        <div className='w-[5%]'>
     <img className='mt-1' src={tick}></img>
        </div>
        <p className='ml-[3%] w-[95%] text-[2vh]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
     </div>
     <div className='flex mt-[5%] relative'>
        <div className='w-[5%]'>
     <img className='mt-1' src={tick}></img>
        </div>
        <p className='ml-[3%] w-[95%] text-[2vh]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
     </div>
     <div className='flex mt-[5%] relative'>
        <div className='w-[5%]'>
     <img className='mt-1' src={tick}></img>
        </div>
        <p className='ml-[3%] w-[95%] text-[2vh]'> consectetur adipiscing elit</p>
     </div>
     <h2 className='text-center text-[#666666] text-[1.8vh] font-semibold mt-[45%]'>See all features</h2>
     <div className="mx-auto mt-[8%] flex">
          <button className="bg-[#AC4192] py-[3%] text-[1.8vh] font-semibold border rounded-xl w-[80%] mx-auto text-white ">Start your monthly plan</button>
        </div>
    
    </div>
    <div className='bg-[#964181] text-white border rounded-xl px-[3%]  w-[48%]'>
        <div className='mt-[10%] flex'>
            <span className='text-[5vh] font-bold'>Yearly</span>
            <span className='text-[2vh] ml-auto mt-[5%]'>999 only</span>
        </div>
     <h1 className='text-[3vh] font-bold mt-[12%]'>Plan includes:</h1>
     <div className='flex mt-[12%] relative'>
        <div className='w-[5%]'>
     <img className='mt-1' src={tick_white}></img>
        </div>
        <p className='ml-[3%] w-[95%] text-[2vh]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
     </div>
     <div className='flex mt-[5%] relative'>
        <div className='w-[5%]'>
     <img className='mt-1' src={tick_white}></img>
        </div>
        <p className='ml-[3%] w-[95%] text-[2vh]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
     </div>
     <div className='flex mt-[5%] relative'>
        <div className='w-[5%]'>
     <img className='mt-1' src={tick_white}></img>
        </div>
        <p className='ml-[3%] w-[95%] text-[2vh]'> consectetur adipiscing elit</p>
     </div>
     <h2 className='text-center text-[#D7D7D7] text-[1.8vh] font-semibold mt-[45%]'>See all features</h2>
     <div className="mx-auto mt-[8%] flex">
          <button className="bg-white py-[3%] text-[1.8vh] font-semibold border rounded-xl w-[80%] mx-auto text-[#000000] ">Start your annual plan</button>
        </div>
    
    </div>
  </div>

  </div>
</div>
  )
}

export default Subscriptions