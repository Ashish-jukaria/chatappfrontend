import { createContext, useEffect, useState } from "react"
import { socketurl } from "./Context"
import { useAuth } from "./useAuth"
export const WebSocketContext = createContext<any>(null)
export const WebSocketProvider=({children}:any)=>{
    const [socket,setSocket]=useState<WebSocket|null>(null)
    const auth=useAuth()
    useEffect(()=>{
        if(auth?.token){
            const ws = new WebSocket(`${socketurl}`)
          
            setTimeout(()=>{setSocket(ws)},5000)
              
            
        }
    },[])
    return (
        <WebSocketContext.Provider value={socket}>
          {children}
        </WebSocketContext.Provider>
    )

}
