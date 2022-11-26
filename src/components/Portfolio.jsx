import React from 'react'
import { variable } from './variable'

export default function Portfolio() {
  return (
    <div className='my-12 max-w-[900px] mx-auto p-10' id='portfolio'>
        <p className='text-gray-800 font-sans text-center text-xs font-bold'>My Recent Work</p>
        <h1 className='text-3xl font-bold text-cyan-700 text-center pb-8'>Portfolio</h1>
        <div className="grid grid-cols-3">
            {variable.portfolio.map(obj => {
                return <div key={obj.title}>
                    <img src={obj.image} alt="Website ScreenShot" className="" />
                    <h3>{obj.title}</h3>
                    <div className='flex gap-4 justify-center my-10'>
                        <a href={obj.githubLink} className='border text-cyan-500 border-cyan-600 px-4 py-2 rounded-md hover:bg-cyan-500 hover:text-gray-700'>Github Link</a>             
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}
