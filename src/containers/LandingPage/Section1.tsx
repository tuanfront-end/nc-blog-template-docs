import React from "react";
import {
 
  ArrowDownIcon
} from "@heroicons/react/solid";

const Section1 = () => {
  return (
    <section className="w-full pb-12 ">
      {/* <!-- Main Hero Content --> */}
      <div className="container max-w-lg py-10 md:pt-28 mx-auto text-left md:max-w-none md:text-center">
        <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-800 text-indigo-50 text-xs font-medium tracking-wider">✨ WORDPRESS THEME</span>
        <h1 className="block mt-2 text-5xl font-extrabold leading-10 tracking-tight text-left md:text-center sm:leading-none md:text-6xl lg:text-7xl">
          <span className="inline md:block">Modern & Creative</span>{" "}
          <span className="mt-2 text-blue-500 md:inline-block">
            Blog, News & Magazine
          </span>
        </h1>
        <div className="mx-auto mt-5 text-gray-400 md:mt-12 md:max-w-2xl md:text-center lg:text-lg">
          Ncmaz Powerful functionality of a combination of WordPress, WpGraphql, React & Tailwindcss. A perfect
          starting point for your next blog, news, magazine site.
        </div>
        <div className="flex flex-col items-center mt-12 text-center">
          <span className="relative inline-flex w-full md:w-auto">
            <a
              href="https://themeforest.net/item/ncmaz-blog-magazine-wordpress-theme/34122841"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full px-8 py-4 text-base font-bold leading-6 text-white bg-blue-700 border border-transparent md:w-auto hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 rounded-full"
            >
              Purchase theme now
            </a>
          </span>
          <a href="#demos" className="flex items-center space-x-2 mt-6 text-sm text-blue-500">
            <span>View demos</span>
            <ArrowDownIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
      {/* <!-- End Main Hero Content --> */}
    </section>
  );
};

export default Section1;
