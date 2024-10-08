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

      <button id="btn">{name}</button>
    </motion.div>
  );
};

export default Button;
