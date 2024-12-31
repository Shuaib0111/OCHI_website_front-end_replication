import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full py-12 rounded-tl-2xl rounded-tr-2xl bg-[#004D43]'>
        <div className="text border-t-2 border-b-2 border-zinc-300 flex  overflow-hidden whitespace-nowrap">
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity, ease: "linear", duration: 10}}  className='text-[18vw] leading-none tracking-tighter font-bold uppercase pb-4 -mb-1 pr-40'>We are Ochi</motion.h1>
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity, ease: "linear", duration: 10}}  className='text-[18vw] leading-none tracking-tighter font-bold uppercase pb-4 -mb-1 pr-40'>We are Ochi</motion.h1>
        </div>
    </div>
  )
}

export default Marquee