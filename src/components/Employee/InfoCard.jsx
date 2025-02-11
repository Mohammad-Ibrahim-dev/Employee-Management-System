import React from 'react'

function InfoCard({counts,title}) {
  return (
    <div className='w-[48%] md:w-1/4 h-full bg-amber-500 rounded-2xl flex flex-col md:gap-2 justify-center p-4'>
        <h1 className='text-3xl md:text-5xl font-bold'>{counts}</h1>
        <h1 className='text-2xl md:text-4xl font-bold font-sans'>{title}</h1>
    </div>
  )
}

export default InfoCard