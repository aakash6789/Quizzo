import React from "react";
import maskbg from "../assets/images/maskbg.png";
import image1 from "../assets/images/image1.png";
import mail from "../assets/images/mail.png";
import password from "../assets/images/password.png";
const Hero = () => {
  return (
    <div className="relative flex">
      <img src={maskbg} className="absolute w-full -z-10"></img>
      <div className="mr-auto border rounded-xl w-[25%] mt-[9%]  text-[#334155] ml-[5%] bg-white px-[2%]">
        <div className="flex text-[2vh] bg-[#E2E8F0] justify-between w-[full] mx-auto py-[1%] mt-[10%] border rounded-xl">
          <button className="bg-white border rounded-xl w-[50%]">Login</button>
          <button className="bg-[#E2E8F0] text-[#64748B] border rounded-xl w-[50%]">
            Register
          </button>
        </div>
        <div className="mx-auto px-[5%]">
          <div className="relative mt-[10%] mb-[5%]">
            <img src={mail} className="w-[5%] absolute ml-[3%] mt-[4.5%]"></img>
            <input
              className="border text-[#64748B] text-[2vh] w-full border-[#c8c8c9] rounded-xl h-[5vh] pl-[10%]"
              placeholder="E-mail"
            />
          </div>
          <div className="relative text-[2vh] mt-[5%] mb-[5%]">
            <img
              src={password}
              className="w-[5%] absolute ml-[3%] mt-[4%]"
            ></img>
            <input
              className="border text-[#64748B]  w-full border-[#c8c8c9] rounded-xl h-[5vh] pl-[10%]"
              placeholder="Password"
            />
          </div>
        </div>
        <div className="mx-auto flex text-[1.5vh] mt-[3%] justify-between">
          <div className="w-[40%] relative flex mt-[8%]">
            <input
              type="checkbox"
              className="mr-[2%]   border-[#964682] border-[1px]"
            ></input>
            <div className="ml-[5%] ">Remember me</div>
          </div>
          <div className="w-[60%] text-right mt-[8%]">Forget Password?</div>
        </div>
        <div className="mx-auto mt-[8%] flex">
          <button className="bg-[#964682] py-[3%] text-[1.8vh] font-semibold border rounded-2xl w-[70%] mx-auto text-white ">Login</button>
        </div>
        <div className="flex mx-auto justify-between px-[25%] mt-[10%] text-[1.5vh]">
            <hr className="bg-[#c8c8c9] w-[30%] mt-[6px]"></hr>
            <div> or login with </div>
            <hr className="bg-[#CBD5E1] w-[30%] mt-[6px]"></hr>
        </div>
        <div className="flex text-white  justify-between mt-[3%] max-sm:w-full max-sm:px-[28%]  max-sm:mt-[10%] w-[20%]  ">
          {/* <button className='w-[60%] max-sm:w-[50%] px-[3%]'><img src={Play1}></img></button>
         <button className='w-[60%] max-sm:w-[50%] px-[3%]'><img src={Play2}></img></button> */}
        </div>
      </div>

      <img src={image1} className="ml-auto w-[40%] mt-[11%] mr-[3%]"></img>
    </div>
  );
};

export default Hero;
