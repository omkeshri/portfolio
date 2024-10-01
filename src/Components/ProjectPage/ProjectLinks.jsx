import React from "react";
import { Link } from "react-router-dom";

const ProjectLinks = () => {
  return (
    <div className="space-y-8 mb-12">
      <h1 className="text-center text-4xl md:text-5xl font-serif font-semibold text-gray-900">
        Explore the project
      </h1>
      <div className="text-center space-y-4">
        <p className="text-xl font-medium md:font-normal md:text-3xl">
          Check out the website by clicking on{" "}
          <Link
            className="underline text-blue-600 hover:text-blue-800 transition-colors"
            to={"https://food-ordering-website-omkeshri.web.app/"}
            target="_blank"
          >
            Demo
          </Link>
          .
        </p>
        <p className="text-xl font-medium md:font-normal md:text-3xl">
          Contribute by visiting the{" "}
          <Link
            className="underline text-blue-600 hover:text-blue-800 transition-colors"
            to={"https://github.com/omkeshri/food-ordering-webiste-react"}
            target="_blank"
          >
            Source Code
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default ProjectLinks;
