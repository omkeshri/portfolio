import React from 'react'

const ProjectDescription = ({content}) => {
  return (
    <div className="space-y-6 mb-10 px-20">
      <h1 className="text-center text-4xl font-serif font-bold mb-6 border-b-2 pb-2 border-black">
        About
      </h1>
      <h2 className=" text-2xl font-medium">
      {content}
      </h2>
    </div>
  )
}

export default ProjectDescription