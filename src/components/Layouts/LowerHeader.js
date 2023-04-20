import React from 'react'
import q from "../images/lowerheader/q.png"
export const LowerHeader = () => {
  return (
    <div className='flex justify-start align-items-center my-3'>
        <h3 className='text-gray-500 w-2/6'> Project Statistic</h3>
        <img width={'30px'} className='' src={q}/>
        <div className="w-full flex justify-end align-items-center">
        <button className='rounded-full shadow-md theme-background py-2 px-3 text-sm mx-2'>30 Days</button>
        <button className='rounded-full shadow-md theme-background py-2 px-3 text-sm mx-2'>90 Days</button>
        <button className='rounded-full shadow-md theme-background py-2 px-3 text-sm mx-2'>6 months</button>
        <button className='rounded-full shadow-md theme-background py-2 px-3 text-sm mx-2'>12 months</button>
        
      </div>
    </div>

  )
}
