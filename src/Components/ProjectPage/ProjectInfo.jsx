import React, { useState } from "react";
import ProjectAbout from "./ProjectAbout";
import ProjectButton from "./ProjectButton";
import ProjectTitle from "./ProjectTitle";
import ProjectVideo from "./ProjectVideo";
import ProjectLinks from "./ProjectLinks";
import ProjectDescription from "./ProjectDescription";
import { AnimatePresence, motion } from "framer-motion";

const ProjectInfo = ({ showInfo, setShowInfo, parameters }) => {
  const [slide, setSlide] = useState(0);
  
  return (
    <AnimatePresence mode="wait">
      {showInfo && (
        <motion.div
          key="modal"
          className="fixed top-0 left-0 h-full w-full flex justify-center items-center"
          initial={{ y: "-100vh" }}
          animate={{ y: 0 }}
          exit={{ y: "-100vh" }}
          transition={{ type: "spring", stiffness: 120, duration: 0.6 }}
        >
          <div className="w-full md:w-[80%] h-[60%] lg:h-[65%] xl:h-[80%] bg-[#fff] rounded-2xl overflow-hidden flex items-center flex-col py-5 gap-y-4 justify-center">
            <AnimatePresence mode="wait">
              {slide === 0 && (
                <motion.div
                  className="flex flex-col items-center"
                  key="slide0"
                  initial={{ x: "100vw" }}
                  animate={{ x: 0 }}
                  exit={{ x: "-100vw" }}
                >
                  <ProjectVideo
                    vidSrc={parameters.vid}
                  />
                  <div
                    className="absolute right-5 top-[48%] md:font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] px-4 pt-2 pb-3 pr-3 rounded-full text-white cursor-pointer"
                    onClick={() => setSlide(1)}
                  >
                    ↬
                  </div>
                </motion.div>
              )}

              {slide === 1 && (
                <motion.div
                  className="w-[80%] flex flex-col items-center"
                  key="slide1"
                  initial={{ x: "100vw" }}
                  animate={{ x: 0 }}
                  exit={{ x: "-100vw" }}
                >
                  <ProjectTitle
                    title={parameters.title}
                    subTitle={parameters.subtitle}
                  />
                  <div className="flex justify-between w-full flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-0">
                    <ProjectButton
                      icon="Previous"
                      name="↫"
                      setSlide={() => setSlide(0)}
                      buttonClass="previous-button"
                    />

                    <ProjectButton
                      name="Next"
                      icon="↬"
                      setSlide={() => setSlide(2)}
                      buttonClass="next-button"
                    />
                  </div>
                </motion.div>
              )}

              {slide === 2 && (
                <motion.div
                  className="w-[80%] flex flex-col items-center p-4 overflow-scroll"
                  key="slide2"
                  initial={{ x: "100vw" }}
                  animate={{ x: 0 }}
                  exit={{ x: "-100vw" }}
                >
                  <ProjectDescription content={parameters.description} />
                  <div className="flex justify-between w-full flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-0">
                    <ProjectButton
                      icon="Previous"
                      name="↫"
                      setSlide={() => setSlide(1)}
                      buttonClass="previous-button"
                    />

                    <ProjectButton
                      name="Next"
                      icon="↬"
                      setSlide={() => setSlide(3)}
                      buttonClass="next-button"
                    />
                  </div>
                </motion.div>
              )}

              {slide === 3 && (
                <motion.div
                  className="w-[80%] flex flex-col items-center p-4 overflow-scroll"
                  key="slide3"
                  initial={{ x: "100vw" }}
                  animate={{ x: 0 }}
                  exit={{ x: "-100vw" }}
                >
                  <ProjectAbout content={parameters.technologies} />
                  <div className="flex justify-between w-full flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-0">
                    <ProjectButton
                      icon="Previous"
                      name="↫"
                      setSlide={() => setSlide(2)}
                      buttonClass="previous-button"
                    />

                    <ProjectButton
                      name="Next"
                      icon="↬"
                      setSlide={() => setSlide(4)}
                      buttonClass="next-button"
                    />
                  </div>
                </motion.div>
              )}
              {slide === 4 && (
                <motion.div
                  className="w-[80%] flex flex-col items-center p-4 overflow-scroll"
                  key="slide4"
                  initial={{ x: "100vw" }}
                  animate={{ x: 0 }}
                  exit={{ x: "-100vw" }}
                >
                  <ProjectAbout content={parameters.features} />
                  <div className="flex justify-between w-full flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-0">
                    <ProjectButton
                      icon="Previous"
                      name="↫"
                      setSlide={() => setSlide(3)}
                      buttonClass="previous-button"
                    />

                    <ProjectButton
                      name="Next"
                      icon="↬"
                      setSlide={() => setSlide(5)}
                      buttonClass="next-button"
                    />
                  </div>
                </motion.div>
              )}

              {slide === 5 && (
                <motion.div
                  className="w-[80%] flex flex-col items-center p-4 overflow-scroll"
                  key="slide5"
                  initial={{ x: "100vw" }}
                  animate={{ x: 0 }}
                  exit={{ x: "-100vw" }}
                >
                  <ProjectLinks
                    demo={parameters.demo}
                    sourceCode={parameters.sourceCode}
                  />
                  <div className="flex justify-between w-full flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-0">
                    <ProjectButton
                      icon="Previous"
                      name="↫"
                      setSlide={() => setSlide(4)}
                      buttonClass="previous-button"
                    />
                    <ProjectButton
                      name="Close"
                      icon="🗙"
                      setSlide={() => {
                        setShowInfo(false);
                        setSlide(0);
                      }}
                      buttonClass="next-button"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectInfo;