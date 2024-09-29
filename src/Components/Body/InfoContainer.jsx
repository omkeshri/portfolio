import React from "react";
import { motion } from "framer-motion";
import Button from "./Button";
import NameSpan from "./NameSpan";

const InfoContainer = () => {
  return (
    <div className=" space-y-1 lg:text-start text-center w-full md:w-[400px]">
      <h1 className="text-6xl font-bold text-slate-50 tracking-wider ">
        <NameSpan char={"O"} delay={0.3} />
        <NameSpan char={"m"} delay={0.4} />
        <NameSpan char={" "} delay={0.5} />
        <NameSpan char={"K"} delay={0.6} />
        <NameSpan char={"e"} delay={0.7} />
        <NameSpan char={"s"} delay={0.8} />
        <NameSpan char={"h"} delay={0.9} />
        <NameSpan char={"r"} delay={1} />
        <NameSpan char={"i"} delay={1.1} />
      </h1>

      <motion.h2
        className="pl-1 text-1xl md:text-2xl mb-1 font-semibold text-slate-600 tracking-[0.5rem]"
        initial={{ x: "10vw", opacity: 0 }}
        whileInView={{x:0, opacity: 1}}
        transition={{ duration: 0.8 }}
      >
        Web Developer
      </motion.h2>

      <div className="flex flex-wrap gap-x-2 gap-y-3 pt-1 lg:justify-normal justify-around">
        <Button name={"ReactJs"} delay={0.1} />
        <Button name={"NodeJs"} delay={0.2} />
        <Button name={"ExpressJs"} delay={0.3} />
        <Button name={"NextJs"} delay={0.4} />
        <Button name={"MongoDB"} delay={0.5} />
        <Button name={"Framer Motion"} delay={0.6} />
        <Button name={"Tailwind CSS"} delay={0.7} />
        <Button name={"HTML5"} delay={0.8} />
        <Button name={"CSS"} delay={0.9} />
        <Button name={"JavaScript"} delay={1} />
        <Button name={"C/C++"} delay={1.1} />
      </div>

    </div>
  );
};

export default InfoContainer;
