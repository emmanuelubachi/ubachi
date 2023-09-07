import React from "react";
import ExperienceCard from "../cards/ExperienceCard";
import EducationCard from "../cards/EducationCard";

const Resume = () => {
  const experienceList = [
    <ExperienceCard />,
    <ExperienceCard />,
    <ExperienceCard />,
    <ExperienceCard />,
    <ExperienceCard />,
  ];

  const educationList = [
    <EducationCard />,
    <EducationCard />,
    <EducationCard />,
    <EducationCard />,
    <EducationCard />,
    <EducationCard />,
    <EducationCard />,
    <EducationCard />,
    <EducationCard />,
    <EducationCard />,
    <EducationCard />,
  ];

  return (
    <section>
      <hr className="h-px max-w-screen-xl mx-auto bg-gray-200 border-0" />
      <div className="max-w-screen-xl m-auto px-4 py-8 lg:px-6 sm:py-16 lg:py-24">
        {/* Resume Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16 lg:mb-20">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-primary-900 sm:text-4xl">
            Resume
          </h2>
          <p
            className="mt-4 font-normal
            text-base
            sm:text-lg
          text-gray-500"
          >
            Crafted with skill and care to help our clients grow their business!
          </p>
        </div>
        {/* Experience */}
        <div className="mb-8">
          <div className="mb-4 md:mb-8 flex">
            <h3
              className="m-auto font-bold leading-tight tracking-tight 
            text-gray-600
            text-xl
            sm:text-2xl"
            >
              Experience
            </h3>
          </div>
          <div>
            <ol className=" md:grid grid-flow-row grid-cols-2">
              {experienceList.map((item) => (
                <li className="mb-10 ml-6 relative border-l border-gray-200">
                  {item}
                </li>
              ))}
            </ol>
          </div>
        </div>
        {/* Education & Certifications */}
        <div className="mb-8">
          <div className="mb-4 flex">
            <h3
              className="m-auto font-bold leading-tight tracking-tight 
            text-gray-600
            text-xl
            sm:text-2xl"
            >
              Education
            </h3>
          </div>
          <div className="">
            <ol className="items-center flex flex-row overflow-y-auto">
              {educationList.map((item) => (
                <li className="mb-8">{item}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
