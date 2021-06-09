import React from "react";
import main from "images/landing/main.png";
import purple from "images/landing/purple.png";
import pink from "images/landing/pink.png";
import yellow from "images/landing/yellow.png";
import teal from "images/landing/teal.png";
import orange from "images/landing/orange.png";

export const SectionDemos = () => {
  const data = [
    {
      img: main,
      text: "home style 1",
      link: "https://nc-blog.netlify.app/",
    },
    {
      img: pink,
      text: "home style 2",
      link: "https://nc-blog.netlify.app/theme-pink-coolGrey",
    },
    {
      img: yellow,
      text: "home style 3",
      link: "https://nc-blog.netlify.app/theme-yellow-grey",
    },
    {
      img: purple,
      text: "home style 4",
      link: "https://nc-blog.netlify.app/theme-purple-blueGrey",
    },
    {
      img: teal,
      text: "home style 5",
      link: "https://nc-blog.netlify.app/theme-teal-blueGrey",
    },
    {
      img: orange,
      text: "home style 6",
      link: "https://nc-blog.netlify.app/theme-orange-grey",
    },
  ];
  return (
    <section id="demos" className="py-20 px-4 bg-white max-w-6xl mx-auto">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold tracking-tight text-center">
          8+ Home pages
        </h2>
        <p className="mt-2 text-lg text-center text-gray-600 mx-auto max-w-screen-sm">
          Modern, Elegant & Beautiful home pages for your magazine. Easy to
          customize and well organize code ready to use
        </p>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-10">
          {data.map((item, index) => {
            return (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={item.link}
                key={index}
                className="flex flex-col rounded-2xl overflow-hidden shadow-lg group"
              >
                <div className="relative z-10 bg-gray-100 flex-grow h-0 aspect-w-16 aspect-h-9">
                  <img
                    className="absolute inset-0 object-cover transform transition-transform group-hover:scale-105"
                    src={item.img}
                    alt={item.text}
                  />
                </div>
                <div className="bg-white px-3 py-5 text-center">
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
