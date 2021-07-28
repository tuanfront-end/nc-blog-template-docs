import React from "react";

const plugins = [
  {
    name: "React",
    desc: "React is a JavaScript library for building user interfaces. Learn  what React is all about on",
    redmoreLink: "http://reactjs.org/",
  },
  {
    name: "Typescript",
    desc: "By understanding JavaScript, TypeScript saves you time catching errors and providing fixes before you run code.",
    redmoreLink: "https://www.typescriptlang.org/",
  },
  {
    name: "React router dom",
    desc: "To get started with React Router in a web app, you’ll need a React web app. If you need to create one, we recommend you try Create React App. It’s a popular tool that works really well with React Router.",
    redmoreLink: "https://reactrouter.com/",
  },
  {
    name: "Redux Toolkit",
    desc: "The Redux Toolkit package is intended to be the standard way to write Redux logic. It was originally created to help address three common concerns about Redux.",
    redmoreLink: "https://redux-toolkit.js.org/",
  },
  {
    name: "Node-sass",
    desc: "Node-sass is a library that provides binding for Node.js to LibSass, the C version of the popular stylesheet preprocessor, Sass.",
    redmoreLink: "https://www.npmjs.com/package/node-sass",
  },
  {
    name: "TailwindCss",
    desc: "A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.",
    redmoreLink: "https://tailwindcss.com/",
  },
  {
    name: "Headlessui",
    desc: "Completely unstyled, fully accessible UI components, designed to integrate beautifully with Tailwind CSS",
    redmoreLink: "https://headlessui.dev/",
  },
  {
    name: "React-player",
    desc: "A React component for playing a variety of URLs, including file paths, YouTube, Facebook, Twitch, SoundCloud, Streamable, Vimeo, Wistia, Mixcloud, DailyMotion and Kaltura",
    redmoreLink: "https://www.npmjs.com/package/react-player",
  },
];

const PluginsUsed = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Library</th>
            <th>Description</th>
            <th>More</th>
          </tr>
        </thead>
        <tbody>
          {plugins.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.desc}</td>
              <td>
                <a
                  href={item.redmoreLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.redmoreLink}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PluginsUsed;
