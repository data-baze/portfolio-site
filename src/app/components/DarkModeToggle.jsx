// components/DarkModeToggle.js
"use client"
import { useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <div className="block ">
      { isDarkMode ? (
        <button
          id="darkmode"
          onClick={() => setIsDarkMode(false)}
          className={`flex items-center px-3 py-2 border rounded text-slate-200 border-slate-200 hover:text-white hover:border-white bg-${
            isDarkMode ? "dark" : "white"
          } text-${isDarkMode ? "white" : "black"} `}
        >
          <SunIcon className="h-5 w-5" />
        </button>
      ) : (
        <button
          id="darkmode"
          className={`flex items-center px-3 py-2 border rounded text-slate-200 border-slate-200 hover:text-white hover:border-white bg-${
            isDarkMode ? "dark" : "white"
          } text-${isDarkMode ? "white" : "black"} `}
          onClick={() => setIsDarkMode(true)}
        >
          <MoonIcon className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}

export default DarkModeToggle;
