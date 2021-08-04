import React from "react";
import Heading from "./Heading";

const data = [
  {
    q: " How does it work?",
    a: `  ncmaz Built with React, Redux toolkit, Typescript, and the latest
    Tailwindcss, Headless Ui modern. Perfect starting point for your
    next e-commerce site.`,
  },
  {
    q: "  How do I make changes dyamic data?",
    a: `  Full JSON data sample files for pages and components, easily change
    on data folder. Almost actions are fully logic processed (add to
    cart, update cart, wishlist, shop single router ...)`,
  },
  {
    q: "  How do I make changes and configure my site?",
    a: `  You can easily change your site settings inside of your site
    tailwind config file, demo data folder, react typescript code
    (*.tsx, *.ts).`,
  },
  {
    q: "  Free updates and support?",
    a: `  Yes, we do! Free updates and support is lifetime. 🎉.`,
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
      ))}
    </section>
  );
};

export default Section4;
