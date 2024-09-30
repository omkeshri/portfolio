import React from "react";
import { motion } from "framer-motion";
import { buttonVariants, popOutVariants } from "../../Utils/motionVariants";
import resume from "../../Assets/MyResume.pdf";
import AboutButton from "./AboutButton";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="h-screen flex flex-col gap-4 items-center justify-center text-slate-500">
      <motion.h3
        className="text-xl sm:text-4xl text-slate-50 font-bold"
        variants={popOutVariants}
        initial="hidden"
        whileInView="visible"
      >
        <span className="text-blue-500"></span>
        <span className="text-slate-50">.</span>
        <span className="text-pink-600">log</span>
        <span className="text-slate-50">(</span>
        <span className="text-green-500">"Hi, I am Om Keshri"</span>
        <span className="text-slate-50">)</span>
      </motion.h3>
      <p className="w-[80%] text-sm sm:text-lg text-slate-500">
        I am a web developer/engineer with interest in front-end and back-end
        technologies. I have experience developing websites, Web applications,
        and Web services using{" "}
        <span className="bg-[#1E293B] px-2  rounded-md">C++</span>,
        <span className="bg-[#1E293B] px-2 ml-1 rounded-md">ReactJs</span>,
        <span className="bg-[#1E293B] px-2 ml-1 rounded-md">NodeJs</span>,
        <span className="bg-[#1E293B] px-2 ml-1 rounded-md">ExpressJs</span>,
        and <span className="bg-[#1E293B] px-2 rounded-md">MongoDB</span> . I
        enjoy playing around with data and code. Along with being passionate
        about creating inclusive spaces for everyone, I love learning new things
        and building cool stuff. Learning is a lifelong process, so I'm always
        discovering new things. "Learning is a life-long journey"
      </p>

      <div className="flex gap-5 sm:gap-10 ">
        <a href={resume} download="Om Keshri Resume" target="_blank">
        <motion.button
        variants={buttonVariants}
        initial="hidden"
        whileInView="visible"
        transition={{delay:0.1}}
         className="about-button">Resume</motion.button>
        </a>
        <Link to={"/certificates"}><AboutButton name={"Certificates"} delay={0.2}/></Link>
        <Link to={"/projects"}><AboutButton name={"Projects"} delay={0.3}/></Link>
      </div>
    </div>
  );
};

export default About;
