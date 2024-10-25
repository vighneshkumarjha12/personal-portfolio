import React from "react";
import Image from "next/image";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/Spotify.png"
          title="Modern Spotify Clone"
          description="
          Meet MyProject, a carefully designed Spotify clone that makes exploring music and enjoying seamless listening easy.Get ready to discover and play your favorite tunes effortlessly! "
        />
        <ProjectCard
          src="/prediction.png"
          title="Lungs Cancer Prediction using Django"
          description="
          I created a user-friendly Lung Cancer Prediction System using Django. It helps detect cancer early with accurate results, blending medical knowledge and tech. Trust my skills to make a difference in predicting lung cancer, where accuracy meets simplicity. Explore the universe with my coding magic!"
        />
        <ProjectCard
          src="/pp.png"
          title="Space Themed Website"
          description="My space-themed website seamlessly blends stunning visuals and interactive tools, a testament to my web development expertise. Explore the universe with my coding magic!"
        />
      </div>
      
    </div>
  );
};

export default Projects;
