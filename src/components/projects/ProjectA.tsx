import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects = () => {
  const projHeader =
    "Let's create more tools and ideas that brings us together.";
  const projDes =
    "Flowbite helps you connect with friends and communities of people who share your interests. Connecting with your friends and family as well as discovering new ones is easy with features like Groups.";
  const projLink = "#";
  return (
    <div>
      <div
        className="gap-8 items-center
        mx-auto 
        max-w-screen-xl
        md:grid md:grid-cols-2
        xl:gap-16"
      >
        <img
          className="w-full dark:hidden"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg"
          alt="dashboard image"
        />
        <img
          className="w-full hidden dark:block"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg"
          alt="dashboard image"
        />
        <div className="mt-4 md:mt-0">
          <h3
            className="mb-4 text-gray-600
          tracking-tight 
          font-bold 
          text-xl
          sm:text-3xl
          md:text-2xl
          lg:text-4xl"
          >
            {projHeader}
          </h3>
          <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
            {projDes}
          </p>
          <Link
            href={projLink}
            className="inline-flex items-center text-white 
            bg-primary-900 
            hover:bg-gradient-to-tr hover:from-primary-800 hover:to-pink-700
            transition-transform hover:scale-110 cursor-pointer
            focus:ring-4 focus:ring-primary-300 font-medium 
            rounded-lg text-sm px-5 py-2.5 text-center"
          >
            View case study
            <svg
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
