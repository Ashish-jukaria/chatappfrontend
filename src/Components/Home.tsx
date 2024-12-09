import { motion } from "motion/react"

export const Home = () => {
    return (
      <>
        <motion.div initial={{
          opacity:0,
          scale:0,
          
        }} animate={{
          opacity:1,
          scale:1,
          transition:{
            duration:2
          }
          
        }} className="flex flex-col justify-center items-center text-center my-20 font-mono 
                        lg:text-8xl md:text-6xl sm:text-4xl text-3xl text-[#292F36]">
          <div><span className="text-[#EF8354]">Connect instantly, chat effortlessly </span> –your conversations, simplified.</div>
        </motion.div>
      </>
    );
  };
  