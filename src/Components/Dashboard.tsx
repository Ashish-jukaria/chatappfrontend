import { useEffect, useState } from "react"
import { RoomAvailable } from "./RoomsAvailable"
import { useSocket } from "./useSocket"

export const Dashboard =()=>{
    const [loading,setLoading]=useState(true)
    const ws=useSocket()
    useEffect(
        ()=>{
            if(ws){
                setLoading(false)
            }
        }
    ,[ws])
    return (
        <>
        <div className="flex flex-col items-center justify-center ">
        <div className="font-mono font-bold text-2xl m-3">Welcome to Dashboard</div>
        {loading && <div>Loading Rooms</div>}
        {!loading && <RoomAvailable/>}

        </div>

      </>
    )
}