import React from 'react'

function GiveTaskForm({displayEmployee,setdisplayEmployee}) {
    const handleEmployeeStatus = () => {
        if(displayEmployee){
          setdisplayEmployee(false);
        }
        else{
          setdisplayEmployee(true);
        }
    }
  return (
    <>
    <div className='relative text-center mt-3 p-1'>
           <h3 className='text-2xl md:text-3xl font-semibold font-serif'>Give task</h3>
          <button className='absolute top-[-14px] md:top-0 right-2 font-semibold text-sm md:text-xl cursor-pointer hover:text-amber-400' onClick={handleEmployeeStatus} >Employee Status➡️</button>
        </div>
        <form className='w-full max-h-[90%] md:mt-3 px-3 md:flex gap-10 overflow-auto bar'>
          <div className='p-2 md:w-3/5 text-xl flex flex-col gap-4'>
            <label className='text-2xl font-semibold' htmlFor="title">Task title</label>
            <input className='border p-2 rounded-xl bg-[#1C1C1C] outline-amber-200' type="text" name="title" id='title' placeholder='Task title' />
            <label className='text-2xl font-semibold' htmlFor="date">Date</label>
            <input className='border p-2 rounded-xl bg-[#1C1C1C] outline-amber-200' type="date" name='date' id='date' />
            <label className='text-2xl font-semibold' htmlFor="asignTo">Asign to</label>
            <input className='border p-2 rounded-xl bg-[#1C1C1C] outline-amber-200' type="text" name="asignTo" id='asignTo' placeholder='To whom...' />
            <label className='text-2xl font-semibold' htmlFor="category">Category</label>
            <input className='border p-2 rounded-xl bg-[#1C1C1C] outline-amber-200' type="text" name='category' id='category' placeholder='eg: dev,design etc.' />
          </div>
          <div className='p-2 md:w-2/5 text-xl flex gap-4 flex-col'>
            <label className='text-2xl font-semibold' htmlFor="description">Description</label>
            <textarea className='border p-2 w-full rounded-xl bg-[#1C1C1C] outline-amber-200' name="description" id='description' cols='25' rows='11' placeholder='Details about the task...'></textarea>
            <button className='bg-emerald-400 w-full p-1 rounded-2xl text-xl font-semibold cursor-pointer' type="button">Send</button>
          </div>
        </form>
    </>
  )
}

export default GiveTaskForm