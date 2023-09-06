import Image from "next/image";
import React from "react";
import HeroImg from "/public/eu1.png";
import ProjectA from "../projects/ProjectA";
import ProjectB from "../projects/ProjectB";

const Projects = () => {
  return (
    <section>
      <div className="max-w-screen-xl m-auto px-4 py-8 lg:px-6 sm:py-16 lg:py-20">
        <div className="max-w-2xl mx-auto text-center mb-16 lg:mb-20">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-primary-800 sm:text-4xl">
            Our work
          </h2>
          <p
            className="mt-4 font-normal
            text-base
            sm:text-lg
          text-gray-500  dark:text-gray-400"
          >
            Crafted with skill and care to help our clients grow their business!
          </p>
        </div>
        <ProjectA />
        <ProjectB />
      </div>
    </section>
  );
};

export default Projects;
