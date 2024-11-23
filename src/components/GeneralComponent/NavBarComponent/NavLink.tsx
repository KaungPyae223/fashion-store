import Link from 'next/link'
import React from 'react'

const NavLink = () => {
  return (
    <div className='py-3 flex items-center justify-center gap-6 border'>
        <Link href={"/"} className='active border-b border-b-gray-800'>Home</Link>
        <Link href={"/"}>Clothes</Link>
        <Link href={"/"}>Brands</Link>
        <Link href={"/"}>Footwear</Link>
        <Link href={"/"}>Accessories</Link>
        <Link href={"/"}>Blogs</Link>

    </div>
  )
}

export default NavLink