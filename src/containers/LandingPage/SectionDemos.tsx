import React from "react";
import Heading from "./Heading";
import main from "images/landing/main.png";
import mainDark from "images/landing/mainDark.png";
import purple from "images/landing/purple.png";
import purpleDark from "images/landing/purpleDark.png";
import pink from "images/landing/pink.png";
import pinkDark from "images/landing/pinkDark.png";
import yellow from "images/landing/yellow.png";
import yellowDark from "images/landing/yellowDark.png";
import teal from "images/landing/teal.png";
import tealDark from "images/landing/tealDark.png";
import orange from "images/landing/orange.png";
import orangeDark from "images/landing/orangeDark.png";
import cyan from "images/landing/cyan.png";
import cyanDark from "images/landing/cyanDark.png";
import green from "images/landing/green.png";
import greenDark from "images/landing/greenDark.png";

export const SectionDemos = () => {
  const data = [
    {
      img: main,
      imgDark: mainDark,
      text: "home style 1",
      link: "https://nc-blog.netlify.app/",
    },
    {
      img: pink,
      imgDark: pinkDark,
      text: "home style 2",
      link: "https://nc-blog.netlify.app/theme-pink-coolGrey",
    },
    {
      img: yellow,
      imgDark: yellowDark,
      text: "home style 3",
      link: "https://nc-blog.netlify.app/theme-yellow-grey",
    },
    {
      img: purple,
      imgDark: purpleDark,
      text: "home style 4",
      link: "https://nc-blog.netlify.app/theme-purple-blueGrey",
    },
    {
      img: teal,
      imgDark: tealDark,
      text: "home style 5",
      link: "https://nc-blog.netlify.app/theme-teal-blueGrey",
    },
    {
      img: orange,
      imgDark: orangeDark,
      text: "home style 6",
      link: "https://nc-blog.netlify.app/theme-orange-grey",
    },
    {
      img: cyan,
      imgDark: cyanDark,
      text: "home style 7",
      link: "https://nc-blog.netlify.app/theme-cyan-warmGrey",
    },
    {
      img: green,
      imgDark: greenDark,
      text: "home style 8",
      link: "https://nc-blog.netlify.app/theme-green-grey",
    },
  ];
  return (
    <section id="demos" className="py-20">
      <Heading className="text-center"> 8+ Home pages</Heading>
      <p className="mt-2 text-lg text-center text-gray-400 mx-auto max-w-screen-sm">
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
              className="flex flex-col group"
            >
              <div className="relative shadow-lg z-10 flex-grow h-0 aspect-w-4 aspect-h-3 overflow-hidden border border-gray-700 rounded-2xl">
                <img
                  className="block absolute inset-0 object-cover rounded-2xl opacity-100 group-hover:opacity-0 transition-all duration-500"
                  src={item.img}
                  alt={item.text}
                />
                <img
                  className="transform transition-all group-hover:translate-x-0 opacity-0 group-hover:opacity-100 absolute inset-0 object-cover rounded-2xl duration-500"
                  src={item.imgDark}
                  alt={item.text}
                />
              </div>
              <div className="px-3 py-5 text-center">
                <span className="font-medium capitalize">{item.text}</span>
              </div>
            </a>
          );
        })}
        <div className="relative shadow-lg z-10 flex-grow h-0 aspect-w-4 aspect-h-3 bg-gray-800 bg-opacity-60 backdrop-filter backdrop-blur-md rounded-2xl border border-gray-700">
          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="uppercase tracking-widest text-2xl">Comming soon</h3>
          </div>
        </div>
      </div>
    </section>
  );
};
