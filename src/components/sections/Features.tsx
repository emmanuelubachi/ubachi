import React from "react";
import FeatureCard from "../cards/FeatureCard";

const Features = () => {
  const featuresList = [
    {
      title: "title 1",
      desc: "desc 1",
    },
    {
      title: "title 2",
      desc: "desc 2",
    },
    {
      title: "title 3",
      desc: "desc 3",
    },
    {
      title: "title 4",
      desc: "desc 4",
    },
    {
      title: "title 5",
      desc: "desc 5",
    },
  ];

  return (
    <section>
      <hr className="h-px max-w-screen-xl mx-auto bg-gray-200 border-0" />
      <div className="max-w-screen-xl m-auto px-4 py-8 lg:px-6 sm:py-16 lg:py-24">
        <div className="max-w-2xl mx-auto text-center mb-16 lg:mb-20">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-primary-900 sm:text-4xl">
            What I Do
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
        <div
          className="flex flex-row flex-wrap  
        items-center justify-center
        xl:gap-12 lg:gap-8 gap-4"
        >
          {featuresList.map((items, index) => (
            <FeatureCard key={index} title={items.title} desc={items.desc} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
