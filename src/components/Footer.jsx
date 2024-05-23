import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col pb-[5%] h-auto  bg-white relative mt-[5%] text-[#3E3E3E]'>
         
           
            

        <div className='flex w-[100%] ml-auto justify-between mt-[5%] max-sm:mt-[15%] px-[5%]'>
         
        
       
        <div className='flex justify-between ml-[10%]'>
        <div className='flex-col justify-between mt-[5%]'>
            <div id='foot_head' className='xl:text-[3vh]  text-[#7951F9]'>Feedback</div>
            <div id='foot_tag' className='text-[2vh] font-medium xl:text-[2vh] h-auto mt-[10%] text-[#3E3E3E]'>
            <p className='mt-2'>Got questions? Reach us at quizzo@email.com</p>
            </div>
            </div>
            </div>
        <div className='flex justify-between ml-[10%]'>
            <div className='flex-col justify-between'>
            <div id='foot_head' className='xl:text-[3vh] max-md:text-[2vh] font-bold'>MENU</div>
            <div id='foot_tag' className='text-[2vh] font-medium xl:text-[2vh] max-md:text-[1vh] h-auto mt-[10%] text-[#3E3E3E]'>
            <p  className='mt-2'>Home</p>
            <p className='mt-2'>About</p>
            <p className='mt-2'>Contact us</p>
            <p className='mt-2'>FAQ</p>
            </div>
            </div>
            </div>
       
        <div className='flex justify-between'>
            <div className='flex-col justify-between'>
            <div id='foot_head' className='xl:text-[3vh] max-md:text-[2vh] font-bold'>Social</div>
            <div id='foot_tag' className='text-[2vh] font-medium  xl:text-[2vh] max-md:text-[1vh] mt-[10%] text-[#3E3E3E]'>
            <p className='mt-2'>Twitter</p>
            <p className='mt-2'>Instagram</p>
            <p className='mt-2'>Facebook</p>
            </div>
            </div>
        </div>
        <div className='flex justify-between'>
            <div className='flex-col justify-between'>
            <div id='foot_head' className='xl:text-[3vh] max-md:text-[2vh] font-bold'>Legal</div>
            <div id='foot_tag' className='text-[2vh] font-medium  xl:text-[2vh] max-md:text-[1vh] mt-[10%] text-[#3E3E3E]'>
            <p className='mt-2'>Terms & Privacy Policy</p>
            <p className='mt-2'>App License</p>
            <p className='mt-2'>Legal Notice</p>
            
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Footer
