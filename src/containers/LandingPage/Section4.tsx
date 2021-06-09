import React from "react";

const Section4 = () => {
  return (
    <section className="relative py-16 bg-white min-w-screen animation-fade animation-delay">
      <div className="container px-0 px-8 mx-auto sm:px-12 xl:px-5">
        <p className="text-xs font-bold text-left text-blue-700 uppercase sm:mx-6 sm:text-center sm:text-normal sm:font-bold">
          Got a Question? We’ve got answers.
        </p>
        <h3 className="mt-1 text-2xl font-bold text-left text-gray-800 sm:mx-6 sm:text-3xl md:text-4xl lg:text-5xl sm:text-center sm:mx-0">
          Frequently Asked Questions
        </h3>
        <div className="w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3 rounded-3xl">
          <h3 className="text-lg font-bold text-blue-700 sm:text-xl md:text-2xl">
            How does it work?
          </h3>
          <p className="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
            Zango Built with React, Redux toolkit, Typescript, and the latest
            Tailwindcss, Headless Ui modern. Perfect starting point for your
            next e-commerce site.
          </p>
        </div>
        <div className="w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3 rounded-3xl">
          <h3 className="text-lg font-bold text-blue-700 sm:text-xl md:text-2xl">
            How do I make changes dyamic data?
          </h3>
          <p className="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
            Full JSON data sample files for pages and components, easily change
            on data folder. Almost actions are fully logic processed (add to
            cart, update cart, wishlist, shop single router ...)
          </p>
        </div>
        <div className="w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3 rounded-3xl">
          <h3 className="text-lg font-bold text-blue-700 sm:text-xl md:text-2xl">
            How do I make changes and configure my site?
          </h3>
          <p className="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
            You can easily change your site settings inside of your site
            tailwind config file, demo data folder, react typescript code
            (*.tsx, *.ts).
          </p>
        </div>
        <div className="w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3 rounded-3xl">
          <h3 className="text-lg font-bold text-blue-700 sm:text-xl md:text-2xl">
            Free updates and support?
          </h3>
          <p className="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
            Yes, we do! Free updates and support is lifetime. Cherry.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section4;
