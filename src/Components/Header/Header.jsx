import React from "react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTelegramPlane,
} from "react-icons/fa";
import { SiCodechef, SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";
import { headerContainerVariants } from "../../Utils/motionVariants";
import HeaderLink from "./HeaderLink";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  return (
    <motion.div
      className="fixed top-5 w-full mx-auto flex justify-between px-2 sm:px-10 z-20"
      variants={headerContainerVariants}
      initial="hidden"
      animate="visible"
    >
      <Link to="/">
        <motion.div
          class={`box sm:hover:w-[170px] ${
            location.pathname === "/" ? "opacity-0" : ""
          }`}
          initial={{ x: "-10vw" }}
          animate={{ x: 0 }}
        >
          <div class="arrow right"></div>
          <div class="text hidden sm:block">Back to Home</div>
        </motion.div>
      </Link>

      <div className="flex gap-[0.38rem] sm:gap-3">
        <Link to={"https://github.com/omkeshri"} target="_blank">
          <HeaderLink Icon={FaGithub} />
        </Link>
        <Link to={"https://www.linkedin.com/in/omkeshari"} target="_blank">
          <HeaderLink Icon={FaLinkedin} />
        </Link>
        <Link to={"https://leetcode.com/u/omkeshari"} target="_blank">
          <HeaderLink Icon={SiLeetcode} />
        </Link>
        <Link to={"https://www.codechef.com/users/omkeshari"} target="_blank">
          <HeaderLink Icon={SiCodechef} />
        </Link>
        <Link to={"https://www.instagram.com/omkeshri_"} target="_blank">
          <HeaderLink Icon={FaInstagram} />
        </Link>
        <Link to={"https://t.me/om_keshari"} target="_blank">
          <HeaderLink Icon={FaTelegramPlane} />
        </Link>
      </div>
      <Link
        to={location.pathname === "/projects" ? "/certificates" : "/projects"}
      >
        <motion.div
          class={`box sm:hover:w-[170px] ${
            location.pathname === "/" ? "opacity-0" : ""
          }`}
          initial={{ x: "10vw" }}
          animate={{ x: 0 }}
        >
          <div class="arrow2 right"></div>
          <div class="text hidden sm:block">
            {location.pathname === "/certificates"
              ? "Go to Projects"
              : "Go to Certificates"}
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default Header;
