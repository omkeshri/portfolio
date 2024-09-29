import React, { useState } from "react";
import SocialDashboardInfo from "./SocialDashboardInfo";
import Container from "./Container";

const Projects = () => {
  const [showInfo, setShowInfo] = useState(0);

  return (
    <div className="min-h-screen">
      <Container showInfo={showInfo} setShowInfo={() => setShowInfo(1)} />

      <SocialDashboardInfo
        showInfo={showInfo}
        setShowInfo={() => setShowInfo(0)}
      />



    </div>
  );
};

export default Projects;
