import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import sd from "../../Images/SocialDashboard.png";
import ProjectCard from "./ProjectCard";
import SocialDashboardInfo from "./SocialDashboardInfo";
import { projects } from "../../Utils/constants";

const Projects = () => {
  const [showInfo, setShowInfo] = useState(0);
  const handleShowInfo = () => {
    setShowInfo(1);
  };
  return (
    <div className="min-h-screen">
      <AnimatePresence mode="wait">
        {!showInfo && (
          <motion.div
            key="project-cards"
            className="pt-32 pb-20 justify-between  gap-y-20 flex flex-wrap px-28 text-white"
            initial={{ x: '-100vw' }}
            animate={{ x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            {projects.map((project) => (
              <ProjectCard
                setShowInfo={handleShowInfo}
                key={project.id}
                title={project.title}
                title2= {project.title2}
                subtitle={project.subtitle}
                languages={project.languages}
                languages2={project.languages2}
                imgSrc={project.imgSrc}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {showInfo && <SocialDashboardInfo setShowInfo={() => setShowInfo(0)} />}
    </div>
  );
};

export default Projects;
