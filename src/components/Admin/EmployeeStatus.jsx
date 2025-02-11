import React, { useContext } from 'react'
import { UserProvider } from '../../Context/UserContext';

function EmployeeStatus({ displayEmployee, setdisplayEmployee }) {
const {UsersList}=useContext(UserProvider)

    const handleEmployeeStatus = () => {
        if (displayEmployee) {
            setdisplayEmployee(false);
        }
        else {
            setdisplayEmployee(true);
        }
    }

    return (
        <>
            <div className='relative text-center mt-3 p-1 '>
                <button className='absolute top-[-14px] md:top-0 left-2 font-semibold md:text-xl text-sm cursor-pointer hover:text-amber-400' onClick={handleEmployeeStatus}>⬅️Give task</button>
                <h3 className='text-2xl md:text-3xl font-semibold font-serif'>Employee Status</h3>
            </div>
            <div className='w-full h-[90%] md:mt-3 px-3'>
                <div className=' bg-emerald-700 border w-full h-10 mt-2 flex items-center justify-center'>
                    <h3 className='border-r md:h-full w-1/6 text-center text-[50%] md:text-2xl font-semibold '>Name</h3>
                    <h3 className='border-r md:h-full w-1/6 text-center text-[50%] md:text-2xl font-semibold'>Total Task</h3>
                    <h3 className='border-r md:h-full w-1/6 text-center text-[50%] md:text-2xl font-semibold'>Completed</h3>
                    <h3 className='border-r md:h-full w-1/6 text-center text-[50%] md:text-2xl font-semibold'>Accepted</h3>
                    <h3 className='border-r md:h-full w-1/6 text-center text-[50%] md:text-2xl font-semibold'>Failed</h3>
                    <h3 className='border-r md:h-full w-1/6 text-center text-[50%] md:text-2xl font-semibold'>Active</h3>
                </div>

                <div className='w-full mt-2 overflow-y-auto max-h-[85%] bar'>
                {UsersList.map(user=>{
                if(!user.isAdmin){
                const active = user.active ? "🟢" :"🔴"
                return <div key={user.id} className='border w-full h-10 mt-2 flex justify-center items-center'>
                    <h3 className='w-1/6 text-center text-xl font-semibold '>{user.name}</h3>
                    <h3 className='w-1/6 text-center text-xl font-semibold'>{user.total_task}</h3>
                    <h3 className='w-1/6 text-center text-xl font-semibold'>{user.completed_task}</h3>
                    <h3 className='w-1/6 text-center text-xl font-semibold'>{user.accepted_task}</h3>
                    <h3 className='w-1/6 text-center text-xl font-semibold'>{user.failed_task}</h3>
                    <h3 className='w-1/6 text-center text-xl font-semibold'>{active}</h3>
                </div>}
                })}
                </div>

            </div>
        </>
    )
}

export default EmployeeStatus