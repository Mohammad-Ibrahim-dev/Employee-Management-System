import React, { useEffect } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Employee/EmployeeDashboard'
import AdminDashbord from './components/Admin/AdminDashbord'
import Header from './components/Header'
import { useContext } from 'react'
import { UserProvider } from './Context/UserContext'

function App() {
  const {selectedUser,setselectedUser} = useContext(UserProvider)
  
  
  return (
    <div className='w-screen h-screen bg-[#1C1C1C] text-white'>
      {!selectedUser && <Login/>}
      {selectedUser && <div className='w-full h-full p-5'>
      <Header/>
      {
        selectedUser.isAdmin?<AdminDashbord/>:<EmployeeDashboard/>
      }
      </div>}
    </div>
  )
}

export default App