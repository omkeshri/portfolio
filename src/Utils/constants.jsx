import medicozImage from "../Images/Medicoz.png"
import foodifyImage from "../Images/Foodify.png"
import youtubeImage from "../Images/Youtube.png"
import netflixImage from "../Images/Netflix.png"
import socialDashboardImage from "../Images/SocialDashboard.png"
import customerManagementImage from "../Images/CustomerManagement.png"
import blackJackImage from "../Images/BlackJack.png"
import leadTrackerImage from "../Images/LeadTracker.png"
import quizGameImage from "../Images/QuizGame.png"
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
import { IoToggle as Toggle } from "react-icons/io5";
import { BsFiletypeScss as Scss } from "react-icons/bs";
import { FaHtml5 as Html } from "react-icons/fa";
import { MdOutlineMenuBook as Menu } from "react-icons/md";
import { ImCancelCircle as Cancel } from "react-icons/im";
import { MdCalculate as Calculate } from "react-icons/md";
import { IoReceipt as Receipt } from "react-icons/io5";
import { FaSave as SaveInfo } from "react-icons/fa";
import { TfiWrite as Manual } from "react-icons/tfi";
import { TbAutomaticGearbox as Automatic} from "react-icons/tb";
import { CiBookmarkCheck as View } from "react-icons/ci";
import { GrStorage as Storage} from "react-icons/gr";
import { IoLogoCss3 as Css } from "react-icons/io";



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
    imgSrc: medicozImage,
  },

  {
    id: 2,
    title: "Foodify",
    subtitle: "Food at your Doorstep",
    languages: "React, JavaScript,",
    languages2: "Tailwind",
    imgSrc: foodifyImage,
  },

  {
    id: 3,
    title: "YouTube Clone",
    subtitle: "Just a clone",
    languages: "React, JavaScript,",
    languages2: "Tailwind",
    imgSrc: youtubeImage,
  },

  {
    id: 4,
    title: "Netflix/GPT",
    subtitle: "Netflix with GPT Search",
    languages: "React, JavaScript,",
    languages2: "Tailwind",
    imgSrc: netflixImage,
  },

  {
    id: 5,
    title: "Social Media Dashboard",
    subtitle: "Dark/Light Toggle",
    languages: "HTML, SCSS,",
    languages2: "JavaScript",
    imgSrc: socialDashboardImage,
  },

  {
    id: 6,
    title: "Customer Manager",
    subtitle: "Manage Billing",
    languages: "C/C++",
    languages2: "",
    imgSrc: customerManagementImage,
  },

  {
    id: 7,
    title: "Black Jack",
    subtitle: "Fun & Interactive Game",
    languages: "HTML, CSS",
    languages2: "JavaScript",
    imgSrc: blackJackImage,
  },

  {
    id: 8,
    title: "Leads Tracker",
    subtitle: "Chrome Extension",
    languages: "HTML, CSS,",
    languages2: "JavaScript",
    imgSrc: leadTrackerImage,
  },

  {
    id: 9,
    title: "Quiz Game",
    subtitle: "Fun & Interactive Game",
    languages: "Python",
    languages2: "",
    imgSrc: quizGameImage,
  },
];


const foodifyDescription = "A React-based food ordering website integrated with the Swiggy API. This application allows users to browse restaurant menus, place orders, and manage their cart. Redux is used for efficient state management, while Tailwind CSS ensures a responsive and modern design."

const foodifyTechnologies = {
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

const foodifyFeatures = {
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

const foodifyParameters = {
  image: foodifyImage,
  title: "Foodify",
  subtitle: "Food at Your Doorstep",
  technologies: foodifyTechnologies,
  description: foodifyDescription,
  features: foodifyFeatures,
}


const socialDashboardDescription = "This project is a responsive social media dashboard that allows users to switch between dark and light themes. The dashboard is built using HTML and SCSS, providing a modern and visually appealing interface."

const socialDashboardFeatures = {
  title: "Features",
  li1: "Dark/Light Theme Toggle:",
  li1About:
    "Users can easily switch between dark and light themes to suit their preferences.",
  li1Icon: Toggle,

  li2: "Responsive Design:",
  li2About: "Optimized for different screen sizes, ensuring a great user experience on both desktop and mobile devices.",
  li2Icon: Responsive,

  li3: "SCSS for Styling:",
  li3About:
    "Utilizes SCSS for more efficient and maintainable CSS.",
  li3Icon: Scss,

  li4: "",
  li4About: "",
  li4Icon: "nothing",

  li5: "",
  li5About:
    "",
  li5Icon: "nothing",

  li6: "",
  li6About:
    "",
  li6Icon: "nothing",

};

const socialDashboardTechnologies = {
  title: "Technologies Used",
  li1: "HTML:",
  li1About: "For structuring the content.",
  li1Icon: Html,
  li2: "SCSS:",
  li2About: "For styling, allowing more efficient and organized CSS with variables, nesting, and mixins.",
  li2Icon: Scss,
  li3: "JavaScript:",
  li3About: "For adding interactivity and handling the dark/light mode toggle functionality.",
  li3Icon: Js,
  li4: "",
  li4About: "",
  li4Icon: "nothing",
  li5: "",
  li5About: "",
  li5Icon: "nothing",
  li6: "",
  li6About: "",
  li6Icon: "nothing",
};

const socialDashboardParameters = {
  image: socialDashboardImage,
  title: "Social Media Dashboard",
  subtitle: "Dark/Light Toggle",
  technologies: socialDashboardTechnologies,
  description: socialDashboardDescription,
  features: socialDashboardFeatures,
}


const customerManagerDescription = "This C program is a Customer Management System designed to manage customer orders, calculate bills, apply discounts, and print receipts. The system handles order taking, item cancellation, and payment processing, making it a comprehensive solution for small cafe operations."

const customerManagerFeatures = {
  title: "Features",
  li1: "Menu Display:",
  li1About:
    "Displays a menu of available items with their prices",
  li1Icon: Menu,

  li2: "Order Management:",
  li2About: "Allows customers to place orders and specify quantities.",
  li2Icon: Manage,

  li3: "Cancellation:",
  li3About:
    "Customers can cancel items from their orders.",
  li3Icon: Cancel,

  li4: "Billing and Discount Calculation:",
  li4About: "Calculates the total bill, applies discounts based on the bill amount, and adds GST.",
  li4Icon: Calculate,

  li5: "Receipt Printing:",
  li5About:
    "Prints a detailed receipt with all order details, cancellations, and final amount including taxes.",
  li5Icon: Receipt,

  li6: "Customer Information",
  li6About:
    "Records customer name, address, and mobile number.",
  li6Icon: SaveInfo,

};

const customerManagerTechnologies = {
  title: "Files Used",
  li1: "Menu.txt:",
  li1About: "Contains the menu items and their prices.",
  li1Icon: Menu,
  li2: "Order.txt:",
  li2About: "Stores the details of the current order.",
  li2Icon: Menu,
  li3: "Delete.txt:",
  li3About: "Stores the details of cancelled items.",
  li3Icon: Cancel,
  li4: "CustomerInfo.txt",
  li4About: "Records customer information.",
  li4Icon: Manage,
  li5: "",
  li5About: "",
  li5Icon: "nothing",
  li6: "",
  li6About: "",
  li6Icon: "nothing",
};

const customerManagerParameters = {
  image: customerManagementImage,
  title: "Customer Management System",
  subtitle: "Manage Your Customer",
  technologies: customerManagerTechnologies,
  description: customerManagerDescription,
  features: customerManagerFeatures,
}


const leadTrackerDesciption = "This project is a simple lead tracker web application built with HTML, CSS, and JavaScript. The app allows users to save and manage URLs of websites they want to keep track of and also to take quick notes for later use. Users can add URLs manually through an input field or automatically save the current browser tab's URL. The app also provides functionality to clear all saved leads."

const leadTrackerFeatures = {
  title: "Features",

  li1: "Add Leads Manually:",
  li1About: "Users can type a URL or take a quick note into an input field and click a button to save it.",
  li1Icon: Manual,

  li2: "Add Leads Automatically:",
  li2About: "Users can click a button to save the URL of the current browser tab.",
  li2Icon: Automatic,

  li3: "View Leads:",
  li3About: "Saved URLs are displayed as a list of clickable links.",
  li3Icon: View,

  li4: "Delete Leads:",
  li4About: "Users can clear all saved URLs with a double-click on the delete button.",
  li4Icon: Cancel,

  li5: "Persistent Storage:",
  li5About: "Saved URLs are stored in the browser's local storage, allowing them to persist between sessions.",
  li5Icon: Storage,

  li6: "",
  li6About: "",
  li6Icon: "nothing",
};

const leadTrackerTechnologies = {
  title: "Technologies Used",
  li1: "HTML:",
  li1About: "For structuring the web pages.",
  li1Icon: Html,

  li2: "CSS:",
  li2About: "For styling the application.",
  li2Icon: Css,

  li3: "JavaScript:",
  li3About: "For adding interactivity and handling dynamic functionalities like order management.",
  li3Icon: Js,

  li4: "Local Storage:",
  li4About: "For storing customer information, order details, and cancelled items persistently.",
  li4Icon: Storage,

  li5: "",
  li5About: "",
  li5Icon: "nothing",

  li6: "",
  li6About: "",
  li6Icon: "nothing",
};

const leadTrackerParameters = {
  image: leadTrackerImage,
  title: "Leads Tracker",
  subtitle: "Chrome Extension for taking notes",
  technologies: leadTrackerTechnologies,
  description: leadTrackerDesciption,
  features: leadTrackerFeatures,
}






export const projectParameters = {
  1: leadTrackerParameters,
  2: foodifyParameters,
  3: leadTrackerParameters,
  4: leadTrackerParameters,
  5: socialDashboardParameters,
  6: customerManagerParameters,
  7: leadTrackerParameters,
  8: leadTrackerParameters,
  9: leadTrackerParameters,
}