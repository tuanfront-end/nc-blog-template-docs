import React from "react";
import Heading from "./Heading";
import home1 from "images/landing/home1.png";
import home2 from "images/landing/home2.png";
import home3 from "images/landing/home3.png";

export const SectionDemos = () => {
  const data = [
    {
      img: home1,
      text: "home style 1",
      link: "https://ncmaz.chisnghiax.com/",
    },
    {
      img: home2,
      text: "home style 2",
      link: "https://ncmaz.chisnghiax.com/home-2/",
    },
    {
      img: home3,
      text: "home style 3",
      link: "https://ncmaz.chisnghiax.com/home-3/",
    },
    
  ];
  return (
    <section id="demos" className="py-20">
      <Heading className="text-center"> 3+ Home pages</Heading>
      <p className="mt-2 text-lg text-center text-gray-400 mx-auto max-w-screen-sm">
        Modern, Elegant & Beautiful home pages for your magazine. We plan to
        show new demos regularly
      </p>
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-10">
        {data.map((item, index) => {
          return (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={item.link}
              key={index}
              className="flex flex-col group"
            >
              <div className="relative shadow-lg z-10 flex-grow h-0 aspect-w-3 aspect-h-3 overflow-hidden border border-gray-700 rounded-2xl transform transition-transform duration-500 hover:shadow-2xl hover:scale-105">
                <img
                  className="block absolute inset-0 object-cover rounded-2xl opacity-100"
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
        <div className="relative shadow-lg z-10 flex-grow h-0 aspect-w-3 aspect-h-3 bg-gray-800 bg-opacity-60  rounded-2xl border border-gray-700">
          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="uppercase tracking-widest text-2xl">Comming soon</h3>
          </div>
        </div>
      </div>
    </section>
  );
};
