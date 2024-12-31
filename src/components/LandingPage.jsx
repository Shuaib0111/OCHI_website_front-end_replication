import { motion } from 'framer-motion';
import React from 'react'
// import { FaLongArrowAltUp } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
function LandingPage() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-1'>
        <div className="textstructure mt-44 px-20">
            {["We Create", "Eye Opening", "Presentations"].map((item,index)=>{
                return (
                <div className="masker">
                <div className="w-fit flex items-center">
                    {index === 1 && (
                    <motion.div initial={{width:0}} animate={{width: "9vw"}} transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}  className='w-[8vw]  ml-2 h-[5vw] mb-3 rounded-md relative top-[1vw] bg-green-500'>
                    </motion.div>)}
                <h1 className="uppercase text-[7.5vw] text-8xl leading-[6vw] tracking-tighter font-medium font-['Founders_Grotesk Condensed']">{item}</h1>
            </div>
            </div>
            );
            })}
        </div>
        <div className='border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-4 px-20'>
            {["For Public and Private Companies", "From the first pitch to IPO "].map((item,index)=>(
                <p className='text-md font-light tracking-tight leading-none'>{item}</p>
            ))}
            <div className="start flex items-center gap-5">
                <div className='px-5 py-3 border-[1px] border-zinc-400 font-light text-xs uppercase rounded-full'>Start the Project
                </div>
                <div className=" w-10 h-10 flex justify-center items-center border-[1px] border-zinc-400 rounded-full">
                    <span className='rotate-[-45deg]'><FaArrowRightLong/></span> 
                    </div>
            </div>
        </div>
    </div>
  );
}

export default LandingPage;