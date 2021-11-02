import React from "react";
import Heading from "./Heading";

const data = [
  {
    q: "Fast & Powerful?",
    a: `Ncmaz built with React, WpGrapql and the latest
    Tailwindcss, Headless Ui. Will bring great and fast user experiences. Perfect starting point for your
    next blog, news, magazine, podcast, music... site.`,
  },
  {
    q: "Free updates and support?",
    a: `Yes, we do! Free updates and support is lifetime. 🎉.`,
  },
 
];

const Section4 = () => {
  return (
    <section className="relative py-16">
      <Heading
        className="sm:text-center"
        sub=" Got a Question? We’ve got answers."
      >
        Frequently Asked Questions
      </Heading>

      {data.map((item, index) => (
        <div
          key={index}
          className="w-full px-6 py-6 mx-auto mt-10 bg-gray-800 bg-opacity-60 border border-gray-700 sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3 rounded-3xl"
        >
          <h3 className="text-lg font-bold text-blue-600 sm:text-xl md:text-2xl">
            {item.q}
          </h3>
          <p className="mt-2 text-base text-gray-300 sm:text-lg md:text-normal">
            {item.a}
          </p>
        </div>
      ) )}
      
      <div
          className="w-full px-6 py-6 mx-auto mt-10 bg-gray-800 bg-opacity-60 border border-gray-700 sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3 rounded-3xl"
        >
          <h3 className="text-lg font-bold text-blue-600 sm:text-xl md:text-2xl">
          Community and support forum?
          </h3>
          <p className="mt-2 text-base text-gray-300 sm:text-lg md:text-normal">
          Please check our <a className="text-blue-500" href="https://nghiaxchis.gitbook.io/ncmaz-wordpress/" target="_blank" rel="noopener noreferrer">
          docs page here</a> . If you need support, please open a ticket  <a className="text-blue-500" href="https://help.chisnghiax.com/" target="_blank" rel="noopener noreferrer">here</a>  and we will help you quickly
          </p>
        </div>
    </section>
  );
};

export default Section4;
