import React from "react";
import home1 from "images/landing/home1.png";
import home2 from "images/landing/home2.png";
import home3 from "images/landing/home3.png";

export const SectionDemos = () => {
  const data = [
    {
      img: home1,
      text: "home style 1",
      link: "https://zango.netlify.app/",
    },
    {
      img: home2,
      text: "home style 2",
      link: "https://zango.netlify.app/home2",
    },
    {
      img: home3,
      text: "home style 3",
      link: "https://zango.netlify.app/home3",
    },
  ];
  return (
    <section id="demos" className="py-20 px-4 bg-white max-w-6xl mx-auto">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold tracking-tight text-center">
          3+ Home pages
        </h2>
        <p className="mt-2 text-lg text-center text-gray-600 mx-auto max-w-screen-sm">
          Modern, Elegant & Beautiful home pages for your shop. Easy to
          customize and well organize code ready to use
        </p>
        <div className="grid grid-cols-4 gap-8 mt-10 sm:grid-cols-8 lg:grid-cols-12 sm:px-8 xl:px-0">
          {data.map((item, index) => {
            return (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={item.link}
                key={index}
                className="col-span-4 flex flex-col rounded-2xl overflow-hidden h-[500px] group shadow-lg"
              >
                <div className="relative z-10 bg-gray-100 flex-grow overflow-hidden">
                  <img
                    className="absolute top-0 left-0 group-hover:-translate-y-full group-hover:top-full transform transition-all duration-[2s] ease-linear z-10"
                    src={item.img}
                    alt={item.text}
                  />
                </div>
                <div className="right-0 bg-white px-3 py-5 text-center">
                  <span className="font-medium capitalize">{item.text}</span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
