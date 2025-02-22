import React from 'react'

function About() {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-2xl rounded-tr-2xl text-black'>
        <h1 className='font-["Neue_Montreal"] text-[4vw] leading-[4.5vw] tracking-tighter'>
            Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.
        </h1>
        <div className=" flex gap-5 w-full border-t-[1px] pt-10 mt-20 border-[#a1b562]">
            <div className="w-1/2">
                <h1 className='text-5xl'>Our approach :</h1>
                <button className=' uppercase px-6 mt-8 py-3 bg-zinc-900 rounded-full text-white flex gap-5 items-center'>Read More
                <div className="w-2 h-2 rounded-full bg-zinc-100"></div></button>
            </div>
            <div className="w-1/2 h-[70vh] bg-[#b7cc6c] rounded-3xl"></div>
        </div>
    </div>
  )
}

export default About