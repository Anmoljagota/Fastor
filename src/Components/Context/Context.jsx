import React, { useState } from 'react'
import { createContext } from 'react'
export const  Mycontext=createContext();
function Context  (props)  {
let newdata={
    search:""
}
    const [Token,setToken]=useState("")
    const [search,setSearch]=useState("")
  
    
    const Opendrawer=(data)=>{

    }
  return (
   <Mycontext.Provider value={{Token,setToken}}>
    {props.children}
   </Mycontext.Provider>
  )
}

export default Context
