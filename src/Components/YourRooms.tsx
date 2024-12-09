import axios from "axios"
import { useEffect, useState } from "react"
import { baseurl } from "./Context"
import { YourRoomCard } from "./YourRoomCard"

export const YourRooms =()=>{
    const [room,setRoom]=useState([])


    async function getrooms(){
        const response_username=await axios.get(`${baseurl}/myroom`,{
            headers:{
                "token":localStorage.getItem("token")
            }
        })
        console.log(response_username.data)
        setRoom(response_username.data)
    }

    useEffect(()=>{
        getrooms()
        
    },[])

    return(
        <>
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 p-10 gap-10 items-center">
        <YourRoomCard room={room} />


        </div>
        </>
    )
}