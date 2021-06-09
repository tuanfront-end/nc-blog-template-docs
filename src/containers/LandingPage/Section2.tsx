import React from "react";

const Section2 = () => {
  return (
    <section id="features" className="py-20 bg-white max-w-6xl mx-auto">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold tracking-tight text-center">
          Our Features
        </h2>
        <p className="mt-2 text-lg text-center text-gray-600">
          Check out our list of awesome features below.
        </p>
        <div className="grid grid-cols-4 gap-8 mt-10 sm:grid-cols-8 lg:grid-cols-12 sm:px-8 xl:px-0">
          <div className="relative flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 overflow-hidden bg-gray-100 rounded-3xl">
            <div className="p-3 text-white bg-blue-700 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                <path
                  d="M5 8v-3a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-5"
                  className=""
                ></path>
                <circle cx="6" cy="14" r="3"></circle>
                <path
                  d="M4.5 17l-1.5 5l3 -1.5l3 1.5l-1.5 -5"
                  className=""
                ></path>
              </svg>
            </div>
            <h4 className="text-xl font-medium text-gray-700">
              React Template
            </h4>
            <p className="text-base text-center text-gray-500">
              Built with React, Redux toolkit, Typescript, and the latest
              Tailwindcss, Headless Ui
            </p>
          </div>

          <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 rounded-3xl">
            <div className="p-3 text-white bg-blue-700 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                />
              </svg>
            </div>
            <h4 className="text-xl font-medium text-gray-700">
              100% responsive
            </h4>
            <p className="text-base text-center text-gray-500">
              Works on all devices and touch sensors. High quality images, fonts
              & text.
            </p>
          </div>

          <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 rounded-3xl">
            <div className="p-3 text-white bg-blue-700 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            </div>
            <h4 className="text-xl font-medium text-gray-700">Dark mode</h4>
            <p className="text-base text-center text-gray-500">
              Darkmode modern. Helps you quickly turn the theme mode to dark at
              night time.
            </p>
          </div>

          <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 rounded-3xl">
            <div className="p-3 text-white bg-blue-700 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M8 9l3 3l-3 3"></path>
                <line x1="13" y1="15" x2="16" y2="15"></line>
                <rect x="3" y="4" width="18" height="16" rx="2"></rect>
              </svg>
            </div>
            <h4 className="text-xl font-medium text-gray-700">
              Customizing the theme
            </h4>
            <p className="text-base text-center text-gray-500">
              Completely customize the template and whole Taiwindcss, quickly
              modifying its config variables.
            </p>
          </div>

          <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 rounded-3xl">
            <div className="p-3 text-white bg-blue-700 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <line x1="9.5" y1="11" x2="9.51" y2="11"></line>
                <line x1="14.5" y1="11" x2="14.51" y2="11"></line>
                <path d="M9.5 15a3.5 3.5 0 0 0 5 0"></path>
                <path d="M7 5h1v-2h8v2h1a3 3 0 0 1 3 3v9a3 3 0 0 1 -3 3v1h-10v-1a3 3 0 0 1 -3 -3v-9a3 3 0 0 1 3 -3"></path>
              </svg>
            </div>
            <h4 className="text-xl font-medium text-gray-700">
              Free updates and support
            </h4>
            <p className="text-base text-center text-gray-500">
              I work closely with my customers to provide a high standard of
              support and quick bug fixes.
            </p>
          </div>

          <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 rounded-3xl">
            <div className="p-3 text-white bg-blue-700 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <line x1="15" y1="5" x2="15" y2="7"></line>
                <line x1="15" y1="11" x2="15" y2="13"></line>
                <line x1="15" y1="17" x2="15" y2="19"></line>
                <path d="M5 5h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-3a2 2 0 0 0 0 -4v-3a2 2 0 0 1 2 -2"></path>
              </svg>
            </div>
            <h4 className="text-xl font-medium text-gray-700">Data & Logic</h4>
            <p className="text-base text-center text-gray-500">
              Full JSON data sample files for pages and components. Almost
              actions are fully logic processed (add to cart, update cart,
              wishlist ...)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
