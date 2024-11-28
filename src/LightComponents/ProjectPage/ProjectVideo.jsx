import React from "react";


const ProjectVideo = ({ vidSrc }) => {
  return (
    <div className="relative w-full h-full">
      <video src={vidSrc} autoPlay loop ></video>
      
    </div>
  );
};

export default ProjectVideo;
