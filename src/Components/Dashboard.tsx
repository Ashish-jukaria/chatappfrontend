import { RoomAvailable } from "./RoomsAvailable"

export const Dashboard =()=>{
   
    return (
        <>
        <div className="flex flex-col items-center overflow-y-scroll justify-center no-scrollbar">
        <div className="font-mono font-bold text-2xl m-3">Welcome to <span className="text-[#EF8354]">Dashboard</span></div>
        <RoomAvailable/>

        </div>

      </>
    )
}