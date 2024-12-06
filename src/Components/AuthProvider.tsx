import axios from "axios"
import { createContext, useState } from "react"
import { baseurl } from "./Context"
import { useNavigate } from "react-router-dom"

interface AuthContextType {
    token: string | null;
    Login: (data: { username: string; password: string }) => Promise<void>;
    Logout: () => void;
  }
export const AuthContext = createContext<AuthContextType|null>(null)



export const AuthContextProvider=({ children }:any)=>{
    

    const [token,setToken]=useState(localStorage.getItem("token")||null)
    const navigate=useNavigate()
    const Login=async(data:{
        username:string,
        password:string
    })=>{
        if (data){
            const response=await axios.post(`${baseurl}/login`,data)
            if (response.status==200){
            localStorage.setItem("token",response.data)
            setToken(response.data)
            navigate('/dashboard')
            }
        }

    }
    const Logout =()=>{
        localStorage.setItem("token",'')
        setToken(null)
        navigate('/login')
    }

    return(
        <AuthContext.Provider value={{Login,Logout,token}}>
            {children}
        </AuthContext.Provider>
    )

}

