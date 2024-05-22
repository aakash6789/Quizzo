import React,{useState,useEffect} from 'react'
import axios from 'axios';
const HistoryQuiz = () => {
    const [questionNo,setQuestionNo]=useState(0);
    const [data,setData]=useState([]);
    const [optionData,setOptionData]=useState([]); 
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('https://opentdb.com/api.php?amount=10&category=23&difficulty=medium&type=multiple&encode=url3986');
          setData(response.data.results);
          if (response.data.results && response.data.results.length > 0) {
            setOptionData([
              ...response.data.results[questionNo].incorrect_answers,
              response.data.results[questionNo].correct_answer
            ]);
          }
        } catch (error) {
          console.error("Error while fetching question:", error);
        }
      };
    
      fetchData();
    
    }, [questionNo]);


function convert(str){
  return str.replace(/%20/g, ' ').replace(/%3F/g, '?');
}
  return (
    <div className='text-black '>
      {data.length>0 ?<div className=' ml-[5%] mt-[10%]'>
        <h1 className='text-[#191D63] font-semibold'>{convert(data[questionNo].question).toUpperCase()}</h1> 
        <div>
        <div className='bg-[#F4F3F6] hover:bg-[#45C486] hover:text-white hover:cursor-pointer rounded-xl py-[1%] mt-[3%] w-[30%]  px-[3%] flex items-center text-black font-semibold'>
  <div onClick={()=>questionNo===data.length-1 ?setQuestionNo(0):setQuestionNo(questionNo+1)} className='text-[1rem] w-full text-left whitespace-nowrap overflow-hidden text-ellipsis'>
    A. {convert(optionData[0].toUpperCase())}
  </div>
</div> 
<div onClick={()=>questionNo===data.length-1 ?setQuestionNo(0):setQuestionNo(questionNo+1)} className='bg-[#F4F3F6] hover:bg-[#45C486] hover:text-white hover:cursor-pointer rounded-xl py-[1%] mt-[3%] w-[30%] px-[3%] flex items-center text-black font-semibold'>
  <div className='text-[1rem] w-full text-left whitespace-nowrap overflow-hidden text-ellipsis'>
    B. {convert(optionData[1].toUpperCase())}
  </div>
</div> 
<div onClick={()=>questionNo===data.length-1 ?setQuestionNo(0):setQuestionNo(questionNo+1)} className='bg-[#F4F3F6] hover:bg-[#45C486] hover:text-white hover:cursor-pointer rounded-xl py-[1%] mt-[3%] w-[30%] px-[3%] flex items-center text-black font-semibold'>
  <div className='text-[1rem] w-full text-left whitespace-nowrap overflow-hidden text-ellipsis'>
    C. {convert(optionData[2].toUpperCase())}
  </div>
</div> 
          
<div onClick={()=>questionNo===data.length-1 ?setQuestionNo(0):setQuestionNo(questionNo+1)} className='bg-[#F4F3F6] hover:bg-[#45C486] hover:text-white hover:cursor-pointer rounded-xl py-[1%] mt-[3%] w-[30%] px-[3%] flex items-center text-black font-semibold'>
  <div className='text-[1rem] w-full text-left whitespace-nowrap overflow-hidden text-ellipsis'>
    D. {convert(optionData[3].toUpperCase())}
  </div>
</div>
        </div>
        </div>:<h1>Loading...</h1>}
    </div>
  )
}

export default HistoryQuiz
