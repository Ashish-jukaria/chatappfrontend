import { useRef, useState } from "react"
import { useSocket } from "./useSocket"
import axios from "axios"
import { baseurl } from "./Context"
import { useNavigate } from "react-router-dom"

export const CreateRoom = () => {
    const [toggle, setToggle] = useState(false)
    const navigate = useNavigate()
    const ws = useSocket()
    const roomname = useRef<HTMLInputElement | null>(null)
    async function handleClick() {
    
        if (roomname.current) {
            const response = await axios.post(`${baseurl}/createroom`, { "roomName": roomname.current.value, "private": toggle }, {
                headers: {
                    "token": localStorage.getItem("token")
                }

            })

            if (ws && response.data) {

                ws.send(JSON.stringify({
                    "type": "join",
                    "payload": {
                        "roomId": `${response.data}`
                    }

                }))
            }
            navigate('/chatroom', {
                state: {
                    roomId: response.data
                }
            })
        }


    }
    return <>
        <div className="flex flex-col justify-center items-center h-3/4 w-screen">
            <div className=" flex items-center justify-center w-screen">

                <input maxLength={30} className="border-black border-2 m-2 p-2 w-1/4" type='text' placeholder="enter room Name" ref={roomname} />
                <button className="bg-[#292F36] p-2 text-white hover:bg-[#414244]" onClick={handleClick}>Make Room</button>


            </div>
            <div>
                <input className="scale-x-150 px-4 mx-4 accent-[#EF8354]" type="checkbox" onChange={() => setToggle(!toggle)} />
                <label className="font-mono font-bold">Private Room</label>
            </div>

            <div className="m-2 font-mono text-red-500">
                Private Rooms are only accessible by Room Code!
            </div>

        </div>

    </>
}