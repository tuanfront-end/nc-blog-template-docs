import React from "react";
import Heading from "./Heading";
import {
  ChipIcon,
  CubeIcon,
  MoonIcon,
  CodeIcon,
  SupportIcon,
  DatabaseIcon,
  MusicNoteIcon,
  VideoCameraIcon,
  PhotographIcon,
} from "@heroicons/react/solid";

const data = [
  {
    title: "React Template",
    desc: "Built with React, Redux toolkit, Typescript, and the latest Tailwindcss, HeadlessUI react",
    icon: ChipIcon,
  },
  {
    title: "100% responsive",
    desc: "Works on all devices and touch sensors. High quality images, fonts & text.",
    icon: CubeIcon,
  },
  {
    title: "Dark mode",
    desc: "Darkmode modern. Helps you quickly turn the theme mode to dark at night time.",
    icon: MoonIcon,
  },
  {
    title: "Customizing the theme",
    desc: "Completely customize the template and whole Taiwindcss, quickly modifying its config variables.",
    icon: CodeIcon,
  },
  {
    title: "Free updates and support",
    desc: "I work closely with my customers to provide a high standard of  support and quick bug fixes.",
    icon: SupportIcon,
  },
  {
    title: "Data & Logic",
    desc: " Full JSON data sample files for pages and components. Almost actions are fully logic processed (bookmark, like, actions...)",
    icon: DatabaseIcon,
  },
  {
    title: "Music & Podcast",
    desc: "You can listen to music or podcasts live while reading other articles or exploring the entire web",
    icon: MusicNoteIcon,
  },
  {
    title: "Video card & preview",
    desc: "You can preview the video card by just hovering the mouse over the card",
    icon: VideoCameraIcon,
  },
  {
    title: "Post Gallery ",
    desc: "With post type gallery extremely modern and beautiful",
    icon: PhotographIcon,
  },
];

const Section2 = () => {
  return (
    <section id="features" className="py-20 max-w-6xl mx-auto">
      <Heading className="text-center">Our Features</Heading>
      <p className="mt-2 text-lg text-center text-gray-400">
        Check out our list of awesome features below.
      </p>

      <div className="grid grid-cols-4 gap-8 mt-10 sm:grid-cols-8 lg:grid-cols-12 sm:px-8 xl:px-0">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center col-span-4 px-8 py-12 space-y-4 bg-gray-800 bg-opacity-30 rounded-3xl border border-gray-700"
          >
            <div className="p-3 text-gray-100 bg-blue-700 rounded-full">
              <item.icon className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-medium text-gray-200">{item.title}</h4>
            <p className="text-base text-center text-gray-400">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section2;
