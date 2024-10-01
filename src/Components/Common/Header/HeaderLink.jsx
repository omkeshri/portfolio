import React from "react";
import { motion } from "framer-motion";
import { headerLinkVariants } from "../../../Utils/motionVariants";

const HeaderLink = ({ Icon }) => {
  return (
    <div>
      <motion.div
        className="bg-[#334155] p-3 rounded-full cursor-pointer text-white"
        variants={headerLinkVariants}
        whileHover="hover"
      >
        <Icon className="scale-105" />
      </motion.div>
    </div>
  );
};

export default HeaderLink;
