import React from "react";
import { delay, motion } from "framer-motion";
import { buttonVariants } from "../../../Utils/motionVariants";

const Button = ({name, delay}) => {
  return (
    <motion.div
    variants={buttonVariants}
    initial="hidden"
    whileInView="visible"
    transition={{delay: delay}}
    >

      <button id="btn" className="text-[#ffffff58] border border-[#3b82f6] py-[3px] px-[15px] font-[400]">{name}</button>
    </motion.div>
  );
};

export default Button;
