"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const ProjectsData = [
  {
    id: 1,
    title: "Movie Browser Website",
    description:
      "Movie Database website to browse details about your favorite movies",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/data-baze/moviesite",
    previewUrl: "https://moviesite-mauve.vercel.app/",
  },
  {
    id: 2,
    title: "Nextjs Portfolio Website",
    description: "Personal portfolio website showcasing my projects ",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://data-portfolio-site.vercel.app/",
  },
  {
    id: 3,
    title: "Creative Designer Website",
    description: "A website for a creative designer",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Minimalist Design Website",
    description: "Minimalist Design Website",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/data-baze/Web-minimalist-design",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Text to Speech System ",
    description: "A simple text to speech system",
    image: "/images/projects/5.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/data-baze/Text-to-speech-app",
    previewUrl: "/",
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = ProjectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <div>
      <h2 className="text-center text-white font-bold text-4xl mt-4 mb-4 ">
        {" "}
        My Projects{" "}
      </h2>
      <div className="text-white flex flex-row justify-center items-center  gap-2 py-6 ">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
         <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
         <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        {ProjectsData.map((project) => (
          <ProjectCard
            key={project.id}
            imgUrl={project.image}
            title={project.title}
            description={project.description}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
