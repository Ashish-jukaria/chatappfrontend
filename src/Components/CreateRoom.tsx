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
        }
        navigate('/dashboard')
    }
    return <>
        <div className="flex flex-col justify-center items-center h-1/2">
            <div>

                <input maxLength={30} className="border-black border-2 m-2 p-2" type='text' placeholder="enter room Name" ref={roomname} />
                <button className="bg-blue-700 p-2 text-white hover:bg-blue-600" onClick={handleClick}>Make Room</button>


            </div>
            <div>
                <input className="scale-x-150 px-4 mx-4" type="checkbox" onChange={() => setToggle(!toggle)} />
                <label>Private Room</label>
            </div>

            <div className="m-2 font-mono">
                Go to Your Rooms to get Room Code For Your Private Rooms 

                <br />
                Private Rooms are only accessible by Room Code
            </div>

        </div>

    </>
}