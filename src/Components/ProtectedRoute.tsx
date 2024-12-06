import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "./useAuth"

export const ProtectedRoute=()=>{
    const auth=useAuth()
    if (auth && auth.token){
        console.log(auth.token)
        return <Outlet/>        
    }
    else{
        console.log('hello')
        return <Navigate to="/login"/>;
    }

}