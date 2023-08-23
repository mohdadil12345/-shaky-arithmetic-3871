import React, { createContext, useState } from 'react'

export const authval = createContext()

const initialData = {
  isAuth : false,
  email : "",
  password  : ""
}

function ContextProvider({children}) {

  const [state, setstate] = useState(initialData)

const login = (email, password)=> {
  setstate({
    isAuth : true,
    email : email,
    password  : password
  })
}

const logout = ()=> {
  setstate({
    isAuth : false,
    email : "",
    password  : ""
  })
}

  return (
   <authval.Provider value = {{state, login, logout}}>
    {children}
   </authval.Provider>
  )
}

export default ContextProvider