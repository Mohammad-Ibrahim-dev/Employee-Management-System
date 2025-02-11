import React from 'react'
import InfoCard from './InfoCard'
import TaskSection from './TaskSection'
import { useContext } from 'react'
import { UserProvider } from '../../Context/UserContext'

function EmployeeDashboard() {
  const {selectedUser} = useContext(UserProvider)
  return (
    <>
    <div className='w-full md:h-1/5 min-h-1/6 flex flex-wrap md:flex-nowrap gap-3 md:gap-4'>
        <InfoCard counts={selectedUser.total_task} title={"Total Task"}/>
        <InfoCard counts={selectedUser.accepted_task} title={"Accepted"}/>
        <InfoCard counts={selectedUser.completed_task} title={"Completed"}/>
        <InfoCard counts={selectedUser.failed_task} title={"Failed"}/>
    </div>
        <TaskSection/>
    </>
  )
}

export default EmployeeDashboard