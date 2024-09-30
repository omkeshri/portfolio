export const certificates = [
  { title: "Complete Interview Preparation", name: "gfg" },

  { title: "Algorithmic Toolbox", name: "dsa" },
  { title: "Dynamic Programming, Greedy Algorithms", name: "dp" },
  { title: "HTML, CSS and JavaScript for Beginners", name: "frontend" },
  { title: "Server side JavaScript with Node.js", name: "backend" },
  { title: "The Bits and Bytes of Computer Networking", name: "network" },
  { title: "Introduction to Generative AI", name: "genai" },
  { title: "Introduction to Large Language Models", name: "llm" },
  { title: "Generative AI with Large Language Models", name: "genaillm" },
];

export const projects = [
  {
    id: 1,
    title: "Medicoz",
    subtitle: "Med with AI",
    languages: "React, NodeJs,",
    languages2: "ExpressJs, MongoDB, Tailwind",
    imgSrc: "src/Images/Medicoz.png",
  },

  {
    id: 2,
    title: "Foodify",
    subtitle: "Food at your Doorstep",
    languages: "React, JavaScript,",
    languages2: "Tailwind",
    imgSrc: "src/Images/Foodify.png",
  },

  {
    id: 3,
    title: "YouTube Clone",
    subtitle: "Just a clone",
    languages: "React, JavaScript,",
    languages2: "Tailwind",
    imgSrc: "src/Images/Youtube.png",
  },

  {
    id: 4,
    title: "Netflix/GPT",
    subtitle: "Netflix with GPT Search",
    languages: "React, JavaScript,",
    languages2: "Tailwind",
    imgSrc: "src/Images/Netflix.png",
  },

  {
    id: 5,
    title: "Social Media Dashboard",
    subtitle: "Dark/Light Toggle",
    languages: "HTML, SCSS,",
    languages2: "JavaScript",
    imgSrc: "src/Images/SocialDashboard.png",
  },

  {
    id: 6,
    title: "Customer Manager",
    subtitle: "Manage Billing",
    languages: "C/C++",
    languages2: "",
    imgSrc: "src/Images/CustomerManagement.png",
  },

  {
    id: 7,
    title: "Black Jack",
    subtitle: "Fun & Interactive Game",
    languages: "HTML, CSS",
    languages2: "JavaScript",
    imgSrc: "src/Images/BlackJack.png",
  },

  {
    id: 8,
    title: "Leads Tracker",
    subtitle: "Chrome Extension",
    languages: "HTML, CSS,",
    languages2: "JavaScript",
    imgSrc: "src/Images/LeadTracker.png",
  },

  {
    id: 9,
    title: "Quiz Game",
    subtitle: "Fun & Interactive Game",
    languages: "Python",
    languages2: "",
    imgSrc: "src/Images/QuizGame.png",
  },
];

import { FaReact as React } from "react-icons/fa";
import { TbFileTypeJsx as Jsx } from "react-icons/tb";
import { SiRedux as Redux } from "react-icons/si";
import { SiSwiggy as Swiggy } from "react-icons/si";
import { RiTailwindCssFill as Tailwind } from "react-icons/ri";
import { IoLogoJavascript as Js } from "react-icons/io";
import { IoCafeSharp as Restaurant} from "react-icons/io5";
import { FaSearch as Search} from "react-icons/fa";
import { FaCartShopping as Cart} from "react-icons/fa6";
import { MdManageAccounts as Manage} from "react-icons/md";
import { DiResponsive as Responsive} from "react-icons/di";


export const foodifyTechnologies = {
  title: "Technologies Used",
  li1: "React:",
  li1About: "Front-end framework for building the user interface.",
  li1Icon: React,
  li2: "JSX:",
  li2About: "Syntax extension for JavaScript, used for building UI components.",
  li2Icon: Jsx,
  li3: "Redux:",
  li3About: "State management for handling the application's state.",
  li3Icon: Redux,
  li4: "Swiggy API:",
  li4About: "Integrated to fetch real-time restaurant and menu data.",
  li4Icon: Swiggy,
  li5: "Tailwind:",
  li5About: "Utility-first CSS framework for responsive and modern design.",
  li5Icon: Tailwind,
  li6: "JavaScript (ES6+):",
  li6About: "Core language used for development.",
  li6Icon: Js,
};

export const foodifyFeatures = {
  title: "Features",
  li1: "Browse Restaurants:",
  li1About:
    "Explore a wide range of restaurant menus directly from the Swiggy API.",
  li1Icon: Restaurant,

  li2: "Search and Filter:",
  li2About: "Easily search for specific dishes or filter by restaurant type.",
  li2Icon: Search,

  li3: "Add to Cart:",
  li3About:
    "Seamlessly add or remove items from the cart with real-time updates.",
  li3Icon: Cart,

  li4: "Order Management:",
  li4About: "Review and place orders with a streamlined checkout process.",
  li4Icon: Manage,

  li5: "Responsive Design:",
  li5About:
    "Optimized for both desktop and mobile devices using Tailwind CSS. (Will be updated soon..)",
  li5Icon: Responsive,

  li6: "",
  li6About:
    "",
  li6Icon: "nothing",

};
