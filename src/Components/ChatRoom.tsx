import axios from "axios";
import { useEffect, useState } from "react";
import { baseurl } from "./Context";
import { useLocation } from "react-router-dom";
import { useSocket } from "./useSocket";
import { Chats } from "./Chats";

export const ChatRoom = () => {
  const [username,setUser]=useState('')
  const [messages,setMessages]=useState<any>([])
  const [data, setData] = useState<any>(null);
  const location=useLocation()
  const ws=useSocket()
  const roomId=location.state.roomId
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
  useEffect(()=>{
    if(ws){
      ws.onmessage = (event:any)=>{
        console.log(event)
        const newmessage=JSON.parse(event.data)
        if (newmessage.type==="message"){
          setMessages((oldmessages:any)=>[...oldmessages,{user:newmessage.payload.user,message:newmessage.payload.message}])
        }
      }
    }
  },[ws])

  async function getUser(){
    const response=await axios.get(`${baseurl}/userdata`,{
      headers:{
        "token":localStorage.getItem("token")
      }
    })

    if (response.data){
      setUser(response.data.username)
    }
    
  }
  useEffect(() => {
    getUser()
    getRoomData();
  }, []);

  return (
    <>
    <div className="flex flex-col justify-center items-center w-screen">

      {data && (
        <div className="flex flex-col items-center">
          <div className="font-bold font-mono text-2xl " >{data.roomName}</div>

          <div   className="max-h-[500px] w-screen  overflow-auto p-10">
          {messages.map((chat:any,index:any)=>{
            return(
              <div key={index}>
              <div className="border-black border-b-2 p-5 "><span className="font-bold font-mono">{chat.user} :</span> <span>{chat.message}</span></div>
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
