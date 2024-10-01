import React from 'react';

const ProjectTitle = ({title, subTitle}) => {
  return (
    <div className="space-y-6 mb-6 px-4">
      <h1 className="text-center text-7xl font-serif font-semibold text-gray-900 transition-transform transform hover:scale-105">
        {title}
      </h1>
      <h2 className="text-center text-4xl font-serif font-light text-gray-700">
        {subTitle}
      </h2>
    </div>
  );
}

export default ProjectTitle;
