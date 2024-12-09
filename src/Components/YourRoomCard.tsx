export const YourRoomCard = ({ room }: any) => {
  const room_detail = room.map((rm: any, index: any) => {
    function handleCopy(roomId: any) {
      navigator.clipboard.writeText(roomId);
    }
    return (
      <div  key={index} className="flex flex-col items-center p-4 border-black border-2 hover:shadow-lg hover:shadow-black cursor-pointer">
        <div className="text-xl font-bold">{rm.roomName}</div>
        <div className="font-bold">{rm.private?"Private":"Public"}</div>

        <div className="font-mono">{rm.roomId}</div>
        <button className="bg-blue-600 py-1 px-4 hover:bg-blue-500" onClick={() => handleCopy(rm.roomId)}>Copy Code</button>
      </div>
    );
  });

  return <>{room_detail}</>;
};
