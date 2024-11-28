import React from "react";

const ProjectAbout = ({content}) => {
  return (
    <div className="space-y-6 mb-6">
      <h1 className="text-center text-4xl font-serif font-bold mb-6 border-b-2 pb-2 border-black">
        {content.title}
      </h1>
      <ul className="space-y-4 text-sm md:text-lg">
        <li className="flex items-center space-x-2">
          <span className="text-2xl">{<content.li1Icon />}</span>
          <span className="font-medium"><strong>{content.li1}</strong> {content.li1About}</span>
        </li>
        <li className="flex items-center space-x-2">
          <span className="text-2xl">{<content.li2Icon />}</span>
          <span className="font-medium"><strong>{content.li2}</strong> {content.li2About}</span>
        </li>
        <li className="flex items-center space-x-2">
          <span className="text-2xl">{<content.li3Icon />}</span>
          <span className="font-medium"><strong>{content.li3}</strong> {content.li3About}</span>
        </li>
        <li className="flex items-center space-x-2">
          <span className="text-2xl">{<content.li4Icon />}</span>
          <span className="font-medium"><strong>{content.li4}</strong> {content.li4About}</span>
        </li>
        <li className="flex items-center space-x-2">
          <span className="text-2xl">{<content.li5Icon />}</span>
          <span className="font-medium"><strong>{content.li5}</strong> {content.li5About}</span>
        </li>
        <li className="flex items-center space-x-2">
          <span className="text-2xl">{<content.li6Icon />}</span>
          <span className="font-medium"><strong>{content.li6}</strong> {content.li6About}</span>
        </li>
        <li className="flex items-center space-x-2">
          <span className="text-2xl">{<content.li7Icon />}</span>
          <span className="font-medium"><strong>{content.li7}</strong> {content.li7About}</span>
        </li>
      </ul>
    </div>
  );
};

export default ProjectAbout;
