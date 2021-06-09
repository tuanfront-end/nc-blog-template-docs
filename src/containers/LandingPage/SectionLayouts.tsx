import React from "react";
import about from "images/landing/05_about.jpg";
import shop from "images/landing/07_shop.jpg";
import shopSingle from "images/landing/09_shop-single.jpg";
import cart from "images/landing/10_cart.jpg";
import checkout from "images/landing/11_checkout.jpg";
import blog from "images/landing/12_blog.jpg";
import blogMasonry from "images/landing/13_blog-masonary.jpg";
import blogSingle from "images/landing/14_blog-single.jpg";

export const SectionLayouts = () => {
  const data = [
    {
      img: about,
      text: "about page",
      link: "https://zango.netlify.app/about-us",
    },
    {
      img: shop,
      text: "shop page",
      link: "https://zango.netlify.app/shop",
    },
    {
      img: shopSingle,
      text: "shop single",
      link: "https://zango.netlify.app/shop-single/1",
    },
    {
      img: cart,
      text: "cart page",
      link: "https://zango.netlify.app/cart",
    },
    {
      img: checkout,
      text: "checkout page",
      link: "https://zango.netlify.app/checkout",
    },
    {
      img: blog,
      text: "blog page",
      link: "https://zango.netlify.app/the-blog",
    },
    {
      img: blogMasonry,
      text: "blog masonry",
      link: "https://zango.netlify.app/the-blog-masonry",
    },
    {
      img: blogSingle,
      text: "Blog single",
      link: "https://zango.netlify.app/blog-single/1",
    },
  ];

  return (
    <section className="py-20 bg-white mx-auto">
      <div className="px-4 max-w-screen-2xl mx-auto">
        <h2 className="text-4xl font-bold tracking-tight text-center">
          Shop layout
        </h2>
        <p className="mt-2 text-lg text-center text-gray-600 mx-auto max-w-screen-sm">
          Modern, Elegant & Beautiful home pages for your shop. Easy to
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
                className="col-span-3 flex flex-col rounded-2xl overflow-hidden h-[500px] group shadow-lg"
              >
                <div className="relative z-10 bg-gray-100 flex-grow overflow-hidden">
                  <img
                    className="absolute top-0 left-0 group-hover:-translate-y-full group-hover:top-full transform transition-all duration-1000 ease-linear z-10"
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
