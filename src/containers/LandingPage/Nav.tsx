import SwitchDarkMode from "Components/SwitchDarkMode";
import { ChartBarIcon } from "@heroicons/react/solid";
import React from "react";
import Logo from "Components/Logo";
import Button from "Components/Button";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <section className="w-full px-4 antialiased bg-gray-800 bg-opacity-40 backdrop-filter backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl py-6 mx-auto sm:px-6 lg:px-8 flex items-center flex-wrap sm:flex-nowrap ">
        <Link to="/">
          <span className="sr-only">nc Blog</span>
          <Logo />
        </Link>
        <div className="w-full flex-none mt-4 sm:mt-0 sm:w-auto sm:ml-auto flex flex-wrap items-center">
          <Link to="/docs" className="hover:text-gray-400 ">
            <abbr className="sm:hidden" title="Documentation">
              Docs
            </abbr>
            <span className="hidden sm:inline">Documentation</span>
          </Link>
          <a
            href="https://nc-blog.netlify.app/"
            className="mx-6  hover:text-gray-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>
          <Button>
            <span className="sm:hidden" title="Documentation">
              Purchase now
            </span>
            <span className="hidden sm:inline"> Purchase template</span>
          </Button>
        </div>
      </div>
    </section>
  );
};
