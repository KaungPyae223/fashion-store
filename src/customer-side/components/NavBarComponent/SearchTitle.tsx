import React from 'react'

interface SearchTitleInterface {
    title:string
}

const SearchTitle = ({title}:SearchTitleInterface) => {
  return (
    <div
    className='font-semibold uppercase text-sm mb-6'
    >{title}</div>
  )
}

export default SearchTitle