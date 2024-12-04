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
      <button id="btn" className="text-black border-2 border-[#3b4bf6] font-medium px-[12px] py-[2px]">{name}</button>
    </motion.div>
  );
};

export default Button;
