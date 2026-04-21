"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import CourseWork from "@/components/CourseWork";
import Achievements from "@/components/Achievements";
import Experience from "@/components/StudentCells";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import StudentCells from "@/components/StudentCells";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <CourseWork />
        <StudentCells />
        <Achievements />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
