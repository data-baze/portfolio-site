"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>React</li>
        <li>Next js</li>
        <li>Redux</li>
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
      <ul className="list-disc pl-2">
        <li>University of Abuja, Abuja
          <p className="text-[#ADB7BE]">B.Sc Computer Science</p> </li>
        <li className="mt-2">Edo State Polytechnic, Usen 
        <p className="text-[#ADB7BE]">Diploma Computer Science</p> </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
          <li className="mt-2">
       AWS Cloud Technical Essentials - AWS, Coursera
          </li>
        <li className="mt-2">
        Introduction to Containers – Docker, Kubernetes and OpenShift - IBM, Coursera
          </li>
         <li className="mt-2">
         Django Application Development with SQL and Databases – IBM, Coursera
        </li>
         <li className="mt-2">
          Node Js – The Complete Guide (MVC, REST APIs, GRAPHQL, DENO), UDEMY
        </li>
        <li className="mt-2">The Ultimate 2022 Fullstack Web Development Bootcamp, UDEMY </li>
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
    <section id="about" className=" text-white ">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-images.png" alt="about image" width={500} height={600} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-3xl font-bold text-white mt-2 mb-2">About Me</h2>
          <p className="text-base lg:text-lg">
          I&apos;m a versatile software developer with expertise in Next.js, React, and Node.js. I use styling technologies like Tailwind CSS, Chakra UI, and Bootstrap for crafting interactive and responsive interfaces and Redux Tool Kit for state management. I am proficient in JavaScript, Typescript, jQuery, database management (PostgresSQL) and RESTful API&apos;s, with backend capabilities in Python and Django. I am well versed In Git and CLI as well as Postman and Swagger for API consumption. Eager to contribute to software development projects with a passion for technology and quality solutions   </p>
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
