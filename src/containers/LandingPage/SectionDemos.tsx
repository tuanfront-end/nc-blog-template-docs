import React from "react";
import Heading from "./Heading";
import home1 from "images/landing/home.png";
import home2 from "images/landing/home2.png";

export const SectionDemos = () => {
  const data = [
    {
      img: home1,
      text: "Booking online",
      link: "https://chisnghiax.com/chisfis/",
    },
    {
      img: home2,
      text: "Real Estate",
      link: "https://chisnghiax.com/chisfis/home-2",
    },
  ];
  return (
    <section id="demos" className="py-20">
      <Heading className="text-center"> 30+ inner pages</Heading>
      <p className="mt-2 text-lg text-center text-gray-400 mx-auto max-w-screen-sm">
        Modern, Elegant & Beautiful for your travel site. We plan to show new
        demos regularly
      </p>
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-10 mt-16">
        {data.map((item, index) => {
          return (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={item.link}
              key={index}
              className="flex flex-col group"
            >
              <div className="relative shadow-lg z-10 flex-grow  border border-gray-700 rounded-2xl transform transition-transform duration-300 hover:shadow-2xl hover:scale-[1.02]">
                <img
                  className="rounded-2xl opacity-100 w-full"
                  src={item.img}
                  alt={item.text}
                />
              </div>
              <div className="px-3 py-5 text-center">
                <span className="font-medium capitalize">{item.text}</span>
              </div>
            </a>
          );
        })}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://chisnghiax.com/chisfis"
          className="relative w-full z-10 flex flex-col flex-grow "
        >
          <div className="w-full relative shadow-lg flex-grow bg-gray-800 bg-opacity-60  rounded-2xl border border-gray-700">
            <div className="absolute inset-0 p-4 flex items-center justify-center">
              <h3 className="uppercase tracking-widest text-2xl">
                30+ inner pages
              </h3>
            </div>
          </div>
          <div className="px-3 py-5 text-center">
            <span className="font-medium capitalize">30+ inner pages</span>
          </div>
        </a>
      </div>
    </section>
  );
};
