import React from 'react'
import sd from "../../Images/SocialDashboard.png";
const ProjectCard = ({setShowInfo, title, title2, subtitle, languages, languages2, imgSrc }) => {
    console.log(imgSrc)
  return (
    <div class="card cursor-pointer overflow-hidden"
    onClick={() => setShowInfo()}>
        <img className="w-[95%] h-[160px] rounded-xl " src={imgSrc}></img>
        <h1 className="text-xl font-medium tracking-wide pt-2 text-[#00fbff]">
          {title}
        </h1>
        <h2 className="text-md font-medium">{subtitle}</h2>
        <p className="mt-2 text-[#a2ff00] font-medium">Languages Used: {languages}</p>
        <p className="mb-3 text-[#a2ff00] font-medium">{languages2}</p>
        <a href={"/"} target="_blank">
          <button class="project-button">
            <div class="svg-wrapper-1">
              <div class="svg-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill="currentColor"
                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                  ></path>
                </svg>
              </div>
            </div>
            <span className='font-medium text-base'>Go to Website</span>
          </button>
        </a>
      </div>
  )
}

export default ProjectCard