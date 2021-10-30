import React from "react";

const Section1 = () => {
  return (
    <section className="w-full pb-12 ">
      {/* <!-- Main Hero Content --> */}
      <div className="container max-w-lg py-10 md:pt-28 mx-auto text-left md:max-w-none md:text-center">
        <h1 className="text-5xl font-extrabold leading-10 tracking-tight text-left md:text-center sm:leading-none md:text-6xl lg:text-7xl">
          <span className="inline md:block">Modern & Creative</span>{" "}
          <span className="mt-2 text-blue-600 md:inline-block">
            Booking online, Real Estate
          </span>
        </h1>
        <div className="mx-auto mt-5 text-gray-400 md:mt-12 md:max-w-lg md:text-center lg:text-lg">
          Modern & Creative, chisfis is an React + Typescript theme, a perfect
          starting point for your next Booking online and Real Estate site.
          (Stay, Car, Experiences listings, Real Estate, property, travel, tour,
          hotel...)
        </div>
        <div className="flex flex-col items-center mt-12 text-center">
          <span className="relative inline-flex w-full md:w-auto">
            <a
              href="https://chisnghiax.com/chisfis/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full px-8 py-4 text-base font-bold leading-6 text-white bg-blue-700 border border-transparent md:w-auto hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 rounded-full"
            >
              {`Live demo now `}
            </a>
          </span>
          <a href="#demos" className="mt-3 text-sm text-blue-600">
            Learn more
          </a>
        </div>
      </div>
      {/* <!-- End Main Hero Content --> */}
    </section>
  );
};

export default Section1;
