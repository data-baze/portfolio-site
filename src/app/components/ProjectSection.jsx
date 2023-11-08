"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const ProjectsData = [
  {
    id: 1,
    title: "Movie Browser Website",
    description:
      "Movie Database website to browse details about your favorite movies",
    image: "/images/projects/movie.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/data-baze/moviesite",
    previewUrl: "https://moviesite-mauve.vercel.app/",
  },
  {
    id: 2,
    title: "Nextjs Portfolio Website",
    description: "Personal portfolio website showcasing my projects ",
    image: "/images/projects/portfolio-x.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/data-baze/portfolio-site",
    previewUrl: "https://data-portfolio-site.vercel.app/",
  },
  {
    id: 3,
    title: "Creative Designer Website",
    description: "A website for a creative designer",
    image: "/images/projects/creative.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Minimalist Design Website",
    description: "Minimalist Design Website",
    image: "/images/projects/minimalist.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/data-baze/Web-minimalist-design",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Text to Speech System ",
    description: "A simple text to speech system",
    image: "/images/projects/text.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/data-baze/Text-to-speech-app",
    previewUrl: "/",
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = ProjectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section>
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
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
          key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.2, delay: index * 0.3 }}
          >
            <ProjectCard
              key={project.id}
              imgUrl={project.image}
              title={project.title}
              description={project.description}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectSection;
