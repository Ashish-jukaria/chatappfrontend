import { useRef } from "react"
import { useAuth } from "./useAuth"

export const Login=()=>{

    const auth=useAuth()
    const username=useRef<HTMLInputElement>(null)
    const password=useRef<HTMLInputElement>(null)
    async function handleClick(){
        if(username.current &&  password.current){
        auth?.Login({
            username:username.current?.value,
            password:password.current?.value
        })
    }
    }

    return (
        <>
        <div className="flex flex-col justify-center align-middle items-center h-2/3">
        <input ref={username} type='text' placeholder="username" className="m-2 border-black border-2 w-1/4 p-2"/>
        <input ref={password} type='password' placeholder="password"  className="m-2 border-black border-2 w-1/4 p-2"/>
        <button className="m-2 bg-[#292F36] text-white w-1/4 py-2 hover:bg-[#414244]" onClick={handleClick}>Login</button>
        </div>
        </>
    )
}