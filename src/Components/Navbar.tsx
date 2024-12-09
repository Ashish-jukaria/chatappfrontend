import { Link } from "react-router-dom";
import { useAuth } from "./useAuth";
import { motion } from "motion/react";

export const Navbar = () => {
  const auth = useAuth();
  return (
      <motion.div
     
       
        className="flex justify-center mx-60 bg-[F7FFF7] rounded-xl text-[#292F36] p-3 cursor-pointer "
      >
        <div className="mx-2 p-1 hover:bg-[#292F36] hover:text-white">
          <Link to="/">Home</Link>
        </div>
       

        {auth && !auth.token && (
          <div className="mx-2 p-1 hover:bg-[#292F36] hover:text-white">
            <Link to="/register">Register</Link>
          </div>
        )}
        {auth && auth.token && (
          <div className="mx-2 p-1 hover:bg-[#292F36] hover:text-white">
            <Link to="/dashboard">Dashboard</Link>
          </div>
        )}

        {auth && auth.token && (
          <div className="mx-2 p-1 hover:bg-[#292F36] hover:text-white">
            <Link to="/createroom">Create Room</Link>
          </div>
        )}

        {auth && auth.token && (
          <div className="mx-2 p-1 hover:bg-[#292F36] hover:text-white">
            <Link to="/yourroom">Your Rooms</Link>
          </div>
        )}

        {auth && auth.token && (
          <div className="mx-2 p-1 hover:bg-[#292F36] hover:text-white">
            <Link to="/joinrooms">Join Rooms</Link>
          </div>
        )}

{auth && !auth.token ? (
          <div className="mx-2 p-1 hover:bg-[#292F36] hover:text-white">
            <Link to="/login">Login</Link>
          </div>
        ) : (
          <div
            className="mx-2 p-1 hover:bg-[#292F36] hover:text-white"
            onClick={() => auth?.Logout()}
          >
            Logout
          </div>
        )}
      </motion.div>
  );
};
