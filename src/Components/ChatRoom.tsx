import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { baseurl } from "./Context";
import { useLocation } from "react-router-dom";
import { useSocket } from "./useSocket";
import { Chats } from "./Chats";

export const ChatRoom = () => {
  const scrollref = useRef<HTMLInputElement | null>(null)
  const [username, setUser] = useState('')
  const [messages, setMessages] = useState<any>([])
  const [data, setData] = useState<any>(null);
  const location = useLocation()
  const ws = useSocket()
  const roomId = location.state.roomId
  async function getRoomData() {
    const response = await axios.get(`${baseurl}/roomdata/${roomId}`, {
      headers: {
        token: localStorage.getItem("token"),
      },
    });
    console.log(response.data)
    setData(response.data);
    setMessages(response.data.chats)

  }
  useEffect(() => {
    if (ws) {
      ws.onmessage = (event: any) => {
        const newmessage = JSON.parse(event.data)
        if (newmessage.type === "message") {
          setMessages((oldmessages: any) => [...oldmessages, { user: newmessage.payload.user, message: newmessage.payload.message }])
        }
      }
    }
  }, [ws])

  useEffect(() => {
    if (scrollref.current) {
      scrollref.current.scrollTop = (scrollref.current.scrollHeight - scrollref.current.clientHeight)

    }
  }, [messages])

  async function getUser() {
    const response = await axios.get(`${baseurl}/userdata`, {
      headers: {
        "token": localStorage.getItem("token")
      }
    })

    if (response.data) {
      setUser(response.data.username)
    }

  }
  useEffect(() => {
    getUser()
    getRoomData();
  }, []);

  return (
    <>
      <div className="flex flex-col justify-center items-center w-full overflow-hidden ">

        {data && (
          <div className="flex flex-col items-center w-full  ">
            <div className="font-bold font-mono text-2xl " >{data.roomName}</div>

            <div className="font-mono">
              {data.roomId}
            </div>
            <div className="bg-[#292F36] text-[10px] text-white py-2 px-4 hover:bg-[#414244] ">
              <button onClick={() => { navigator.clipboard.writeText(data.roomId) }}>Copy Code</button>
            </div>

            <div className="h-[500px] w-1/2  overflow-y-scroll p-10 no-scrollbar shadow-lg shadow-black m-3 bg-white " ref={scrollref}>
              {messages.map((chat: any, index: any) => {
                return (
                  <div  key={index}>
                    {username !== chat.user ? <div className=" p-1 overflow-wrap break-words"><span className="font-bold font-mono">{chat.user} :</span> <span>{chat.message}</span></div> : <div className=" p-1 overflow-wrap break-words text-end bg-gray-300"><span>{chat.message}</span> </div>}
                  </div>
                )
              })}
            </div>

            <div>
              <Chats username={username} roomId={roomId} />
            </div>
          </div>
        )}
      </div>

    </>
  );
};
