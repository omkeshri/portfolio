import React from "react";

const Shimmer = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      {/* <button
        type="button"
        className="text-white text-2xl font-semibold py-2 px-4 rounded-lg flex items-center disabled:opacity-50"
        disabled
      >
        <svg
          className="animate-spin h-5 w-5 mr-3 mt-1"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M14 2a10 10 0 0 1 0 20" />
        </svg>
        Loading...
      </button> */}
      <div class="loader">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
    </div>
  );
};

export default Shimmer;