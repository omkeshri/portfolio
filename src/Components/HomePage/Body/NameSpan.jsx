import React from "react";
import { motion } from "framer-motion";
import { nameSpanVariants } from "../../../Utils/motionVariants";

const NameSpan = ({ char, delay }) => {
  return (
    <motion.span
      variants={nameSpanVariants}
      initial="hidden"
      whileInView="visible"
      transition={{ delay: delay }}
    >
      {char}
    </motion.span>
  );
};

export default NameSpan;
