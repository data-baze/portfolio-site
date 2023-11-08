// components/DarkModeToggle.js
"use client";
import { useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(true); // Set to true by default

  return (
    <div className="block">
      { ! isDarkMode ? (
        <button
          id="darkmode"
          onClick={() => setIsDarkMode(true)}
          className={`flex items-center px-3 py-2 border rounded text-slate-200 border-slate-200 hover:text-white hover:border-white bg-${
            isDarkMode ? "dark" : "white"
          } text-${isDarkMode ? "white" : "black"}`}
        >
          <MoonIcon className="h-5 w-5" />
        </button>
      ) : (
        <button
          id="darkmode"
          onClick={() => setIsDarkMode(false)}
          className={`flex items-center px-3 py-2 border rounded text-slate-200 border-slate-200 hover:text-white hover:border-white bg-${
            isDarkMode ? "dark" : "white"
          } text-${isDarkMode ? "dark" : "white"}`}
        >
          <SunIcon className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}

export default DarkModeToggle;
