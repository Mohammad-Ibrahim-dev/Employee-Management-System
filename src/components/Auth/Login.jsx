import React, { useContext, useState, useEffect } from 'react'
import { UserProvider } from '../../Context/UserContext'
import Usersdata from "../../Context/Users.json";

function Login() {
  const [email, setEmail] = useState('')
  const [password, setpassword] = useState('')
  const { setUsersList, UsersList, setselectedUser, setUsertasks } = useContext(UserProvider);
  function setlocalStorage() {
    localStorage.setItem("UsersList", JSON.stringify(Usersdata))
  }
  setlocalStorage()

  useEffect(() => {
    const logedIn = JSON.parse(localStorage.getItem("LogedInUser"))
    if (logedIn) {
      setselectedUser(logedIn)
      setUsertasks(logedIn.tasks)
    }
  }, [])
  useEffect(() => {
    const Users = JSON.parse(localStorage.getItem("UsersList"));
    if (Users) {
      setUsersList(Users)
    };
  }, [])


  const hundleLogIn = (e) => {
    e.preventDefault();
    if (email == '' || password == '') {
      alert("E-mail or Password is empty...")
    }
    else {
      const user = UsersList ? UsersList.find((item) =>
        item.email === email && item.password === password) : ''
      if (user) {
        if (user.isAdmin) {
          setselectedUser(user)
          localStorage.setItem("LogedInUser", JSON.stringify(user))
        }
        else {
          setselectedUser(user)
          setUsertasks(user.tasks);
          localStorage.setItem("LogedInUser", JSON.stringify(user))
        }
      }
      else {
        alert("Invalid info...")
      }
    }
  }

  return (
    <div className='w-full h-full p-5'>
      <div className='text-center py-4'>
        <h1 className='text-4xl md:text-7xl font-semibold font-serif'>Employee<span className='text-emerald-400'>Hub</span></h1>
      </div>
      <div className='w-full flex justify-center items-center h-5/6 mt-7'>
        <div className=' w-full md:w-2/5 h-2/3 border border-emerald-400 rounded-3xl'>
          <div className='text-center text-4xl py-5 font-semibold' ><h3 className='py-5'>Log In</h3></div>
          <form className='flex flex-col gap-5 h-3/5 justify-center items-center'>
            <input className='border-2 border-emerald-300 rounded-3xl p-2 w-[70%]' type="email" autoComplete='username' name="email" placeholder='E-mail' value={email} onChange={(e) => { setEmail(e.target.value) }} />
            <input className='border-2 border-emerald-300 rounded-3xl p-2 w-[70%]' type="password" autoComplete='current-password' name="password" placeholder='Password' value={password} onChange={(e) => { setpassword(e.target.value) }} />
            <button className='rounded-3xl p-2 bg-emerald-700 cursor-pointer w-1/3' onClick={(e) => hundleLogIn(e)} >Log In</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login