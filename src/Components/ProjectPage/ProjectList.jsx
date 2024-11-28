import React from 'react'
import { AnimatePresence, motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from "../../Utils/constants";

const ProjectList = ({ showInfo, setShowInfo }) => {
  
  return (
    <div>
        <AnimatePresence mode="wait">
        {!showInfo && (
          <motion.div
            key="project-cards"
            className="pt-32 pb-20  gap-y-20 flex sm:flex-row flex-col items-center sm:items-start sm:flex-wrap gap-16 sm:px-10 md:px-28 lg:px-16 xl:px-28 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            {projects.map((project,index) => (
              <ProjectCard
                setShowInfo={() => setShowInfo(index+1)}
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

export default ProjectList