import { Link } from "react-router-dom"
import { useAuth } from "./useAuth"

export const Navbar =()=>{
    const auth=useAuth()
    return(
        <>
        <div className="flex justify-center mx-60 bg-white rounded-xl text-black p-3 cursor-pointer ">
            <div className="mx-2 p-1 hover:bg-black hover:text-white">
                <Link to='/'>Home</Link>
            </div>
            {auth && !auth.token ?<div className="mx-2 p-1 hover:bg-black hover:text-white">
                <Link to='/login'>Login</Link>
            </div>:
            <div className="mx-2 p-1 hover:bg-black hover:text-white" onClick={()=>auth?.Logout()}>Logout</div>
            
        }
            
            {auth && !auth.token && <div className="mx-2 p-1 hover:bg-black hover:text-white">
                <Link to='/register'>Register</Link>
            </div>}
            {auth && auth.token && <div className="mx-2 p-1 hover:bg-black hover:text-white">
                <Link to='/dashboard'>Dashboard</Link>
            </div>}
            
            {auth && auth.token && <div  className="mx-2 p-1 hover:bg-black hover:text-white">
                <Link to='/createroom'>Create Room</Link>
</div>}

{auth && auth.token && <div  className="mx-2 p-1 hover:bg-black hover:text-white">
                <Link to='/yourroom'>Your Rooms</Link>
</div>}

{auth && auth.token && <div  className="mx-2 p-1 hover:bg-black hover:text-white">
                <Link to='/joinrooms'>Join Rooms</Link>
</div>}


        </div>
        
        </>
    )
}