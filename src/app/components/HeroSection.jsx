"use client"
import React, { useState } from "react";
import Images from "next/image";
import AnimatedText from "./AnimatedText";
import Link from "next/link";

const HeroSection = ({isDarkMode}) => {


  return (
    <section className={`lg:py-16 bg-${isDarkMode ? "dark" : "white"}`}>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
          <h1 className={`mb-4 text-4xl sm:text-5xl lg:text-6xl leading-snug font-extrabold ${isDarkMode ? "text-white" : ""}`}>
            <span className={`text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600`}>
              Hello, I&apos;m {""}
            </span>
            <br />
            <AnimatedText />
          </h1>
          <p className={`text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6 ${isDarkMode ? "text-white" : ""}`}>
            Welcome to my little corner of the internet! 🚀 
          </p>
          <div>
            <Link href="/bassey-data.pdf">
              <button className={`px-6 py-3 w-full sm:w-fit rounded-full mr-4 ${isDarkMode ? "bg-white text-black" : "bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 bg-white hover:bg-slate-800 text-white"}`}>
                Download CV
              </button>
            </Link>
            <Link
              href="https://www.linkedin.com/in/data-bassey/"
            >
              <button className={`px-1 py-1 w-full sm:w-fit rounded-full ${isDarkMode ? "bg-white text-black" : "bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-800 text-white"} border mt-3`}>
                <span className={`block bg-dark hover:bg-slate-800 rounded-full px-5 py-2`}>
                  Hire Me
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div className="col-span-4 place-self-center mt-4 lg:mt-0">
          <div className={`rounded-full ${isDarkMode ? "bg-[#000000]" : "bg-[#181818]"} h-[250px] w-[250px] lg:w-[300px] lg:h-[300px] relative`}>
            <Images
              src="/images/main-avatar.png"
              alt=" hero Image"
              height={400}
              width={400}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
