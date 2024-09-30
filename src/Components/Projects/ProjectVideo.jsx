import React from "react";
import swiggy from "../../Images/Foodify.png";

const ProjectVideo = ({ setSlide }) => {
  return (
    <div>
      <img src={swiggy}></img>
      <div className="absolute right-5 top-[48%] font-bold text-4xl bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] px-4 pt-2 pb-3 pr-3 rounded-full text-white animate-bounce cursor-pointer"
      onClick={() => setSlide()}>
        ↬
      </div>
    </div>
  );
};

export default ProjectVideo;
