import axios from "axios";
import { useEffect, useState } from "react";
import { baseurl } from "./Context";
import { RoomCard } from "./RoomCard";

export const RoomAvailable = () => {
  const [rooms, setRooms] = useState([]);
  async function getRooms() {
    const response = await axios.get(`${baseurl}/available`, {
      headers: {
        token: localStorage.getItem("token"),
      },
    });
    console.log(response.data);
    setRooms(response.data);
  }
  useEffect(() => {
    getRooms();
  }, []);

  return (
    <>
      <div>
        <div className="font-bold text-center">Rooms</div>

        <div className="grid  lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 gap-4 place-items-center">
          <RoomCard data={rooms} />
        </div>
      </div>
    </>
  );
};
