import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

const NavLink = () => {

  const pathName = usePathname();

  return (
    <div className='py-3 flex items-center justify-center gap-6 border'>
        <Link href={"/"} className={pathName == "/" ? 'border-b border-b-gray-800' : 'text-gray-500'}>Home</Link>
        <Link href={"/clothes"} className={pathName.startsWith("/clothes") ? 'border-b border-b-gray-800' : 'text-gray-500'}>Clothes</Link>
        <Link href={"/brands"} className={pathName.startsWith("/brands") ? 'border-b border-b-gray-800' : 'text-gray-500'}>Brands</Link>
        <Link href={"/footwears"} className={pathName.startsWith("/footwears") ? 'border-b border-b-gray-800' : 'text-gray-500'}>Footwear</Link>
        <Link href={"/accessories"} className={pathName.startsWith("/accessories") ? 'border-b border-b-gray-800' : 'text-gray-500'}>Accessories</Link>
        <Link href={"/lifestyle"} className={pathName.startsWith("/lifestyle") ? 'border-b border-b-gray-800' : 'text-gray-500'}>Lifestyle</Link>
        <Link href={"/blogs"} className={pathName.startsWith("/blogs") ? 'border-b border-b-gray-800' : 'text-gray-500'}>Blogs</Link>
        <Link href={"/supports"} className={pathName.startsWith("/supports") ? 'border-b border-b-gray-800' : 'text-gray-500'}>Supports</Link>
       
    </div>
  )
}

export default NavLink