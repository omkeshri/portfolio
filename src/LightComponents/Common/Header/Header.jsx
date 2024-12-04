import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTelegramPlane
} from "react-icons/fa";
import { MdNightlightRound } from "react-icons/md";
import { SiCodechef, SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";
import { headerContainerVariants } from "../../../Utils/motionVariants";
import HeaderLink from "./HeaderLink";
import { Link, useLocation } from "react-router-dom";
import { info } from "../../../Utils/constants";

const Header = ({setTheme}) => {
  const location = useLocation();

  const setCurrentTheme = () => {
    setTheme();
    window.location.reload();
  };

  return (
    <motion.div
      className="fixed top-5 w-full mx-auto flex justify-between px-2 sm:px-10 z-20"
      variants={headerContainerVariants}
      initial="hidden"
      animate="visible"
    >
     {location.pathname != "/" ?
      <Link to="/">
        <motion.div
          className="box sm:hover:w-[170px]"
          initial={{ x: "-10vw" }}
          animate={{ x: 0 }}
        >
          <div className="arrow right"></div>
          <div className="text hidden sm:block">Back to Home</div>
        </motion.div>
      </Link>
      : <div className="box opacity-0"></div>}

      <div className="flex gap-[0.38rem] sm:gap-3">
        <Link to={info.githubLink} target="_blank">
          <HeaderLink Icon={FaGithub} />
        </Link>
        <Link to={info.linkedinLink} target="_blank">
          <HeaderLink Icon={FaLinkedin} />
        </Link>
        <Link to={info.leetcodeLink} target="_blank">
          <HeaderLink Icon={SiLeetcode} />
        </Link>
        <Link to={info.codechefLink} target="_blank">
          <HeaderLink Icon={SiCodechef} />
        </Link>
        <Link to={info.telegramLink} target="_blank">
          <HeaderLink Icon={FaTelegramPlane} />
        </Link>
      </div>

      {location.pathname!="/" ?
      <Link
        to={location.pathname === "/projects" ? "/certificates" : "/projects"}
      >
        <motion.div
          className="box sm:hover:w-[170px]"
          initial={{ x: "10vw" }}
          animate={{ x: 0 }}
        >
          <div className="arrow2 right"></div>
          <div className="text hidden sm:block">
            {location.pathname === "/certificates"
              ? "Go to Projects"
              : "Go to Certificates"}
          </div>
        </motion.div>
      </Link>:
      <div>
      <button onClick={() => setCurrentTheme()} className="text-white p-3 bg-black border border-white rounded-full">
        <MdNightlightRound className="scale-125 font-extrabold" />
        
      </button>
    </div>}
    </motion.div>
  );
};

export default Header;
