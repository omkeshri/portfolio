import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const SocialDashboardInfo = ({ setShowInfo }) => {
  return (
    <div className="cursor-pointer h-screen w-[80%]">
      <AnimatePresence mode="wait">
        <motion.div
          key="modal"
          className="fixed top-0 left-0 h-full w-full flex justify-center items-center"
          initial={{ y: "-100vh" }}
          animate={{ y: 0 }}
          exit={{ y: "-100vh" }}
          transition={{ type: "spring", stiffness: 120, duration: 0.6 }}
        >
          <div
            className="w-[80%] h-[80%] bg-white"
            onClick={() => setShowInfo()}
          >
            sdf
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default SocialDashboardInfo;
