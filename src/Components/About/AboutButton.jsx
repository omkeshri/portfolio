import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { buttonVariants } from "../../Utils/motionVariants";

const AboutButton = ({ name, delay }) => {
  return (
    <motion.div
      variants={buttonVariants}
      initial="hidden"
      whileInView="visible"
      transition={{ delay: delay }}
    >
      <button className="about-button">{name}</button>
    </motion.div>
  );
};

export default AboutButton;
