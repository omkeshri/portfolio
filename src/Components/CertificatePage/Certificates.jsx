import React, { useState } from "react";
import { certificates } from "../../Utils/constants";
import { motion } from "framer-motion";
import { certificateContainerVariants } from "../../Utils/motionVariants";
import ShowCertificate from "./ShowCertificate";

const Certificates = () => {
  const [showIndex, setshowIndex] = useState(null);

  return (
    <div
      className={`flex flex-col gap-6 items-center justify-center mt-32  ${
        showIndex === null ? "h-full pb-20 lg:h-screen" : "h-full"
      }`}
    >
      {certificates.map((certificate, index) => (
        <motion.div
          className="w-[90%] md:w-3/4"
          key={certificate.name}
          variants={certificateContainerVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: index * 0.2, duration: 0.8 }}
        >
          <ShowCertificate
            name={certificate.title}
            imgSrc={certificate.name}
            showItems={showIndex === index ? true : false}
            setShowIndex={() => setshowIndex(showIndex != index ? index : null)}
          />
        </motion.div>
      ))}

    </div>
  );
};

export default Certificates;
