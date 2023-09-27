import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <section className="bg-blue-200 sticky top-0 flex flex-col items-center lg:h-[50px] lg:flex-row lg:justify-between lg:px-5">
      <Link to="/lists" className="text-red-500 text-4xl">
        <span className="font-mono text-blue-900">todo</span>
        <span className="text-4xl ">.</span>
      </Link>
      <div className="menus">
        <ul className="flex space-x-3">
          <Link to="/" className="hover:cursor-pointer hover:text-blue-950">
            Home
          </Link>
          <Link
            to="/lists"
            className="hover:cursor-pointer hover:text-blue-950"
          >
            Lists
          </Link>
          <Link
            to="/about"
            className="hover:cursor-pointer hover:text-blue-950"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="hover:cursor-pointer hover:text-blue-950"
          >
            Contact Us
          </Link>
        </ul>
      </div>
    </section>
  );
};
