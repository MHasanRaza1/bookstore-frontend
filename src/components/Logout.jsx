import React from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast'

const Logout = () => {
   const [authUser, setAuthUser] = useAuth() 
   const handleLogout = ()=>{
    try{
        setAuthUser({
            ...authUser,
            user:null
        })
        localStorage.removeItem("user");
        toast.success("Logout Successfully")
        window.location.reload();   
    }catch(err){
        console.log(err)
        toast.error("Error",err)
    }
   }
  return (
    <div>
        <button 
        onClick={handleLogout}
        className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer'>Logout</button>
    </div>
  )
}

export default Logout