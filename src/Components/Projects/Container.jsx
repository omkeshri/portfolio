import React from 'react'
import { AnimatePresence, motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from "../../Utils/constants";

const Container = ({ showInfo, setShowInfo }) => {
    const handleShowInfo = () => {
        setShowInfo();
      };
  return (
    <div>
        <AnimatePresence mode="wait">
        {!showInfo && (
          <motion.div
            key="project-cards"
            className="pt-32 pb-20 justify-between  gap-y-20 flex flex-wrap px-28 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            {projects.map((project) => (
              <ProjectCard
                setShowInfo={handleShowInfo}
                key={project.id}
                title={project.title}
                subtitle={project.subtitle}
                languages={project.languages}
                languages2={project.languages2}
                imgSrc={project.imgSrc}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Container