import { RoomAvailable } from "./RoomsAvailable"

export const Dashboard =()=>{
   
    return (
        <>
        <div className="flex flex-col items-center justify-center ">
        <div className="font-mono font-bold text-2xl m-3">Welcome to Dashboard</div>
        <RoomAvailable/>

        </div>

      </>
    )
}