import { useNavigate } from "react-router-dom"
import { useSocket } from "./useSocket"
import { useRef } from "react"

export const JoinRoom = () => {
    const roomId = useRef<HTMLInputElement | null>(null)
    const ws = useSocket()
    const navigate = useNavigate()
    function handleClick() {
        if (ws && roomId.current) {
            ws.send(JSON.stringify({
                'type': 'join',
                'payload': {
                    'roomId': `${roomId.current?.value}`
                }
            }))
        }
        navigate('/chatroom', {
            state: {
                roomId: roomId.current?.value
            }
        })

    }
    return (
            <div className="flex justify-center align-center  items-center h-3/4">
                <div className=" flex w-screen items-center justify-center" >

                    <input className=" border-black border-2 m-2 p-2 w-1/4" type="text" placeholder="enter room code" ref={roomId} />
                    <button className=" text-white bg-[#292F36] py-2 px-4  hover:bg-[#414244]" onClick={handleClick}>Join</button>

                </div>
            
            </div>

   )
}