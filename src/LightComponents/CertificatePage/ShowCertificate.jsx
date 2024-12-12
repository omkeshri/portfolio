import React, { useState } from "react";
import gfg from "../../Images/gfg.png";
import dsa from "../../Images/dsa.png";
import dp from "../../Images/dp.png";
import frontend from "../../Images/frontend.png";
import backend from "../../Images/Backend.png";
import genai from "../../Images/genai.png";
import llm from "../../Images/llm.png";
import genaillm from "../../Images/genaillm.png";
import network from "../../Images/network.png";
import nptelCloud from "../../Images/nptelCloud.png";
import { motion } from "framer-motion";

const ShowCertificate = ({ name, showItems, setShowIndex, imgSrc }) => {
  const handleShowCertificate = () => {
    setShowIndex();
  };

  const images = {
    gfg,
    nptelCloud,
    dsa,
    dp,
    frontend,
    backend,
    genai,
    llm,
    genaillm,
    network,
  };

  return (
    <div className="w-full flex items-center flex-col">
      <div
        className="w-full flex justify-between cursor-pointer bg-[#f9fafb] shadow-md text-black py-[0.65rem] px-4 rounded-lg font-medium"
        onClick={handleShowCertificate}
      >
        <p>{name}</p>
        {showItems ? <p>🔺</p> : <p>🔻</p>}
      </div>
      {showItems && (
        <motion.img
          className="w-[98%] xl:h-[40rem] rounded-b-lg -rounded-t-lg border border-t-0 border-gray-400 rounded-md shadow-md"
          src={images[imgSrc]}
          initial={{ opacity: 0, y: "-100vh" }}
          animate={{ opacity: 1, y: 0 }}
        ></motion.img>
      )}
    </div>
  );
};

export default ShowCertificate;
