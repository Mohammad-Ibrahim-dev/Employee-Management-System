import React, { createContext, useState } from 'react'
export const UserProvider=createContext();
function UserContext({children}) {
  const [UsersList, setUsersList] = useState('')
  const [Usertasks, setUsertasks] = useState('')
  const [selectedUser, setselectedUser] = useState('')
  return (
    <>
    <UserProvider.Provider value={{UsersList,setUsersList, setselectedUser,Usertasks,setUsertasks,selectedUser}}>
    {
        children
    }
    </UserProvider.Provider>
    </>
  )
}

export default UserContext