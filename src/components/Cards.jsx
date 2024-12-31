import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen bg-zinc-900 flex items-center px-32 gap-5'>
        <div className="cardContainer w-1/2 h-[50vh]">
            <div className="relative card rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center">
                <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" />
                <button className='absolute left-10 bottom-8 px-5 py-1 border-[1px] rounded-full'>&copy; 2024-25</button>
            </div>
        </div>
        <div className="cardContainer flex gap-5 w-1/2 h-[50vh]">
            <div className="card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-[#212121]">
            <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" />
                <button className='left-4 absolute bottom-8 px-4 py-1 border-[1px] rounded-full text-xs'> RATING 5.0 ON CLUTCH</button>
            </div>
            <div className="card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-[#212121]">
            <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" />
                <button className='absolute left-4  bottom-8 px-4 py-1 border-[1px] rounded-full text-xs'>BUSINESS BOOTCAMP ALUMINI</button>
            </div>
        </div>
    </div>
  )
}

export default Cards