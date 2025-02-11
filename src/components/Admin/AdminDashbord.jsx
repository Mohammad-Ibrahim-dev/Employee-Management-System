import React, { useContext, useState } from 'react'
import { UserProvider } from '../../Context/UserContext'
import GiveTaskForm from './GiveTaskForm';
import EmployeeStatus from './EmployeeStatus';

function AdminDashbord() {
  const [displayEmployee, setdisplayEmployee] = useState(false)
  
  
  return (
    <>
      <div className='bg-neutral-800 w-full h-3/4 mt-3 py-2 rounded-xl'>
        {!displayEmployee ? <GiveTaskForm displayEmployee={displayEmployee} setdisplayEmployee={setdisplayEmployee}/> :<EmployeeStatus displayEmployee={displayEmployee} setdisplayEmployee={setdisplayEmployee}/>}
      </div>
    </>
  )
}

export default AdminDashbord