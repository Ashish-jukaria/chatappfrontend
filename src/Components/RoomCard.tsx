import { useNavigate } from "react-router-dom"
import { useSocket } from "./useSocket"

export const RoomCard =({data}:any)=>{  
  const ws=useSocket()
  const navigate=useNavigate()
  function handleClick(id:any){
    if(ws){
        ws.send(JSON.stringify({
          'type':'join',
          'payload':{
            'roomId':`${id}`
          }
        }))
      }
        navigate('/chatroom',{state:{
          roomId:id
        }})

  } 
    const room_detail:any=data.map((room:any)=>{
        return <div className=" p-5 text-center m-10 w-full border-2 border-black h-3/4 " key={room._id}>
          
           <div>
              <span className="block text-center justify-center text-xl font-bold p-2 overflow-wrap break-words"> {room.roomName}</span>
           </div>
          
   
           <button className="bg-blue-700 py-2 px-4 m-2 text-white hover:bg-blue-600" onClick={()=>{handleClick(room.roomId)}}>Join</button>
       </div>
   
       })
  return (
    <>
    {room_detail}
    </>
  )
}