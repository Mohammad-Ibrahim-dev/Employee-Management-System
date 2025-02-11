import React, { useContext } from 'react'
import { UserProvider } from '../Context/UserContext'

function Header() {
  const {setselectedUser,selectedUser,setUsertasks}=useContext(UserProvider)
  const handleLogOut=()=>{
    localStorage.removeItem("LogedInUser")
    setselectedUser('')
  }
  return (
    <>
    <div className='w-full flex justify-between items-center'>
        <div><h3 className='text-4xl font-serif'>Employee<span className='text-emerald-400'>Hub</span></h3></div>
        <div><button className='bg-emerald-500 p-2 rounded-2xl cursor-pointer font-semibold 'onClick={handleLogOut}>Log Out</button></div>
    </div>
    <div className='p-5 text-amber-300'>
        <h1 className='text-3xl font-semibold'>Hello 👋</h1>
        <h3 className='text-5xl font-bold text-amber-200'>{selectedUser.name}</h3>
    </div>
    </>
  )
}

export default Header