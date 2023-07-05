import React from "react";

export const Navbar = () => {
  return (
    <section className="bg-blue-200 flex flex-col items-center lg:h-[50px] lg:flex-row lg:justify-between lg:px-5">
      <div className="text-red-500 text-4xl">
        <span className="font-mono text-blue-900">todo</span>
        <span className="text-4xl ">.</span>
      </div>
      <div className="menus">
        <ul className="flex space-x-3">
          <li className="hover:cursor-pointer hover:text-blue-950">Home</li>
          <li className="hover:cursor-pointer hover:text-blue-950">Lists</li>
          <li className="hover:cursor-pointer hover:text-blue-950">About Us</li>
          <li className="hover:cursor-pointer hover:text-blue-950">
            Contact Us
          </li>
        </ul>
      </div>
    </section>
  );
};
