import { useRef } from "react"
import { useSocket } from "./useSocket"
import axios from "axios"
import { baseurl } from "./Context"

export const Chats=({roomId,username}:any)=>{
    const message=useRef<HTMLInputElement|null>(null)
    const ws=useSocket()
    async function handleKey(event:any){
        if(event.key=='Enter'){
        if(ws && message.current){
            ws.send(JSON.stringify({
                type:"chat",
                payload:{
                    "roomId":roomId,
                    "user":username,
                    "message":`${message.current.value}`
                }
            }))
        }
        if (message.current){
        await axios.post(`${baseurl}/message`,{"roomId":roomId,
            "message":message.current?.value
        },{
            headers:{
                "token":localStorage.getItem("token")
            }
        })

    }
    if (message.current) {
        message.current.value = '';
      }
}
    }
    async function handleClick(){
        if(ws && message.current){
            ws.send(JSON.stringify({
                type:"chat",
                payload:{
                    "roomId":roomId,
                    "user":username,
                    "message":`${message.current.value}`
                }
            }))
        }
        if (message.current){
        await axios.post(`${baseurl}/message`,{"roomId":roomId,
            "message":message.current?.value
        },{
            headers:{
                "token":localStorage.getItem("token")
            }
        })

    }
    if (message.current) {
        message.current.value = "";
      }
    }
    return(
        <>
        <div className="flex w-screen items-center justify-center">
        <input className="border-black border-2 m-2 w-1/4 p-2 " type="text" onKeyDown={handleKey} placeholder="message" ref={message} />
        <button className="bg-[#292F36] py-2 px-4 hover:bg-[#414244] text-white" onClick={handleClick}>Send</button>
        </div>

        </>
    )
}