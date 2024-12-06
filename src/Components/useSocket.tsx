import { useContext } from "react"
import { WebSocketContext } from "./WebSocketProvider"

export const useSocket=()=>{
    return useContext(WebSocketContext)
}