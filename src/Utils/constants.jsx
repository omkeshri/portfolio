import profilePic from "../Images/WhoWeAre.jpg";
import medicozImage from "../Images/Medicoz.png";
import foodifyImage from "../Images/Foodify.png";
import youtubeImage from "../Images/Youtube.png";
import netflixImage from "../Images/Netflix.png";
import socialDashboardImage from "../Images/SocialDashboard.png";
import customerManagementImage from "../Images/CustomerManagement.png";
import blackJackImage from "../Images/BlackJack.png";
import leadTrackerImage from "../Images/LeadTracker.png";
import quizGameImage from "../Images/QuizGame.png";
import medicozVideo from "../Assets/Medicoz.mp4";
import foodifyVideo from "../Assets/Foodify.mp4";
import customerManagerVideo from "../Assets/CustomerManager.mp4";
import blackJackVideo from "../Assets/BlackJack.mp4";
import socialDashboardVideo from "../Assets/SocialDashboard.mp4";
import uploadedSoon from "../Assets/UploadedSoon.mp4";
import { FaReact as React } from "react-icons/fa";
import { TbFileTypeJsx as Jsx } from "react-icons/tb";
import { SiRedux as Redux } from "react-icons/si";
import { SiSwiggy as Swiggy } from "react-icons/si";
import { RiTailwindCssFill as Tailwind } from "react-icons/ri";
import { IoLogoJavascript as Js } from "react-icons/io";
import { IoCafeSharp as Restaurant } from "react-icons/io5";
import { FaSearch as Search } from "react-icons/fa";
import { FaCartShopping as Cart } from "react-icons/fa6";
import { MdManageAccounts as Manage } from "react-icons/md";
import { DiResponsive as Responsive } from "react-icons/di";
import { IoToggle as Toggle } from "react-icons/io5";
import { BsFiletypeScss as Scss } from "react-icons/bs";
import { FaHtml5 as Html } from "react-icons/fa";
import { MdOutlineMenuBook as Menu } from "react-icons/md";
import { ImCancelCircle as Cancel } from "react-icons/im";
import { MdCalculate as Calculate } from "react-icons/md";
import { IoReceipt as Receipt } from "react-icons/io5";
import { FaSave as SaveInfo } from "react-icons/fa";
import { TfiWrite as Manual } from "react-icons/tfi";
import { TbAutomaticGearbox as Automatic } from "react-icons/tb";
import { CiBookmarkCheck as View } from "react-icons/ci";
import { GrStorage as Storage } from "react-icons/gr";
import { IoLogoCss3 as Css } from "react-icons/io";
import { GiPerspectiveDiceSixFacesRandom as Random } from "react-icons/gi";
import { FaMusic as Music } from "react-icons/fa";
import { MdScoreboard as Score } from "react-icons/md";
import { FaPython as Python } from "react-icons/fa";
import { FaGamepad as Game } from "react-icons/fa";
import { FaGoogle as Google } from "react-icons/fa";
import { SiRazorpay as RazorPay } from "react-icons/si";
import { MdAttachEmail as Email } from "react-icons/md";
import { FaNode as Node } from "react-icons/fa";
import { SiMongodb as MongoDB } from "react-icons/si";
import { MdHealthAndSafety as Health } from "react-icons/md";
import { MdOnlinePrediction as Prediction } from "react-icons/md";
import { FaUserDoctor as Doctor } from "react-icons/fa6";
import { MdPayment as Transaction } from "react-icons/md";
import { IoMdContacts as Contact } from "react-icons/io";
import { SiChatbot as ChatBot } from "react-icons/si";

export const info = {
  name: "Om Keshri",
  job: "Web Developer",
  profileImg: profilePic,
  languages: ["ReactJs", "NodeJs", "ExpressJs", "NextJs", "MongoDB", "C/C++", "Framer Motion", "Tailwind CSS", "HTML5", "CSS", "JavaScript"],
  about1: "I am a web developer/engineer with interest in front-end and back-end technologies. I have experience developing websites, Web applications, and Web services using ",
  about2: ". I enjoy playing around with data and code. Along with being passionate about creating inclusive spaces for everyone, I love learning new things and building cool stuff. Learning is a lifelong process, so I'm always discovering new things. \"Learning is a life-long journey\"",
  aboutLanguages: ["C++", "ReactJs", "NodeJs", "ExpressJs", "MongoDB"],
  githubLink: "https://github.com/omkeshri",
  linkedinLink: "https://www.linkedin.com/in/omkeshari",
  leetcodeLink: "https://leetcode.com/u/omkeshari",
  codechefLink: "https://www.codechef.com/users/omkeshari",
  telegramLink: "https://t.me/om_keshari",
  copyrigthDate: 2024
}

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
    title: "Netflix-GPT",
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

const medicozDescription =
  "Medicoz collects user health data through a web interface, which is processed by machine learning models hosted on a Flask backend. These models analyze the data to predict the severity of different health conditions, with the results displayed on the React frontend, providing users with personalized health insights. Based on these predictions, Medicoz recommends nearby doctors and clinics using the Google Places API. Additionally, the platform features a shopping section for health monitoring devices, with transactions managed through Razorpay. User data and predictions are handled securely throughout the process.";

const medicozFeatures = {
  title: "Features",

  li1: "Health Data Collection:",
  li1About: "Collects user health data through a user-friendly web interface.",
  li1Icon: Health,

  li2: "Severity Prediction & Personalized Insights:",
  li2About:
    "Processes health data using machine learning models to predict the severity of various health conditions. Displays personalized health insights based on user data and predictions.",
  li2Icon: Prediction,

  li3: "Doctor Recommendations:",
  li3About:
    "Recommends nearby doctors and clinics using the Google Places API based on health predictions.",
  li3Icon: Doctor,

  li4: "Health Device Shopping:",
  li4About:
    "Offers a shopping section for health monitoring devices with a seamless purchasing experience.",
  li4Icon: Cart,

  li5: "Secure Transactions:",
  li5About:
    "Handles all transactions securely through Razorpay to ensure user data safety.",
  li5Icon: Transaction,

  li6: "Contact Page:",
  li6About:
    "A contact page is also available, utilizing EmailJS API for easy user communication.",
  li6Icon: Contact,

  li7: "Chat Bot",
  li7About:
    "Provides users with information about the symptoms of diseases based on their input.",
  li7Icon: ChatBot,
};

const medicozTechnologies = {
  title: "Technologies Used",

  li1: "Front-end:",
  li1About: "HTML, CSS, React, and Tailwind for a responsive user interface.",
  li1Icon: React,

  li2: "Back-end:",
  li2About:
    "Node.js, Express.js, and Flask for server-side development and enabling predictive models.",
  li2Icon: Node,

  li3: "Database:",
  li3About: "MongoDB for managing user authentication and health data.",
  li3Icon: MongoDB,

  li4: "Google Places API:",
  li4About:
    "Provides recommendations for nearby doctors and hospitals based on disease.",
  li4Icon: Google,

  li5: "RazorPay API:",
  li5About:
    "Handles transactions in the health monitoring device store for a seamless purchasing experience.",
  li5Icon: RazorPay,

  li6: "EmailJS API:",
  li6About:
    "Facilitates user communication through email for contact features.",
  li6Icon: Email,

  li7: "BotPress:",
  li7About:
    "Enables automated chatbot communication for user support and inquiries.",
  li7Icon: ChatBot,
};

const medicozParameters = {
  vid: medicozVideo,
  title: "Medicoz",
  subtitle: "Diagnosing Today Securing Tomorrow",
  technologies: medicozTechnologies,
  description: medicozDescription,
  features: medicozFeatures,
  demo: "N/A",
  sourceCode: "https://github.com/omkeshri/medicoz",
};

const foodifyDescription =
  "A React-based food ordering website integrated with the Swiggy API. This application allows users to browse restaurant menus, place orders, and manage their cart. Redux is used for efficient state management, while Tailwind CSS ensures a responsive and modern design.";

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
  li7: "",
  li7About: "",
  li7Icon: "nothing",
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
  li6About: "",
  li6Icon: "nothing",

  li7: "",
  li7About: "",
  li7Icon: "nothing",
};

const foodifyParameters = {
  vid: foodifyVideo,
  title: "Foodify",
  subtitle: "Food at Your Doorstep",
  technologies: foodifyTechnologies,
  description: foodifyDescription,
  features: foodifyFeatures,
  demo: "https://food-ordering-website-omkeshri.web.app",
  sourceCode: "https://github.com/omkeshri/food-ordering-webiste-react",
};

const youtubeDescription = "";

const youtubeFeatures = {
  title: "Features",

  li1: "",
  li1About: "",
  li1Icon: "nothing",

  li2: "",
  li2About: "",
  li2Icon: "nothing",

  li3: "",
  li3About: "",
  li3Icon: "nothing",

  li4: "",
  li4About: "",
  li4Icon: "nothing",

  li5: "",
  li5About: "",
  li5Icon: "nothing",

  li6: "",
  li6About: "",
  li6Icon: "nothing",

  li7: "",
  li7About: "",
  li7Icon: "nothing",
};

const youtubeTechnologies = {
  title: "Technologies Used",

  li1: "",
  li1About: "",
  li1Icon: "nothing",

  li2: "",
  li2About: "",
  li2Icon: "nothing",

  li3: "",
  li3About: "",
  li3Icon: "nothing",

  li4: "",
  li4About: "",
  li4Icon: "nothing",

  li5: "",
  li5About: "",
  li5Icon: "nothing",

  li6: "",
  li6About: "",
  li6Icon: "nothing",

  li7: "",
  li7About: "",
  li7Icon: "nothing",
};

const youtubeParameters = {
  vid: uploadedSoon,
  title: "Youtube Clone",
  subtitle: "Just a Clone",
  technologies: youtubeTechnologies,
  description: youtubeDescription,
  features: youtubeFeatures,
  demo: "N/A",
  sourceCode: "N/A",
};

const netflixDescription = "";

const netfilxFeatures = {
  title: "Features",

  li1: "",
  li1About: "",
  li1Icon: "nothing",

  li2: "",
  li2About: "",
  li2Icon: "nothing",

  li3: "",
  li3About: "",
  li3Icon: "nothing",

  li4: "",
  li4About: "",
  li4Icon: "nothing",

  li5: "",
  li5About: "",
  li5Icon: "nothing",

  li6: "",
  li6About: "",
  li6Icon: "nothing",

  li7: "",
  li7About: "",
  li7Icon: "nothing",
};

const netfilxTechnologies = {
  title: "Technologies Used",

  li1: "",
  li1About: "",
  li1Icon: "nothing",

  li2: "",
  li2About: "",
  li2Icon: "nothing",

  li3: "",
  li3About: "",
  li3Icon: "nothing",

  li4: "",
  li4About: "",
  li4Icon: "nothing",

  li5: "",
  li5About: "",
  li5Icon: "nothing",

  li6: "",
  li6About: "",
  li6Icon: "nothing",

  li7: "",
  li7About: "",
  li7Icon: "nothing",
};

const netfilxParameters = {
  vid: uploadedSoon,
  title: "Netflix-GPT",
  subtitle: "Netflix with GPT Search Recommendation",
  technologies: netfilxTechnologies,
  description: netflixDescription,
  features: netfilxFeatures,
  demo: "https://netflix-gpt-omkeshari.web.app",
  sourceCode: "https://github.com/omkeshri/netflix-gpt-react",
};

const socialDashboardDescription =
  "This project is a responsive social media dashboard that allows users to switch between dark and light themes. The dashboard is built using HTML and SCSS, providing a modern and visually appealing interface.";

const socialDashboardFeatures = {
  title: "Features",
  li1: "Dark/Light Theme Toggle:",
  li1About:
    "Users can easily switch between dark and light themes to suit their preferences.",
  li1Icon: Toggle,

  li2: "Responsive Design:",
  li2About:
    "Optimized for different screen sizes, ensuring a great user experience on both desktop and mobile devices.",
  li2Icon: Responsive,

  li3: "SCSS for Styling:",
  li3About: "Utilizes SCSS for more efficient and maintainable CSS.",
  li3Icon: Scss,

  li4: "",
  li4About: "",
  li4Icon: "nothing",

  li5: "",
  li5About: "",
  li5Icon: "nothing",

  li6: "",
  li6About: "",
  li6Icon: "nothing",

  li7: "",
  li7About: "",
  li7Icon: "nothing",
};

const socialDashboardTechnologies = {
  title: "Technologies Used",
  li1: "HTML:",
  li1About: "For structuring the content.",
  li1Icon: Html,
  li2: "SCSS:",
  li2About:
    "For styling, allowing more efficient and organized CSS with variables, nesting, and mixins.",
  li2Icon: Scss,
  li3: "JavaScript:",
  li3About:
    "For adding interactivity and handling the dark/light mode toggle functionality.",
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
  li7: "",
  li7About: "",
  li7Icon: "nothing",
};

const socialDashboardParameters = {
  vid: socialDashboardVideo,
  title: "Social Media Dashboard",
  subtitle: "Dark/Light Toggle",
  technologies: socialDashboardTechnologies,
  description: socialDashboardDescription,
  features: socialDashboardFeatures,
  demo: "N/A",
  sourceCode:
    "https://github.com/omkeshri/social-media-dashboard-dark-light-toggle",
};

const customerManagerDescription =
  "This C program is a Customer Management System designed to manage customer orders, calculate bills, apply discounts, and print receipts. The system handles order taking, item cancellation, and payment processing, making it a comprehensive solution for small cafe operations.";

const customerManagerFeatures = {
  title: "Features",
  li1: "Menu Display:",
  li1About: "Displays a menu of available items with their prices",
  li1Icon: Menu,

  li2: "Order Management:",
  li2About: "Allows customers to place orders and specify quantities.",
  li2Icon: Manage,

  li3: "Cancellation:",
  li3About: "Customers can cancel items from their orders.",
  li3Icon: Cancel,

  li4: "Billing and Discount Calculation:",
  li4About:
    "Calculates the total bill, applies discounts based on the bill amount, and adds GST.",
  li4Icon: Calculate,

  li5: "Receipt Printing:",
  li5About:
    "Prints a detailed receipt with all order details, cancellations, and final amount including taxes.",
  li5Icon: Receipt,

  li6: "Customer Information",
  li6About: "Records customer name, address, and mobile number.",
  li6Icon: SaveInfo,

  li7: "",
  li7About: "",
  li7Icon: "nothing",
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
  li7: "",
  li7About: "",
  li7Icon: "nothing",
};

const customerManagerParameters = {
  vid: customerManagerVideo,
  title: "Customer Management System",
  subtitle: "Manage Your Customer",
  technologies: customerManagerTechnologies,
  description: customerManagerDescription,
  features: customerManagerFeatures,
  demo: "N/A",
  sourceCode: "https://github.com/omkeshri/customer-management-system-C",
};

const blackJackDescription =
  "This is a simple implementation of the classic card game BlackJack using HTML, CSS, and JavaScript. The game allows a player to start a game, draw new cards, and aims to get a sum of cards as close to 21 as possible without exceeding it.";

const blackJackFeatures = {
  title: "Features",

  li1: "Start Game:",
  li1About: "Initializes a new game with two random cards.",
  li1Icon: "Start",

  li2: "Draw New Card:",
  li2About:
    "Allows the player to draw a new card if their sum is less than 21.",
  li2Icon: "Draw",

  li3: "Game Status:",
  li3About:
    "Displays messages to the player about the current game status, such as whether they can draw a new card, have won (BlackJack), or have lost.",
  li3Icon: "Status",

  li4: "",
  li4About: "",
  li4Icon: "nothing",

  li5: "",
  li5About: "",
  li5Icon: "nothing",

  li6: "",
  li6About: "",
  li6Icon: "nothing",

  li7: "",
  li7About: "",
  li7Icon: "nothing",
};

const blackJackTechnologies = {
  title: "Technologies Used",

  li1: "HTML:",
  li1About:
    "Contains the structure of the game, including buttons for starting the game and drawing new cards, and elements to display the game status, cards, and sum.",
  li1Icon: "Html",

  li2: "CSS:",
  li2About: "Basic styling to make the game look visually appealing.",
  li2Icon: "Css",

  li3: "JavaScript:",
  li3About: "For adding interactivity and handling game logic.",
  li3Icon: "Js",

  li4: "",
  li4About: "",
  li4Icon: "nothing",

  li5: "",
  li5About: "",
  li5Icon: "nothing",

  li6: "",
  li6About: "",
  li6Icon: "nothing",

  li7: "",
  li7About: "",
  li7Icon: "nothing",
};

const blackJackParameters = {
  vid: blackJackVideo,
  title: "Black Jack",
  subtitle: "A Fun & Interactive Game",
  technologies: blackJackTechnologies,
  description: blackJackDescription,
  features: blackJackFeatures,
  demo: "N/A",
  sourceCode: "https://github.com/omkeshri/black-jack-game",
};

const leadTrackerDesciption =
  "This project is a simple lead tracker web application built with HTML, CSS, and JavaScript. The app allows users to save and manage URLs of websites they want to keep track of and also to take quick notes for later use. Users can add URLs manually through an input field or automatically save the current browser tab's URL. The app also provides functionality to clear all saved leads.";

const leadTrackerFeatures = {
  title: "Features",

  li1: "Add Leads Manually:",
  li1About:
    "Users can type a URL or take a quick note into an input field and click a button to save it.",
  li1Icon: Manual,

  li2: "Add Leads Automatically:",
  li2About:
    "Users can click a button to save the URL of the current browser tab.",
  li2Icon: Automatic,

  li3: "View Leads:",
  li3About: "Saved URLs are displayed as a list of clickable links.",
  li3Icon: View,

  li4: "Delete Leads:",
  li4About:
    "Users can clear all saved URLs with a double-click on the delete button.",
  li4Icon: Cancel,

  li5: "Persistent Storage:",
  li5About:
    "Saved URLs are stored in the browser's local storage, allowing them to persist between sessions.",
  li5Icon: Storage,

  li6: "",
  li6About: "",
  li6Icon: "nothing",

  li7: "",
  li7About: "",
  li7Icon: "nothing",
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
  li3About:
    "For adding interactivity and handling dynamic functionalities like order management.",
  li3Icon: Js,

  li4: "Local Storage:",
  li4About:
    "For storing customer information, order details, and cancelled items persistently.",
  li4Icon: Storage,

  li5: "",
  li5About: "",
  li5Icon: "nothing",

  li6: "",
  li6About: "",
  li6Icon: "nothing",

  li7: "",
  li7About: "",
  li7Icon: "nothing",
};

const leadTrackerParameters = {
  vid: uploadedSoon,
  title: "Leads Tracker",
  subtitle: "Chrome Extension for taking notes",
  technologies: leadTrackerTechnologies,
  description: leadTrackerDesciption,
  features: leadTrackerFeatures,
  demo: "N/A",
  sourceCode: "https://github.com/omkeshri/leads-tracker-extension",
};

const quizGameDescription =
  "This Python-based quiz game is an interactive and fun way to test your knowledge on various topics. The game uses the random module to present questions in a random order, ensuring a unique experience every time you play. Additionally, the pygame library's mixer module is used to add background music, making the game more engaging.";

const quizGameFeatures = {
  title: "Features",

  li1: "Randomized Questions:",
  li1About:
    "Questions are presented in a random order to keep the game fresh and challenging.",
  li1Icon: Random,

  li2: "Background Music:",
  li2About:
    "Enjoy background music while playing, thanks to the pygame library's mixer module.",
  li2Icon: Music,

  li3: "Interactive Gameplay:",
  li3About: "User-friendly interface for answering quiz questions.",
  li3Icon: Game,

  li4: "Scoring System:",
  li4About: "Track your score as you play to see how well you perform.",
  li4Icon: Score,

  li5: "",
  li5About: "",
  li5Icon: "nothing",

  li6: "",
  li6About: "",
  li6Icon: "nothing",

  li7: "",
  li7About: "",
  li7Icon: "nothing",
};

const quizGameTechnologies = {
  title: "Technologies Used",

  li1: "Python:",
  li1About: "For implementing the game logic and functionality.",
  li1Icon: Python,

  li2: "Pygame:",
  li2About: "For creating the game interface and handling graphics and sound.",
  li2Icon: Game,

  li3: "",
  li3About: "",
  li3Icon: "nothing",

  li4: "",
  li4About: "",
  li4Icon: "nothing",

  li5: "",
  li5About: "",
  li5Icon: "nothing",

  li6: "",
  li6About: "",
  li6Icon: "nothing",

  li7: "",
  li7About: "",
  li7Icon: "nothing",
};

const quizGameParameters = {
  vid: uploadedSoon,
  title: "Quiz Game",
  subtitle: "A Fun & Interactive Game",
  technologies: quizGameTechnologies,
  description: quizGameDescription,
  features: quizGameFeatures,
  demo: "N/A",
  sourceCode: "https://github.com/omkeshri/quiz-game-python",
};

export const projectParameters = {
  1: medicozParameters,
  2: foodifyParameters,
  3: youtubeParameters,
  4: netfilxParameters,
  5: socialDashboardParameters,
  6: customerManagerParameters,
  7: blackJackParameters,
  8: leadTrackerParameters,
  9: quizGameParameters,
};
