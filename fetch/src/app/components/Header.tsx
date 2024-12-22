import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between items-center p-4 bg-purple-400 text-white'>
      <div className='font-extrabold'>Data fetching</div>

    <div className='flex justify-center items-center gap-8'>
        <div className='hover:text-purple-600 font-semibold'><Link href="/"> Home </Link></div>
        <div className='hover:text-purple-600 font-semibold'><Link href="clientSide"> Client Data </Link></div>
        <div className='hover:text-purple-600 font-semibold'><Link href="/serverSide"> Server Data</Link></div>
    </div>
    </div>
  )
}

export default Header
