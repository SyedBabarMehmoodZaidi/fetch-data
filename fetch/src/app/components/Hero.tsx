import React from 'react'

const Hero = () => {
  return (
    <div>
      <div className='flex justify-center items-center h-screen gap-8'>
        <button className='border-2 p-4 bg-purple-400 text-white hover:bg-purple-600 font-semibold'>Client Side Data</button>
        <button className='border-2 p-4 bg-purple-400 text-white hover:bg-purple-600 font-semibold'>Server Side Data</button>
      </div>
    </div>
  )
}

export default Hero
