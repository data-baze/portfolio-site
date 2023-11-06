import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";

export default function Home({isDarkMode}) {
  return (
    <main className={`flex min-h-screen flex-col bg-${isDarkMode ? 'dark' : 'white'} `} >
      <Navbar />
      <div className="container mt-24 mx-auto py-4 px-10  ">
      <HeroSection/>
      <AboutSection />
      <ProjectSection />
      <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
