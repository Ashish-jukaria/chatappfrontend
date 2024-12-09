import { useNavigate } from "react-router-dom"
import { useSocket } from "./useSocket"
import { motion } from "motion/react"

export const RoomCard = ({ data }: any) => {
  const ws = useSocket()
  const navigate = useNavigate()
  function handleClick(id: any) {
    if (ws) {
      ws.send(JSON.stringify({
        'type': 'join',
        'payload': {
          'roomId': `${id}`
        }
      }))
    }
    navigate('/chatroom', {
      state: {
        roomId: id
      }
    })

  }
  const room_detail: any = data.map((room: any) => {
    return <motion.div initial={{
      opacity:0, 
      scale:0
    }} animate={{
      opacity:1,
      scale:1,
      transition:{
        duration:1
      }
    }} className=" flex flex-col p-5 text-center m-10 w-full border-2 border-black h-3/4 items-center cursor-pointer shadow-md shadow-black" key={room._id}>

      <div>
        <span className="block text-center justify-center text-xl font-bold p-2 overflow-wrap break-words text-[#EF8354] uppercase"> {room.roomName}</span>
      </div>
      <div className="font-mono ">
        {room.roomId}
      </div>
      <div className="bg-[#292F36] p-2 text-[10px] text-white items-center py-2 m-2 hover:bg-[#414244]">
        <button onClick={() => { navigator.clipboard.writeText(room.roomId) }}>Copy Code</button>

      </div>

      <button className="bg-[#292F36] py-2 px-4 m-2 font-bold text-xl text-white hover:bg-[#414244]" onClick={() => { handleClick(room.roomId) }}>JOIN</button>
    </motion.div>

  })
  return (
    <>
      {room_detail}
    </>
  )
}