import React from "react";
import { motion } from "framer-motion";
import Button from "./Button";
import NameSpan from "./NameSpan";
import { info } from "../../../Utils/constants";

const InfoContainer = () => {
  var name = "om"

  return (
    <div className=" space-y-1 lg:text-start text-center w-full md:w-[400px]">
      <h1 className="text-6xl font-bold text-slate-50 tracking-wider ">
        <NameSpan char={info.name[0]} delay={0.3} />
        <NameSpan char={info.name[1]} delay={0.4} />
        <NameSpan char={info.name[2]} delay={0.5} />
        <NameSpan char={info.name[3]} delay={0.6} />
        <NameSpan char={info.name[4]} delay={0.7} />
        <NameSpan char={info.name[5]} delay={0.8} />
        <NameSpan char={info.name[6]} delay={0.9} />
        <NameSpan char={info.name[7]} delay={1} />
        <NameSpan char={info.name[8]} delay={1.1} />
      </h1>

      <motion.h2
        className="pl-1 text-1xl md:text-2xl mb-1 font-semibold text-slate-600 tracking-[0.5rem]"
        initial={{ x: "10vw", opacity: 0 }}
        whileInView={{x:0, opacity: 1}}
        transition={{ duration: 0.8 }}
      >
        {info.job}
      </motion.h2>

      <div className="flex flex-wrap gap-x-2 gap-y-3 pt-1 lg:justify-normal justify-around">
        <Button name={info.languages[0]} delay={0.1} />
        <Button name={info.languages[1]} delay={0.2} />
        <Button name={info.languages[2]} delay={0.3} />
        <Button name={info.languages[3]} delay={0.4} />
        <Button name={info.languages[4]} delay={0.5} />
        <Button name={info.languages[5]} delay={0.6} />
        <Button name={info.languages[6]} delay={0.7} />
        <Button name={info.languages[7]} delay={0.8} />
        <Button name={info.languages[8]} delay={0.9} />
        <Button name={info.languages[9]} delay={1.0} />
        <Button name={info.languages[10]} delay={1.1} />
      </div>

    </div>
  );
};

export default InfoContainer;
