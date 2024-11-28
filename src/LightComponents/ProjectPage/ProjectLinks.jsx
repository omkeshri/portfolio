import React from "react";
import { Link } from "react-router-dom";

const ProjectLinks = ({ demo, sourceCode }) => {
  return (
    <div className="space-y-8 mb-12">
      <h1 className="text-center text-4xl md:text-5xl font-serif font-semibold text-gray-900">
        Explore the project
      </h1>
      <div className="text-center space-y-4">
        {demo != "N/A" && (
          <p className="text-xl font-medium md:font-normal md:text-3xl">
            Check out the website by clicking on{" "}
            <Link
              className="underline text-blue-600 hover:text-blue-800 transition-colors"
              to={demo}
              target="_blank"
            >
              Demo
            </Link>
            .
          </p>
        )}
        {sourceCode != "N/A" && (
          <p className="text-xl font-medium md:font-normal md:text-3xl">
            Contribute by visiting the{" "}
            <Link
              className="underline text-blue-600 hover:text-blue-800 transition-colors"
              to={sourceCode}
              target="_blank"
            >
              Source Code
            </Link> .
          </p>
        )}
      </div>
    </div>
  );
};

export default ProjectLinks;
