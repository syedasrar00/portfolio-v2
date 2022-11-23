import React from 'react'
import childPic from './assets/childhood.jpg'

export default function About() {
  return (
    <div className='my-8'>
        <p className='text-gray-800 font-sans text-center text-xs font-bold'>Get To Know</p>
        <h1 className='text-3xl font-bold text-cyan-500 text-center'>About Me</h1>
        <div className="flex my-5 justify-center">
            <img src={childPic} className="h-64 w-64 mx-10 rotate-12 rounded-xl hover:rotate-0 ease-in duration-300"/>
            <div className="w-1/3 gap-5">
                {/* <card />
                <card />
                <card /> */}
                <p className='my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit obcaecati ipsam nulla minima. Rem nihil voluptatibus iure deleniti eius amet ipsam asperiores quaerat, repellat accusantium dolorum odio a, necessitatibus harum.</p>
                <a href='#' className='border text-cyan-500 border-cyan-600 px-4 py-2 rounded-md hover:bg-cyan-500 hover:text-gray-700'>Let's Talk</a>
            </div>
        </div>
    </div>
  )
}
