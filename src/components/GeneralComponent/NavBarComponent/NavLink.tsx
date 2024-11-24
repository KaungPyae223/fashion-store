import Link from 'next/link'
import React from 'react'

const NavLink = () => {
  return (
    <div className='py-3 flex items-center justify-center gap-6 border'>
        <Link href={"/"} className='active border-b border-b-gray-800'>Home</Link>
        <Link href={"/"} className='text-gray-500'>Clothes</Link>
        <Link href={"/"} className='text-gray-500'>Brands</Link>
        <Link href={"/"} className='text-gray-500'>Footwear</Link>
        <Link href={"/"} className='text-gray-500'>Accessories</Link>
        <Link href={"/"} className='text-gray-500'>Lifestyle</Link>
        <Link href={"/"} className='text-gray-500'>Blogs</Link>
        <Link href={"/"} className='text-gray-500'>Contact Us</Link>  
    </div>
  )
}

export default NavLink