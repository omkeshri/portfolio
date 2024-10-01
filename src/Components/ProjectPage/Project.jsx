import React, { useState } from "react";
import ProjectInfo from "./ProjectInfo";
import { projectParameters } from "../../Utils/constants";
import ProjectList from "./ProjectList";

const Project = () => {
  const [showInfo, setShowInfo] = useState(0);

  return (  
    <div className="min-h-screen">
      <ProjectList showInfo={showInfo} setShowInfo={setShowInfo} />

      {showInfo === 1 && (
        <ProjectInfo
          showInfo={showInfo}
          setShowInfo={() => setShowInfo(0)}
          parameters={projectParameters[showInfo]}
        />
      )}

      {showInfo === 2 && (
        <ProjectInfo
          showInfo={showInfo}
          setShowInfo={() => setShowInfo(0)}
          parameters={projectParameters[showInfo]}
        />
      )}

      {showInfo === 3 && (
        <ProjectInfo
          showInfo={showInfo}
          setShowInfo={() => setShowInfo(0)}
          parameters={projectParameters[1]}
        />
      )}

      {showInfo === 4 && (
        <ProjectInfo
          showInfo={showInfo}
          setShowInfo={() => setShowInfo(0)}
          parameters={projectParameters[1]}
        />
      )}

      {showInfo === 5 && (
        <ProjectInfo
          showInfo={showInfo}
          setShowInfo={() => setShowInfo(0)}
          parameters={projectParameters[showInfo]}
        />
      )}

      {showInfo === 6 && (
        <ProjectInfo
          showInfo={showInfo}
          setShowInfo={() => setShowInfo(0)}
          parameters={projectParameters[showInfo]}
        />
      )}

      {showInfo === 7 && (
        <ProjectInfo
          showInfo={showInfo}
          setShowInfo={() => setShowInfo(0)}
          parameters={projectParameters[showInfo]}
        />
      )}

      {showInfo === 8 && (
        <ProjectInfo
          showInfo={showInfo}
          setShowInfo={() => setShowInfo(0)}
          parameters={projectParameters[showInfo]}
        />
      )}

      {showInfo === 9 && (
        <ProjectInfo
          showInfo={showInfo}
          setShowInfo={() => setShowInfo(0)}
          parameters={projectParameters[showInfo]}
        />
      )}
    </div>
  );
};

export default Project;
