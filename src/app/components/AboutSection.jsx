"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul>
        <li>React</li>
        <li>Next js</li>
        <li>JavaScript</li>
        <li>Python</li>
        <li>Django</li>
        <li>Node.js</li>
        <li>PostgreSQL</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul>
        <li>University of Abuja, Abuja </li>
        <li>Edo State Polytechnic, Usen </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul>
        <li>The Ultimate 2022 Fullstack Web Development Bootcamp, UDEMY </li>
        <li>
          Node Js – The Complete Guide (MVC, REST APIs, GRAPHQL, DENO), UDEMY
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className=" text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" alt="about image" width={500} height={500} />

        <div>
          <h2 className="text-3xl font-bold text-white mt-2 mb-2">About Me</h2>
          <p className="text-base lg:text-lg">
            Experienced web developer proficient in building attractive and
            responsive websites using HTML5, CSS3, and JavaScript. Skilled in
            Django and Python for creating dynamic web applications. Familiar
            with databases (sqlite, postgres) and implementing RESTful APIs for
            data communication. Proficient in version control (Git, GitHub) and
            using modern web tools like React.js. Completed real-world projects,
            showcasing expertise in crafting functional websites. Ready to bring
            innovation and create exceptional web solutions.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-3">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
