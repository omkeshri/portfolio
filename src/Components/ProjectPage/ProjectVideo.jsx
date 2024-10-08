import React from "react";


const ProjectVideo = ({ setSlide, vidSrc }) => {
  return (
    <div className="relative w-full h-full">
      <video src={vidSrc} autoPlay loop ></video>
      <div className="absolute right-5 top-[48%] md:font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] px-4 pt-2 pb-3 pr-3 rounded-full text-white animate-bounce cursor-pointer"
      onClick={() => setSlide()}>
        ↬
      </div>
    </div>
  );
};

export default ProjectVideo;
