import React, { useContext } from 'react'
import { UserProvider } from '../../Context/UserContext'

function TaskSection() {
  const { Usertasks } = useContext(UserProvider)
  return (
    <div className=' bar mt-5 w-full h-[42%] md:h-[55%] flex items-center justify-start flex-nowrap gap-2 scroll-smooth snap-x snap-mandatory overflow-x-auto' >
      {
        Usertasks.map((task) => {
          return <div key={task.id} className='flex-shrink-0 w-full md:w-1/5 h-full p-3 bg-amber-200 snap-start rounded-2xl text-black'>
            <div className='flex items-center justify-between'>
              <h2 className='text-2xl text-black font-semibold'>{task.title}</h2>
              <h5 className='font-semibold'>{task.date}</h5>
            </div>
            <h3 className='text-emerald-700 text-3xl font-semibold'>{task.category}</h3>
            <h4 className='font-bold te underline italic'>Details about the task-</h4>
            <div className='text-xl font-serif h-[60%] md:h-[70%]'><p>{task.description}</p></div>

            <div className='w-full flex justify-between items-center font-semibold text-cyan-900'>
              <label htmlFor="completed">Completed</label>
              <input className='ml-2 ' type="checkbox" name="completed"  readOnly checked={task.completed}/>
              <label htmlFor="accepted">Accepted</label>
              <input className='ml-2 ' type="checkbox" name="accepted"  readOnly checked={task.accepted}/>
              <label htmlFor="failed">Failed</label>
              <input className='ml-2 ' type="checkbox" name="failed"  readOnly checked={task.failed}/>
            </div>
          </div>
        })}
    </div>
  )
}

export default TaskSection