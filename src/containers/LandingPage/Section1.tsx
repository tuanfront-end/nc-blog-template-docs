import React from "react";
import { Link } from "react-router-dom";

const Section1 = () => {
  return (
    <section className="w-full px-6 pb-12 antialiased bg-white">
      <div className="mx-auto max-w-7xl">
        {/* <!-- Main Hero Content --> */}
        <div className="container max-w-lg px-4 py-10 md:pt-28 mx-auto text-left md:max-w-none md:text-center">
          <h1 className="text-5xl font-extrabold leading-10 tracking-tight text-left text-gray-900 md:text-center sm:leading-none md:text-6xl lg:text-7xl">
            <span className="inline md:block">Modern & Creative</span>{" "}
            <span className="mt-2 text-blue-700 md:inline-block">
              Blog, Magazine
            </span>
          </h1>
          <div className="mx-auto mt-5 text-gray-500 md:mt-12 md:max-w-lg md:text-center lg:text-lg">
            Modern & Creative, Ncblog is an React + Typescript theme, a perfect
            starting point for your next blog, magazine site.
          </div>
          <div className="flex flex-col items-center mt-12 text-center">
            <span className="relative inline-flex w-full md:w-auto">
              <a
                href="https://themeforest.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-8 py-4 text-base font-bold leading-6 text-white bg-blue-700 border border-transparent md:w-auto hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 rounded-full"
              >
                Purchase Now
              </a>
            </span>
            <a href="#demos" className="mt-3 text-sm text-blue-700">
              Learn more
            </a>
          </div>
        </div>
        {/* <!-- End Main Hero Content --> */}
      </div>
    </section>
  );
};

export default Section1;
