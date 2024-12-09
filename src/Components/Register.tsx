import axios from "axios"
import { useRef } from "react"
import { baseurl } from "./Context"
import { useNavigate } from "react-router-dom"

export const Register=()=>{
    const username=useRef<HTMLInputElement>(null)
    const password=useRef<HTMLInputElement>(null)
    const navigate=useNavigate()
    async function handleClick(){
        if (username.current && password.current){
            const response=await axios.post(`${baseurl}/register`,{
                username:username.current.value,
                password:password.current.value
            })

            if (response.status==200){
                navigate('/login')
            }
            else{
                alert('error registering user')
            }
        }
    }

    return (
        <>
        <div className="flex flex-col justify-center align-middle items-center h-2/3" >
        <input ref={username} type='text' placeholder="username" className="m-2 border-black border-2 w-1/4 p-2"/>
        <input ref={password} type='password' placeholder="password" className="m-2 border-black border-2 w-1/4 p-2"/>
        <button onClick={handleClick}className="m-2 bg-[#292F36] text-white w-1/4 py-2 hover:bg-[#414244]">Register</button>
        </div>
        </>
    )
}