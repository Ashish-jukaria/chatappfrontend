import { useSocket } from "./useSocket";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";

export const YourRoomCard = ({ room }: any) => {
  const ws = useSocket();
  const navigate = useNavigate();
  const room_detail = room.map((rm: any, index: any) => {
    function handleClick(roomId:any) {
      if (ws) {
        ws.send(
          JSON.stringify({
            type: "join",
            payload: {
              roomId: roomId,
            },
          })
        );
      }
      navigate("/chatroom", {
        state: {
          roomId: roomId,
        },
      });
    }
    function handleCopy(roomId: any) {
      navigator.clipboard.writeText(roomId);
    }
    return (
      <motion.div
      initial={{
        opacity:0,
        scale:0
      }}
      animate={{
        opacity:1,
        scale:1,
        transition:{
          duration:1
        }
      }}
        key={index}
        className="flex flex-col items-center p-4 border-black border-2 shadow-md shadow-black cursor-pointer"
      >
        <div className="text-xl font-bold text-[#EF8354] p-2">{rm.roomName}</div>
        {
          rm.private? <div className="font-bold bg-red-900 p-2 text-white">Private</div>:<div className="font-bold bg-green-900 text-white p-2">Public</div>


        }

        <div className="font-mono">{rm.roomId}</div>
        <div>
          <button
            className="bg-[#292F36] p-2 text-[10px] m-2 hover:bg-[#414244] text-white"
            onClick={() => handleCopy(rm.roomId)}
          >
            Copy Code
          </button>
        </div>
        <div >
          <button
            className="bg-[#292F36] p-2 font-bold text-lg hover:bg-[#414244] text-white"
            onClick={() => handleClick(rm.roomId)}
          >
            Join Room
          </button>
        </div>
      </motion.div>
    );
  });

  return <>{room_detail}</>;
};
