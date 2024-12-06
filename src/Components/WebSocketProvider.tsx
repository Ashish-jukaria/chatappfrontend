import { createContext } from "react"
import { socketurl } from "./Context"
export const WebSocketContext = createContext<any>(null)
export const WebSocketProvider=({children}:any)=>{
    const ws = new WebSocket(`${socketurl}`)

    return (
        <WebSocketContext.Provider value={ws}>
          {children}
        </WebSocketContext.Provider>
    )

}
