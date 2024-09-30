import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProjectAbout from "./ProjectAbout";
import ProjectButton from "./ProjectButton";
import { foodifyFeatures, foodifyTechnologies } from "../../Utils/constants";
import ProjectTitle from "./ProjectTitle";
import ProjectVideo from "./ProjectVideo";
import ProjectLinks from "./ProjectLinks";

const FoodifyInfo = ({ showInfo, setShowInfo }) => {
  const [slide, setSlide] = useState(0);

  return (
    <AnimatePresence mode="wait">
      {showInfo && (
        <motion.div
          key="modal"
          className="fixed top-0 left-0 h-screen w-full flex justify-center items-center"
          initial={{ y: "-100vh" }}
          animate={{ y: 0 }}
          exit={{ y: "-100vh" }}
          transition={{ type: "spring", stiffness: 120, duration: 0.6 }}
        >

          <div className="w-[80%] h-[80%] bg-[#fff] rounded-2xl overflow-hidden flex items-center flex-col py-5 gap-y-4 justify-center">

            <AnimatePresence mode="wait">
              {slide === 0 && (
                <motion.div
                  className="flex flex-col items-center"
                  key="slide0"
                  initial={{ x: "100vw" }}
                  animate={{ x: 0 }}
                  exit={{ x: "-100vw" }}
                >
                  <ProjectVideo setSlide={() => setSlide(1)} />
                </motion.div>
              )}

              {slide === 1 && (
                <motion.div
                  className="flex flex-col items-center"
                  key="slide1"
                  initial={{ x: "100vw" }}
                  animate={{ x: 0 }}
                  exit={{ x: "-100vw" }}
                >
                  <ProjectTitle />
                  <ProjectButton
                    name="Next"
                    icon="➜"
                    setSlide={() => setSlide(2)}
                  />
                </motion.div>
              )}

              {slide === 2 && (
                <motion.div
                  className="flex flex-col items-center"
                  key="slide2"
                  initial={{ x: "100vw" }}
                  animate={{ x: 0 }}
                  exit={{ x: "-100vw" }}
                >
                  <ProjectAbout content={foodifyTechnologies} />
                  <ProjectButton
                    name="Next"
                    icon="➜"
                    setSlide={() => setSlide(3)}
                  />
                </motion.div>
              )}
              {slide === 3 && (
                <motion.div
                  className="flex flex-col items-center"
                  key="slide3"
                  initial={{ x: "100vw" }}
                  animate={{ x: 0 }}
                  exit={{ x: "-100vw" }}
                >
                  <ProjectAbout content={foodifyFeatures} />
                  <ProjectButton
                    name="Next"
                    icon="➜"
                    setSlide={() => setSlide(4)}
                  />
                </motion.div>
              )}

              {slide === 4 && (
                <motion.div
                  className="flex flex-col items-center"
                  key="slide4"
                  initial={{ x: "100vw" }}
                  animate={{ x: 0 }}
                  exit={{ x: "-100vw" }}
                >
                  <ProjectLinks />
                  <ProjectButton
                    name="Close"
                    icon="🗙"
                    setSlide={() => {
                      setShowInfo(false);
                      setSlide(0);
                    }}
                  />
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FoodifyInfo;
