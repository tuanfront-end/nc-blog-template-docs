import React from "react";
import Heading from "./Heading";
import home1 from "images/landing/home1.png";
import home2 from "images/landing/home2.png";
import home3 from "images/landing/home3.png";
import home4 from "images/landing/home4.png";
import home5 from "images/landing/home5.png";
import home6 from "images/landing/home6.png";
import homeRtl from "images/landing/home-rtl.png";

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
    {
      img: home4,
      text: "home style 4",
      link: "https://ncmaz.chisnghiax.com/home-6/",
      isNew: true,
    },
    {
      img: home5,
      text: "home style 5",
      link: "https://ncmaz.chisnghiax.com/home-4-2/",
      isNew: true,
    },
    {
      img: home6,
      text: "home style 6",
      link: "https://ncmaz.chisnghiax.com/home-5/",
      isNew: true,
    },
    {
      img: homeRtl,
      text: "Home style RTL",
      link: "https://ncmaz-rtl.chisnghiax.com/",
      isNew: true,
    },
  ];
  return (
    <section id="demos" className="py-20">
      <Heading className="text-center"> 7+ Home pages</Heading>
      <p className="mt-2 text-lg text-center text-gray-400 mx-auto max-w-screen-sm">
        Modern, Elegant & Beautiful home pages for your magazine. We plan to
        show new demos regularly
      </p>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-10">
        {data.map((item, index) => {
          return (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={item.link}
              key={index}
              className="flex flex-col group relative"
            >
              {item.isNew && (
                <span className="flex items-center justify-center py-2 px-5 min-w-[100px] bg-red-500 text-white absolute -top-5 left-3 z-20 rounded-full font-medium tracking-wider">
                  New!
                </span>
              )}
              <div className="relative shadow-lg z-10 flex-grow h-0 aspect-w-3 aspect-h-3 overflow-hidden border border-gray-700 rounded-2xl transform transition-transform duration-300 hover:shadow-2xl hover:scale-[1.015]">
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
