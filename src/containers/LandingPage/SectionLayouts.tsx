import React from "react";
import about from "images/landing/home.png";
import search from "images/landing/home.png";
import author from "images/landing/home.png";
import archive from "images/landing/home.png";

export const SectionLayouts = () => {
  const data = [
    {
      img: about,
      text: "about page",
      link: "https://chisfis.netlify.app/about",
    },
    {
      img: search,
      text: "shop page",
      link: "https://chisfis.netlify.app/search",
    },
    {
      img: author,
      text: "shop single",
      link: "https://chisfis.netlify.app/author/the-demo-author-slug",
    },
    {
      img: archive,
      text: "cart page",
      link: "https://chisfis.netlify.app/archive/the-demo-archive-slug",
    },
  ];

  return (
    <section className="py-20 mx-auto">
      <div className="px-4 max-w-screen-2xl mx-auto">
        <h2 className="text-4xl font-bold tracking-tight text-center">
          Template layouts
        </h2>
        <p className="mt-2 text-lg text-center text-gray-600 mx-auto max-w-screen-sm">
          Modern, Elegant & Beautiful home pages for your magazine. Easy to
          customize and well organize code ready to use
        </p>
        <div className="grid grid-cols-4 gap-8 mt-10 sm:grid-cols-6 lg:grid-cols-9 xl:grid-cols-12 sm:px-8 xl:px-0">
          {data.map((item, index) => {
            return (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="col-span-3 flex flex-col"
              >
                <img
                  className="w-full rounded-2xl"
                  src={item.img}
                  alt={item.text}
                />
                <div className="right-0 px-3 py-5 text-center">
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
