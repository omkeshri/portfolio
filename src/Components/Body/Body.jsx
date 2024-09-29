import React from "react";
import InfoContainer from "./InfoContainer";
import pic from "../../Images/WhoWeAre.jpg";
import { motion } from "framer-motion";
import About from "../About/About";

const Body = () => {
  return (
    <div className="flex flex-col items-center sm:pt-0 pt-20">
      <div className="w-full px-5 sm:px-20 md:px-0 md:w-[800px] flex lg:flex-row flex-col h-screen justify-center items-center gap-8">
        <motion.div className="w-[245px] rounded-full h-60"
          initial={{x:'-10vw', opacity:0}}
          whileInView={{x:0, opacity: 1}}
          transition={{duration: 0.6}}
        >
          <img className="rounded-full w-full h-full" src={pic}></img>
        </motion.div>
        <motion.div className="">
          <InfoContainer />
        </motion.div>
      </div>
      <About />
    </div>
  );
};

export default Body;
