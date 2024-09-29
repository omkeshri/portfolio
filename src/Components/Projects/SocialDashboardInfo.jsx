import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import pic from "../../Images/Medicoz.png";

const SocialDashboardInfo = ({ showInfo, setShowInfo }) => {
  return (
    <div className="cursor-pointer w-[80%]">
      <AnimatePresence mode="wait">
        {showInfo && (
          <motion.div
            key="modal"
            className="fixed top-0 left-0 h-screen w-full flex justify-center items-center"
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
            exit={{ y: "-100vh" }}
            transition={{ type: "spring", stiffness: 120, duration: 0.6 }}
          >
            <div
              className="w-[80%] h-[80%] bg-[#fff] rounded-xl overflow-hidden flex items-center flex-col py-5 px-10 gap-y-4" 
              onClick={() => setShowInfo()}
            >
              <h1 className="text-4xl font-medium text-[#381B5C] ">
                Foodify - Food at Your Doorstep
              </h1>
              <h2 className="text-lg font-medium text-[#552890] tracking-wide"> 
                This project is a React-based food ordering website integrated
                with the Swiggy API. The application allows users to browse
                restaurant menus, place orders, and manage their cart with ease.
                Redux is utilized for efficient state management, and Tailwind
                CSS is used for crafting a responsive and modern design.
              </h2>
              <div className="w-full">
                <h3 className="text-2xl font-medium text-black"> {/* Dark Text */}
                  Features:
                </h3>
                <ul className="list-disc pl-5 text-base font-medium tracking-wide text-[#fff]"> {/* Dark List Items */}
                  <li>
                    <strong className="font-medium text-black    underline underline-offset-2">Browse Restaurants</strong>: Explore a wide range
                    of restaurant menus directly from the Swiggy API.
                  </li>
                  <li>
                    <strong>Search and Filter</strong>: Easily search for
                    specific dishes or filter by restaurant type.
                  </li>
                  <li>
                    <strong>Add to Cart</strong>: Seamlessly add or remove
                    items from the cart with real-time updates.
                  </li>
                  <li>
                    <strong>Order Management</strong>: Review and place orders
                    with a streamlined checkout process.
                  </li>
                  <li>
                    <strong>Responsive Design</strong>: Optimized for both
                    desktop and mobile devices using Tailwind CSS.
                  </li>
                </ul>
              </div>
              <div className="w-full">
                <h3 className="text-2xl font-medium text-[#111827]"> {/* Dark Text */}
                  Technologies Used:
                </h3>
                <ul className="list-disc pl-5 text-base font-medium tracking-wide text-[#1f2937]"> {/* Darker Gray */}
                  <li>
                    <strong>React</strong>: Front-end framework for building
                    the user interface.
                  </li>
                  <li>
                    <strong>JSX</strong>: Syntax extension for JavaScript,
                    used for building UI components.
                  </li>
                  <li>
                    <strong>Redux</strong>: State management for handling the
                    application's state.
                  </li>
                  <li>
                    <strong>Swiggy API</strong>: Integrated to fetch real-time
                    restaurant and menu data.
                  </li>
                  <li>
                    <strong>Tailwind CSS</strong>: Utility-first CSS framework
                    for responsive and modern design.
                  </li>
                  <li>
                    <strong>JavaScript (ES6+)</strong>: Core language used for
                    development.
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SocialDashboardInfo;
