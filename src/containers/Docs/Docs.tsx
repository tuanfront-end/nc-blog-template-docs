import React, { useState } from "react";
import Logo from "Components/Logo";
import { Link } from "react-router-dom";
import ComponentStructure from "./ComponentStructure";
import Dependencies from "./Dependencies";
import FolderStructure from "./FolderStructure";
import GettingStarted from "./GettingStarted";
import Install from "./Install";
import PluginsUsed from "./PluginsUsed";
import SourcesAndCredits from "./SourcesAndCredits";
import logoimg from "images/logo.png";
import Support from "./Support";

const Docs = () => {
  const SECTIONS = [
    {
      id: "gettingStarted",
      text: "Getting Started",
      desc: "Thank you for purchasing Our Theme",
      component: <GettingStarted />,
    },
    {
      id: "folderStructure",
      text: "Folder Structure",
      desc: "Folder Structure",
      component: <FolderStructure />,
    },
    {
      id: "dependencies",
      text: "Dependencies",
      desc: "Dependencies",
      component: <Dependencies />,
    },
    {
      id: "install",
      text: "Install",
      desc: "install",
      component: <Install />,
    },
    {
      id: "pluginsUsed",
      text: "Plugins Used",
      desc: "Plugins Used",
      component: <PluginsUsed />,
    },
    {
      id: "componentStructure",
      text: "Component Structure",
      desc: "Component Structure",
      component: <ComponentStructure />,
    },

    {
      id: "sourcesAndCredits",
      text: "Sources And Credits",
      desc: "Sources And Credits",
      component: <SourcesAndCredits />,
    },
    {
      id: "support",
      text: "Support",
      desc: "Support",
      component: <Support />,
    },
  ] as const;

  const [sectionActive, setSectionActive] = useState<number>(0);
  const [showSidebarSM, setShowSidebarSM] = useState<boolean>(false);

  const renderSidebar = () => {
    return (
      <div
        id="sidebar"
        className={`fixed z-40 min-w-[300px] left-0 top-0 flex-none h-full bg-gray-50 lg:static lg:h-auto lg:overflow-y-visible lg:pt-0 lg:w-1/4 xl:w-1/5  ${
          showSidebarSM ? "shadow-lg lg:shadow-none" : "hidden"
        } lg:block xl:pl-8`}
      >
        <div className="h-full overflow-y-auto scrolling-touch lg:h-auto lg:block lg:sticky overflow-hidden lg:top-18 ">
          <nav className="px-1 pt-6 overflow-y-auto font-medium text-base sm:px-3 xl:px-5 lg:text-sm pb-10 lg:pt-10 lg:pb-14 sticky lg:h-(screen-18)">
            <Link to="/#" className="flex items-start">
              <Logo src={logoimg} />
            </Link>
            <ul className="mt-8">
              {SECTIONS.map((section, index) => {
                const isActive = index === sectionActive;
                return (
                  <li key={section.id}>
                    <a
                      className={`px-3 py-2 transition-colors duration-200 relative block ${
                        isActive
                          ? "text-blue-700"
                          : "hover:text-gray-900 text-gray-500"
                      }`}
                      href="/#"
                      onClick={(e) => {
                        e.preventDefault();
                        setSectionActive(index);
                        setShowSidebarSM(false);
                      }}
                    >
                      {isActive && (
                        <span className="rounded-md absolute inset-0 bg-gray-100" />
                      )}
                      <span className="relative">{section.text}</span>
                    </a>
                  </li>
                );
              })}
              {/* <li>
                <Link
                  className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500"
                  to="/landing"
                >
                  <span className="relative">{`⬅ Landing page`}</span>
                </Link>
              </li> */}
            </ul>
          </nav>
        </div>
      </div>
    );
  };

  const renderContentWrap = () => {
    const data = SECTIONS[sectionActive];
    return (
      <div
        id="content-wrapper"
        className="min-w-0 w-full flex-auto lg:static lg:max-h-full lg:overflow-visible"
      >
        <div className="w-full flex">
          <div className="min-w-0 flex-auto px-4 sm:px-6 xl:px-8 pt-10 pb-24 lg:pb-16">
            <div className="pb-10 border-b border-gray-200 mb-10">
              <h1 className="inline-block text-4xl font-extrabold text-gray-900 tracking-tight">
                {data.text}
              </h1>
              <p className="mt-1 text-lg text-gray-500">{data.desc}</p>
            </div>
            <div className="prose prose-sm !max-w-screen-md sm:prose lg:prose-lg dark:prose-dark">
              {data.component}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="text-gray-500 relative bg-white">
      <div
        className="lg:hidden w-14 h-14 bg-indigo-600 rounded-full flex items-center justify-center fixed right-4 bottom-4 text-white z-50"
        onClick={() => setShowSidebarSM(!showSidebarSM)}
      >
        {showSidebarSM ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </div>
      <div className="lg:flex min-h-screen">
        {renderSidebar()}
        {renderContentWrap()}
      </div>
    </div>
  );
};

export default Docs;
