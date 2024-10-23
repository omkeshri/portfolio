import React from "react";
import { motion } from "framer-motion";
import { buttonVariants, popOutVariants } from "../../../Utils/motionVariants";
import resume from "../../../Assets/MyResume.pdf";
import AboutButton from "./AboutButton";
import { Link } from "react-router-dom";
import { info } from "../../../Utils/constants";

const About = () => {
  return (
    <div className="h-screen flex flex-col gap-4 items-center justify-center text-slate-500">
      <motion.h3
        className="text-xl sm:text-4xl text-slate-50 font-bold"
        variants={popOutVariants}
        initial="hidden"
        whileInView="visible"
      >
        <span className="text-blue-500">console</span>
        <span className="text-slate-50">.</span>
        <span className="text-pink-600">log</span>
        <span className="text-slate-50">(</span>
        <span className="text-green-500">"Hi, I am {info.name}"</span>
        <span className="text-slate-50">)</span>
      </motion.h3>
      <p className="w-[80%] text-sm sm:text-lg text-slate-500">
        {info.about1}
        <span className="bg-[#1E293B] px-2  rounded-md">{info.aboutLanguages[0]}</span>,
        <span className="bg-[#1E293B] px-2 ml-1 rounded-md">{info.aboutLanguages[1]}</span>,
        <span className="bg-[#1E293B] px-2 ml-1 rounded-md">{info.aboutLanguages[2]}</span>,
        <span className="bg-[#1E293B] px-2 ml-1 rounded-md">{info.aboutLanguages[3]}</span>,
        and <span className="bg-[#1E293B] px-2 rounded-md">{info.aboutLanguages[4]}</span> {info.about2}
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
