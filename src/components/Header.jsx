import React from 'react'
import {variable} from './variable'

export default function Header() {
  return (
    <div className='py-20'>
        <p className='text-gray-200 font-bold text-center'>Hello, I'm</p>
        <h1 className='text-3xl font-bold text-gray-200 my-3 text-center'>{variable.name}</h1>
        <p className='text-white text-sm text-gray-300 text-center'>{variable.profession}</p>
        <div className='flex gap-4 justify-center my-10'>
            <a href='#' className='border text-cyan-500 border-cyan-600 px-4 py-2 rounded-md hover:bg-cyan-600'>Download CV</a> 
            <a href='#' className='border text-cyan-500 border-cyan-600 px-4 py-2 rounded-md hover:bg-cyan-600'>Let's Talk</a>
        </div>
    </div>
  )
}
